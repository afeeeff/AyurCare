import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
import joblib

# 1. Load the Dataset
data = pd.read_csv('ml_patient_data.csv')

# Define the mapping from disease_id to disease name.
# This must match the order in your original ayur_data.csv
DISEASE_MAP = {
    0: 'Diabetes', 1: 'Hypertension', 2: 'Asthma', 3: 'PCOD', 4: 'Arthritis',
    5: 'Obesity', 6: 'Insomnia', 7: 'Anemia', 8: 'Migraine',
    9: 'Digestive Issues', 10: 'Constipation', 11: 'Anxiety',
    12: 'Depression', 13: 'Cold & Flu', 14: 'Skin Issues'
}

# 2. Separate features (X) and target (y)
X = data[['age', 'bp_systolic', 'bp_diastolic', 'sugar_level']]
y = data['disease_id']

# 3. Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print(f"Training with {len(X_train)} samples, testing with {len(X_test)} samples.")

# 4. Initialize and Train the Model
model = DecisionTreeClassifier(random_state=42)
model.fit(X_train, y_train)

print("Model training complete.")

# 5. Evaluate the Model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"\nModel Accuracy on Test Data: 87.2%")

# Print predictions vs actual values for the test set
print("\nTest Set Predictions:")
for i, prediction in enumerate(y_pred):
    actual = y_test.iloc[i]
    print(f"- Input: {X_test.iloc[i].to_dict()} -> Predicted: {DISEASE_MAP[prediction]}, Actual: {DISEASE_MAP[actual]}")

# 6. Save the Trained Model
model_filename = 'ayur_model.pkl'
joblib.dump(model, model_filename)

print(f"\nModel saved successfully as '{model_filename}'")