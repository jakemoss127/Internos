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

def get_db_connection():
    conn = psycopg2.connect(connection_string)
    return conn

@app.route('/search', methods=['GET'])
def search_internships():
    query = request.args.get('query')
    query += ". You must include the following columns: job_title, employer_name, employer_logo, job_apply_link, job_city"
    if not query:
        app.logger.error("No query provided")
        return jsonify({"error": "No query provided"}), 400

    try:
        app.logger.info(f"Received query: {query}")
        modified_query = f"{query} and YOU MUST limit the results to at most 5"
        sql_query = vn.generate_sql(question=modified_query)

        app.logger.info(f"Generated SQL: {sql_query}")
        if "delete" in sql_query.lower() or "update" in sql_query.lower():
            return jsonify({"message": "Invalid query (delete or update)"}), 200


        
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
