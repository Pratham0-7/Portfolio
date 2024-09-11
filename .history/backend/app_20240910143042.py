import logging
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
client = MongoClient(MONGO_URI)
db = client[os.getenv('DB_NAME')]
contact_collection = db[os.getenv('COLLECTION_NAME')]

def serialize_document(doc):
    """Convert MongoDB document to JSON serializable format."""
    if '_id' in doc:
        doc['_id'] = str(doc['_id'])
    return doc

@app.route('/contact', methods=['POST'])
def contact():
    try:
        data = request.json
        result = contact_collection.insert_one(data)
        response_data = serialize_document(data)
        response_data['_id'] = str(result.inserted_id)
        print(MONGO_URI)
        print(os.getenv('DB_NAME'))
        print(os.getenv('COLLECTION_NAME'))
        return jsonify({"message": "Data received and saved!", "data": response_data})
    except Exception as e:
        logging.error(f"Error occurred: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
