from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from bson.objectid import ObjectId

# Load environment variables
load_dotenv()

app = Flask(__name__)
# Configure CORS to allow requests from your frontend URL
CORS(app, resources={r"/contact": {"origins": "https://makemyweb.netlify.app"}})

# Connect to MongoDB
MONGO_URI = os.getenv('MONGO_URI')
client = MongoClient(MONGO_URI)
db = client[os.getenv('DB_NAME')]
contact_collection = db[os.getenv('COLLECTION_NAME')]

# Function to serialize MongoDB document to JSON
def serialize_document(doc):
    """Convert MongoDB document to JSON serializable format."""
    if '_id' in doc:
        doc['_id'] = str(doc['_id'])
    return doc

# Route to handle contact form submission
@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    try:
        result = contact_collection.insert_one(data)
        # Prepare the response with the inserted document
        response_data = serialize_document(data)
        response_data['_id'] = str(result.inserted_id)
        return jsonify({"message": "Data received and saved!", "data": response_data}), 201
    except Exception as e:
        return jsonify({"message": "An error occurred", "error": str(e)}), 500

# Run the Flask app with environment-based debug mode
if __name__ == '__main__':
    env = os.getenv('FLASK_ENV', 'development')  # Default to 'development'
    debug = True if env == 'development' else False
    app.run(host='0.0.0.0', port=5000, debug=debug)
