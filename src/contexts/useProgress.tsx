import { useContext } from 'react';
import ProgressContext from './ProgressContext';

export const useProgress = () => {
  const ctx = useContext(ProgressContext as any);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
};

export default useProgress;
