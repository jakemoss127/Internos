from flask import Flask, jsonify
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv
import os
# Replace this with your actual connection string

app = Flask(__name__)

# Load environment variables from .env file
load_dotenv()

# Set up MongoDB connection
connection_string = os.getenv('CONNECTION_STRING')

# Replace this with your actual connection string

def get_db_connection():
    conn = psycopg2.connect(connection_string)
    return conn

@app.route('/internships', methods=['GET'])
def internships():
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute('SELECT * FROM internships;')  # Adjust the query as needed
    internships = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(internships)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
