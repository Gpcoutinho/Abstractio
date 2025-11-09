import React from 'react';
import LessonItem from './LessonItem';

export type Lesson = {
  id: string | number;
  title: string;
  completed?: boolean;
};

type ModuleCardProps = {
  id: string | number;
  title: string;
  lessons: Lesson[];
  onToggleLesson?: (moduleId: string | number, lessonId: string | number) => void;
};

const ModuleCard: React.FC<ModuleCardProps> = ({ id, title, lessons, onToggleLesson }) => {
  return (
    <div className="bg-bgSecondary border border-borderDark rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-textPrimary">{title}</h3>
        <span className="text-sm text-textSecondary">{lessons.length} lições</span>
      </div>

      <ul className="divide-y divide-borderDark">
        {lessons.map((lesson) => (
          <LessonItem
            key={lesson.id}
            id={lesson.id}
            moduleId={id}
            title={lesson.title}
            completed={!!lesson.completed}
            onToggle={(lessonId) => onToggleLesson && onToggleLesson(id, lessonId)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ModuleCard;
