from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# --- ML Model and Data Loading ---

# Load the trained machine learning model
MODEL_PATH = 'ayur_model.pkl'
model = joblib.load(MODEL_PATH)

# Load the original ayur_data.csv to use as a lookup table for remedies
# Ensure this file has the header row as discussed previously
CSV_PATH = os.path.join(os.path.dirname(__file__), 'ayur_data.csv')
remedy_data = pd.read_csv(CSV_PATH)

# --- End of Loading ---


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Extract features from the request, providing defaults if they are missing
        age = int(data.get('age', 30))
        bp_systolic = int(data.get('bp_systolic', 120))
        bp_diastolic = int(data.get('bp_diastolic', 80))
        # Handle optional sugar_level; provide a neutral default (e.g., average normal)
        sugar_level = int(data.get('sugar_level', 100) if data.get('sugar_level') else 100)

        # Create a NumPy array for the model prediction in the correct order
        features = np.array([[age, bp_systolic, bp_diastolic, sugar_level]])

        # Use the loaded model to make a prediction
        predicted_disease_id = model.predict(features)[0]

        # Look up the remedy details from the pandas DataFrame using the predicted ID
        result_row = remedy_data.iloc[predicted_disease_id]
        
        result = {
            'disease': result_row['Disease'],
            'remedy': result_row['Remedy'],
            'yogasana': result_row['Yogasana'],
            'diet_advice': result_row['Diet Advice'],
            'match_quality': 'predicted' # Indicate that this came from the ML model
        }

        return jsonify({
            'success': True,
            'data': result
        })

    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error processing request: {str(e)}'
        }), 500

@app.route('/diseases', methods=['GET'])
def get_diseases():
    try:
        # Return the list of diseases from our remedy data file
        diseases = remedy_data['Disease'].tolist()
        return jsonify({
            'success': True,
            'diseases': diseases
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)