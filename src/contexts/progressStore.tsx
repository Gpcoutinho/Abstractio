/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';

type Lesson = { id: string | number; title: string; completed?: boolean };
type Module = { id: string | number; title: string; lessons: Lesson[] };

export type ProgressContextValue = {
  modules: Module[];
  toggleLesson: (moduleId: string | number, lessonId: string | number) => void;
  syncing: boolean;
  error?: string | null;
};

export const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
};

export default ProgressContext;
