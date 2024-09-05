from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from bson.objectid import ObjectId

load_dotenv()

app = Flask(__name__)
CORS(app)

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
    data = request.json
    result = contact_collection.insert_one(data)
    # Prepare the response with the inserted document
    response_data = serialize_document(data)
    response_data['_id'] = str(result.inserted_id)
    return jsonify({"message": "Data received and saved!", "data": response_data})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
