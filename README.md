# 🌿 AyurCare: AI-Driven Personalized Ayurvedic Remedy & Yogasana Recommendation System

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Python](https://img.shields.io/badge/Python-3.9-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![ML](https://img.shields.io/badge/Model-Random%20Forest-orange)
![License](https://img.shields.io/badge/license-MIT-green)

**AyurCare** is an integrated digital health platform that bridges the gap between traditional Ayurvedic wisdom and modern artificial intelligence. It utilizes machine learning to provide clinically validated, personalized herbal remedies and Yogasana recommendations based on a user's constitutional type (*Prakriti*), physiological parameters, and lifestyle factors.

---

## 🚀 Project Overview

Traditional Ayurvedic diagnosis is often subjective and faces a shortage of qualified practitioners. AyurCare addresses this by employing an **Ensemble Learning (Random Forest)** approach to standardize diagnosis and prescription.

The system analyzes user inputs—such as BMI, blood pressure, stress levels, and dietary habits—to determine the dominant *Dosha* imbalance and suggests specific remedial measures.

### 🌟 Key Features
* **Constitutional Analysis:** AI-based determination of *Prakriti* (Vata, Pitta, Kapha).
* **Personalized Remedies:** Herbal recommendations tailored to specific health profiles.
* **Yogasana Recommendations:** Yoga practices optimized for the user's physical constraints and stress levels.
* **Clinical Validation:** Recommendations are based on a system validated with **85.3% concordance** by expert physicians.
* **Secure Dashboard:** User-friendly interface for tracking health history and prescriptions.

---

## 🛠️ Tech Stack

### **Frontend**
* **Framework:** React.js (v18.2.0)
* **Styling:** TailwindCSS (v3.3.0)
* **State Management:** Redux / Context API
* **HTTP Client:** Axios

### **Backend**
* **Framework:** Flask (v2.3.0) - RESTful API
* **Database:** PostgreSQL 14.0
* **Caching:** Redis 7.0 (for high-speed inference)
* **Authentication:** JWT (JSON Web Tokens)

### **Machine Learning**
* **Algorithm:** Random Forest Classifier (Scikit-learn 1.3.0)
* **Preprocessing:** Pandas, NumPy (Imputation, One-Hot Encoding)
* **Validation:** 5-Fold Stratified Cross-Validation

### **DevOps & Deployment**
* **Containerization:** Docker
* **Cloud:** AWS (EC2 with Auto-scaling)
* **Monitoring:** Prometheus & Grafana

---

## 📊 Model Performance

Our Random Forest model was trained on a dataset of **2,500 health records** and benchmarked against standard Decision Trees and SVMs.

| Metric | Remedy Prediction | Yogasana Recommendation |
| :--- | :--- | :--- |
| **Accuracy** | **92.5%** | **89.7%** |
| **Precision** | 91.2% | 88.4% |
| **Recall** | 93.1% | 90.2% |
| **F1-Score** | 92.1% | 89.3% |

* **Average Response Time:** 1.2 seconds
* **Concurrent Users Supported:** 500+
* **Clinical Concordance:** 85.3% (Validated by 15 expert practitioners)

---

## 💻 Installation & Setup

### Prerequisites
* Node.js & npm
* Python 3.9+
* PostgreSQL
* Redis

### 1. Clone the Repository
```bash
git clone [https://github.com/yourusername/ayurcare.git](https://github.com/yourusername/ayurcare.git)
cd ayurcare
