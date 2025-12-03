import { Leaf, Activity, Utensils, Sparkles } from 'lucide-react';
import type { RecommendationResult } from '../types';

interface ResultsDisplayProps {
  results: RecommendationResult;
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  const remedies = results.remedy.split(',').map(r => r.trim());
  const yogasanas = results.yogasana.split(',').map(y => y.trim());

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center shadow-md">
            <Sparkles className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-emerald-900">Your Personalized Plan</h3>
            <p className="text-emerald-700">For {results.disease}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Leaf className="text-green-700" size={20} />
          </div>
          <h4 className="text-xl font-bold text-emerald-900">Ayurvedic Remedies</h4>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {remedies.map((remedy, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <p className="text-emerald-900 font-medium">{remedy}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-sm text-green-800">
            <strong>How to use:</strong> These herbs can be taken as powders, tablets, or decoctions.
            Consult an Ayurvedic practitioner for proper dosage and preparation methods.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Activity className="text-blue-700" size={20} />
          </div>
          <h4 className="text-xl font-bold text-emerald-900">Recommended Yogasanas</h4>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {yogasanas.map((yoga, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <p className="text-blue-900 font-medium">{yoga}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Practice tips:</strong> Perform these asanas daily, preferably in the morning.
            Start slowly and listen to your body. Consider learning from a certified yoga instructor.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
            <Utensils className="text-amber-700" size={20} />
          </div>
          <h4 className="text-xl font-bold text-emerald-900">Dietary Advice</h4>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
          <p className="text-amber-900 leading-relaxed">{results.diet_advice}</p>
        </div>
        <div className="mt-4 bg-amber-50 rounded-lg p-4 border border-amber-200">
          <p className="text-sm text-amber-800">
            <strong>Diet guidelines:</strong> Follow these dietary recommendations consistently for best results.
            Stay hydrated and eat meals at regular times.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
            <Sparkles size={18} />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Important Note</h4>
            <p className="text-emerald-50 leading-relaxed">
              AyurCare provides recommendations based on traditional Ayurvedic principles.
              These suggestions are complementary and should not replace professional medical advice.
              Always consult a certified Ayurvedic practitioner or healthcare provider before starting any new treatment regimen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
