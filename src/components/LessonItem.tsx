import React from 'react';
import { BookOpenIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

type LessonItemProps = {
  id: string | number;
  title: string;
  completed?: boolean;
  onToggle?: (id: string | number) => void;
};

const LessonItem: React.FC<LessonItemProps> = ({ id, title, completed = false, onToggle }) => {
  return (
    <li className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <BookOpenIcon className="w-6 h-6 text-accent" aria-hidden="true" />
        <span className="text-textPrimary">{title}</span>
      </div>

      <button
        aria-label={completed ? 'Marcar como não concluído' : 'Marcar como concluído'}
        onClick={() => onToggle && onToggle(id)}
        className="flex items-center justify-center"
      >
        {completed ? (
          <CheckCircleIcon className="w-6 h-6 text-green-500" />
        ) : (
          <CheckCircleIcon className="w-6 h-6 text-gray-400 opacity-60" />
        )}
      </button>
    </li>
  );
};

export default LessonItem;
