import axios from 'axios';

const api = axios.create({
  baseURL: (import.meta.env.VITE_API_URL as string) || 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
});

export type LessonProgress = { id: string | number; completed: boolean; updatedAt?: string };
export type ModuleProgress = { id: string | number; lessons: LessonProgress[] };
export type CourseProgressPayload = { courseId: string | number; modules: ModuleProgress[]; updatedAt?: string };

export async function fetchProgress(userId: string | number, courseId: string | number) {
  const res = await api.get(`/users/${userId}/courses/${courseId}/progress`);
  return res.data as CourseProgressPayload;
}

export async function saveProgress(userId: string | number, courseId: string | number, payload: CourseProgressPayload) {
  const res = await api.put(`/users/${userId}/courses/${courseId}/progress`, payload);
  return res.data as CourseProgressPayload;
}

export default api;
