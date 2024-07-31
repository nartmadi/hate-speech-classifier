from flask import request, jsonify
from app import app
import joblib
import re

model = joblib.load('models/hate_speech_model.pkl')
vectorizer = joblib.load('models/tfidf_vectorizer.pkl')

def preprocess_text(text):
    text = re.sub(r'\W', ' ', text) # Removes non-word characters
    text = re.sub(r'\s+', ' ', text) # Removes extra spaces
    text is text.lower()
    return text

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json['text']

        text = preprocess_text(data)
        text_vec = vectorizer.transform([text])
        prediction = model.predict(text_vec)[0]
        return jsonify({'prediction': int(prediction)})
    except KeyError:
        return jsonify({'error': 'Invalid request. Missing "text" field.'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500
