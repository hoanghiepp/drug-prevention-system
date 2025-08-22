import axios from "axios";

const API_BASE = "http://127.0.0.1:6868"; // <-- backend của bạn

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Gắn token JWT nếu có
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;

// Các hàm API mẫu
export const getCourses = () =>
  api.get("/api/v1/courses" /* hoặc "/courses" tùy backend */);
export const getSurveys = () => api.get("/api/v1/surveys");
export const submitSurvey = (surveyId, payload) =>
  api.post(`/api/v1/surveys/submit/${surveyId}`, payload);
export const getConsultants = () => api.get("/api/v1/consultants");
export const bookAppointment = (payload) =>
  api.post("/api/v1/consultations/appointments", payload);
export const loginUser = (payload) => api.post("/api/v1/auth/login", payload);
export const registerUser = (payload) =>
  api.post("/api/v1/auth/register", payload);
export const getStats = () =>
  Promise.all([
    api.get("/api/v1/stats/users"),
    api.get("/api/v1/stats/surveys"),
    api.get("/api/v1/stats/appointments"),
  ]);
