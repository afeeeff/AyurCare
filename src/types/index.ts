export interface PatientData {
  disease: string;
  age: number;
  gender: string;
  bp_systolic: number;
  bp_diastolic: number;
  sugar_level?: number;
  bmi?: number;
  stress_level: number;
  sleep_hours: number;
  lifestyle: string;
}

export interface RecommendationResult {
  disease: string;
  remedy: string;
  yogasana: string;
  diet_advice: string;
  match_quality: string;
}

export interface ApiResponse {
  success: boolean;
  data?: RecommendationResult;
  message?: string;
}
