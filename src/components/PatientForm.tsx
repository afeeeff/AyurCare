import { useState } from 'react';
import { Activity, User, Heart, Droplets, Moon, TrendingUp } from 'lucide-react';
import type { PatientData } from '../types';

interface PatientFormProps {
  onSubmit: (data: PatientData) => void;
  isLoading: boolean;
}

const DISEASES = [
  'Diabetes', 'Hypertension', 'Asthma', 'PCOD', 'Arthritis',
  'Obesity', 'Insomnia', 'Anemia', 'Migraine', 'Digestive Issues',
  'Constipation', 'Anxiety', 'Depression', 'Cold & Flu', 'Skin Issues'
];

export default function PatientForm({ onSubmit, isLoading }: PatientFormProps) {
  const [formData, setFormData] = useState<PatientData>({
    disease: '',
    age: 30,
    gender: 'male',
    bp_systolic: 120,
    bp_diastolic: 80,
    sugar_level: undefined,
    bmi: undefined,
    stress_level: 5,
    sleep_hours: 7,
    lifestyle: 'moderate'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof PatientData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-emerald-900 mb-2">
            Select Your Condition
          </label>
          <select
            value={formData.disease}
            onChange={(e) => handleChange('disease', e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-white text-gray-800"
          >
            <option value="">Choose a condition...</option>
            {DISEASES.map(disease => (
              <option key={disease} value={disease}>{disease}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-emerald-900 mb-2 flex items-center gap-2">
            <User size={16} />
            Age
          </label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => handleChange('age', parseInt(e.target.value))}
            required
            min="1"
            max="120"
            className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-emerald-900 mb-2 flex items-center gap-2">
            <User size={16} />
            Gender
          </label>
          <select
            value={formData.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-white text-gray-800"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-emerald-900 mb-2 flex items-center gap-2">
            <Heart size={16} />
            Blood Pressure - Systolic
          </label>
          <input
            type="number"
            value={formData.bp_systolic}
            onChange={(e) => handleChange('bp_systolic', parseInt(e.target.value))}
            required
            min="70"
            max="200"
            className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-emerald-900 mb-2 flex items-center gap-2">
            <Heart size={16} />
            Blood Pressure - Diastolic
          </label>
          <input
            type="number"
            value={formData.bp_diastolic}
            onChange={(e) => handleChange('bp_diastolic', parseInt(e.target.value))}
            required
            min="40"
            max="130"
            className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-emerald-900 mb-2 flex items-center gap-2">
            <Droplets size={16} />
            Sugar Level (mg/dL) - Optional
          </label>
          <input
            type="number"
            value={formData.sugar_level || ''}
            onChange={(e) => handleChange('sugar_level', e.target.value ? parseInt(e.target.value) : undefined)}
            min="50"
            max="500"
            placeholder="e.g., 100"
            className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-emerald-900 mb-2 flex items-center gap-2">
            <TrendingUp size={16} />
            BMI - Optional
          </label>
          <input
            type="number"
            value={formData.bmi || ''}
            onChange={(e) => handleChange('bmi', e.target.value ? parseFloat(e.target.value) : undefined)}
            step="0.1"
            min="10"
            max="60"
            placeholder="e.g., 24.5"
            className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-emerald-900 mb-2">
            Stress Level (1-10)
          </label>
          <input
            type="range"
            value={formData.stress_level}
            onChange={(e) => handleChange('stress_level', parseInt(e.target.value))}
            min="1"
            max="10"
            className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="text-center mt-1 text-emerald-700 font-semibold">{formData.stress_level}</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-emerald-900 mb-2 flex items-center gap-2">
            <Moon size={16} />
            Sleep Hours per Day
          </label>
          <input
            type="number"
            value={formData.sleep_hours}
            onChange={(e) => handleChange('sleep_hours', parseInt(e.target.value))}
            required
            min="1"
            max="24"
            step="0.5"
            className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-emerald-900 mb-2 flex items-center gap-2">
            <Activity size={16} />
            Lifestyle Type
          </label>
          <select
            value={formData.lifestyle}
            onChange={(e) => handleChange('lifestyle', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-white text-gray-800"
          >
            <option value="sedentary">Sedentary (Little to no exercise)</option>
            <option value="moderate">Moderate (Light exercise 1-3 days/week)</option>
            <option value="active">Active (Regular exercise 4-7 days/week)</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || !formData.disease}
        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            Analyzing...
          </span>
        ) : (
          'Get Ayurvedic Recommendations'
        )}
      </button>
    </form>
  );
}
