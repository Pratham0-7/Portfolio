import logging
import ssl
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from bson.objectid import ObjectId

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["https://makemyweb.netlify.app"])

MONGO_URI = os.getenv('MONGO_URI')
client = MongoClient(MONGO_URI, ssl=False)
db = client[os.getenv('DB_NAME')]
contact_collection = db[os.getenv('COLLECTION_NAME')]

def serialize_document(doc):
    """Convert MongoDB document to JSON serializable format."""
    if '_id' in doc:
        doc['_id'] = str(doc['_id'])
    return doc

@app.route('/test-db')
def test_db():
    try:
        db.test_collection.insert_one({"test": "value"})
        return "Connection Successful"
    except Exception as e:
        return str(e)


@app.route('/contact', methods=['POST', 'GET'])
def contact():
    if request.method == 'POST':
        try:
            data = request.json
            result = contact_collection.insert_one(data)
            response_data = serialize_document(data)
            response_data['_id'] = str(result.inserted_id)
            return jsonify({"message": "Data received and saved!", "data": response_data})
        except Exception as e:
            logging.error(f"Error occurred: {e}")
            return jsonify({"error": "Internal Server Error"}), 500
    else:
        return jsonify({"message": "GET method not allowed for this endpoint."}), 405

if __name__ == '__main__':
    app.run(port=5000, debug=True)
