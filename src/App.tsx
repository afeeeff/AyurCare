import { useState } from 'react';
import { Leaf, AlertCircle } from 'lucide-react';
import PatientForm from './components/PatientForm';
import ResultsDisplay from './components/ResultsDisplay';
import AyurvedicTips from './components/AyurvedicTips';
import type { PatientData, ApiResponse, RecommendationResult } from './types';

const API_URL = 'http://localhost:5000';

function App() {
  const [results, setResults] = useState<RecommendationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: PatientData) => {
    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: ApiResponse = await response.json();

      if (result.success && result.data) {
        setResults(result.data);
      } else {
        setError(result.message || 'Failed to get recommendations. Please try again.');
      }
    } catch (err) {
      setError('Unable to connect to the server. Please make sure the Flask backend is running on port 5000.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pattern">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="text-center mb-12 animate-fadeIn">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg animate-float">
              <Leaf className="text-white" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
              AyurCare
            </h1>
          </div>
          <p className="text-lg text-emerald-800 max-w-2xl mx-auto">
            Your Personalized Ayurvedic Health Companion
          </p>
          <p className="text-sm text-emerald-700 mt-2">
            Discover natural remedies, yoga practices, and dietary guidance tailored to your health needs
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-emerald-200 animate-fadeIn">
              <h2 className="text-2xl font-bold text-emerald-900 mb-6">Enter Your Health Details</h2>
              <PatientForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 animate-fadeIn">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Error</h3>
                    <p className="text-red-800">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {results && <ResultsDisplay results={results} />}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <AyurvedicTips />
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center pb-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-6 border-2 border-emerald-200 max-w-4xl mx-auto">
            <p className="text-sm text-emerald-800 leading-relaxed">
              <strong className="text-emerald-900">Disclaimer:</strong> AyurCare provides recommendations based on traditional Ayurvedic principles.
              These suggestions are complementary and educational in nature. Always consult a certified Ayurvedic practitioner
              or qualified healthcare provider for medical advice, diagnosis, and treatment.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
