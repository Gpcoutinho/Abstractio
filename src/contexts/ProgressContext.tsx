import React, { useEffect, useRef, useState } from 'react';
import { fetchProgress, saveProgress, type CourseProgressPayload, type ModuleProgress } from '../services/progress';
import { ProgressContext } from './progressStore';

type Lesson = { id: string | number; title: string; completed?: boolean };
type Module = { id: string | number; title: string; lessons: Lesson[] };

// ProgressContext é importado de progressStore

type ProgressProviderProps = {
  courseId: string | number;
  userId?: string | number;
  initialModules: Module[];
  children: React.ReactNode;
};

const LOCAL_KEY = (userId: string | number | undefined, courseId: string | number) => `progress:${userId ?? 'anon'}:${courseId}`;

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ courseId, userId, initialModules, children }) => {
  const [modules, setModules] = useState<Module[]>(initialModules);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const saveTimer = useRef<number | null>(null);

  // Load progress from API or localStorage on mount
  useEffect(() => {
    let mounted = true;

    const load = async () => {
      // try backend
      try {
        if (userId) {
          const data = await fetchProgress(userId, courseId);
          if (!mounted) return;
          // merge: we'll prefer backend data structure for completed flags
          const merged = initialModules.map((m) => {
            const mp = data.modules.find((x: ModuleProgress) => x.id === m.id);
            if (!mp) return m;
            return {
              ...m,
              lessons: m.lessons.map((l) => {
                const lp = mp.lessons.find((x) => x.id === l.id);
                return { ...l, completed: !!lp?.completed };
              }),
            };
          });
          setModules(merged);
          setError(null);
          return;
        }
      } catch {
        // ignore and fallback to localStorage
      }

      // fallback localStorage
      try {
        const raw = localStorage.getItem(LOCAL_KEY(userId, courseId));
        if (raw) {
          const parsed = JSON.parse(raw) as CourseProgressPayload;
          const merged = initialModules.map((m) => {
            const mp = parsed.modules.find((x) => x.id === m.id);
            if (!mp) return m;
            return {
              ...m,
              lessons: m.lessons.map((l) => {
                const lp = mp.lessons.find((x) => x.id === l.id);
                return { ...l, completed: !!lp?.completed };
              }),
            };
          });
          setModules(merged);
        }
      } catch {
        // ignore parse errors
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, [courseId, initialModules, userId]);

  // Save helper (debounced)
  const scheduleSave = () => {
    if (saveTimer.current) {
      window.clearTimeout(saveTimer.current);
    }
    saveTimer.current = window.setTimeout(async () => {
      setSyncing(true);
      setError(null);
      const payload: CourseProgressPayload = {
        courseId,
        modules: modules.map((m) => ({ id: m.id, lessons: m.lessons.map((l) => ({ id: l.id, completed: !!l.completed })) })),
        updatedAt: new Date().toISOString(),
      };

      // save to localStorage immediately
      try {
        localStorage.setItem(LOCAL_KEY(userId, courseId), JSON.stringify(payload));
      } catch {
        // ignore
      }

      // attempt to save to backend if userId exists
      if (userId) {
        try {
          await saveProgress(userId, courseId, payload);
          setError(null);
        } catch {
          setError('Erro ao sincronizar');
        }
      }

      setSyncing(false);
    }, 1000);
  };

  const toggleLesson = (moduleId: string | number, lessonId: string | number) => {
    setModules((prev) => {
      const next = prev.map((m) =>
        m.id === moduleId ? { ...m, lessons: m.lessons.map((l) => (l.id === lessonId ? { ...l, completed: !l.completed } : l)) } : m,
      );
      // schedule save after state updates
      setTimeout(scheduleSave, 0);
      return next;
    });
  };

  return (
    <ProgressContext.Provider value={{ modules, toggleLesson, syncing, error }}>{children}</ProgressContext.Provider>
  );
};

// não exportar default para evitar problemas com fast-refresh que espera apenas componentes exportados
