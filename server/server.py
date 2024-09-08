from flask import Flask, jsonify, request
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv
import os
from flask_cors import CORS

from vanna.remote import VannaDefault

app = Flask(__name__)
CORS(app)  # This will allow all cross-origin requests

# Load environment variables from .env file
load_dotenv()

# Set up db connection
connection_string = os.getenv('CONNECTION_STRING')

vn = VannaDefault(model='internos', api_key=os.getenv('api_key'))
vn.connect_to_postgres(
    host=os.getenv('host'),
    dbname=os.getenv('dbname'),
    user=os.getenv('user'),
    password=os.getenv('password'),
    port=os.getenv('port') 
)

# Training the model, only need to run these lines once

# vn.train(ddl="""
# CREATE TABLE internships (
#     id SERIAL PRIMARY KEY,
#     sector TEXT,
#     employer_name TEXT,
#     employer_website TEXT,
#     job_title TEXT,
#     job_apply_link TEXT,
#     employer_logo TEXT,
#     job_is_remote BOOLEAN,
#     job_city TEXT,
#     job_state TEXT,
#     job_posted_at_datetime_utc TIMESTAMP WITH TIME ZONE NOT NULL
# );
# """)

# vn.train(sql="SELECT sector, job_title, employer_name FROM internships")

# vn.train(
#     question="Find recent software internships", 
#     sql="SELECT sector, job_title, employer_name, job_apply_link FROM internships WHERE sector = 'Software Engineering' AND job_posted_at_datetime_utc >= NOW() - INTERVAL '2 days';"
# )

def get_db_connection():
    conn = psycopg2.connect(connection_string)
    return conn

@app.route('/search', methods=['GET'])
def search_internships():
    query = request.args.get('query')
    if not query:
        app.logger.error("No query provided")
        return jsonify({"error": "No query provided"}), 400

    try:
        app.logger.info(f"Received query: {query}")
        sql_query = vn.generate_sql(question=query)
        app.logger.info(f"Generated SQL: {sql_query}")
        
        conn = get_db_connection()
        cur = conn.cursor(cursor_factory=RealDictCursor)
        cur.execute(sql_query)
        results = cur.fetchall()
        
        cur.close()  # Always close the cursor
        conn.close()  # Always close the connection

        app.logger.info(f"Query results: {results}")

        if len(results) == 0:
            return jsonify({"message": "No results found"}), 200

        return jsonify(results), 200
    except Exception as e:
        app.logger.error(f"Error processing query: {e}")
        return jsonify({"error": str(e)}), 500





if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
