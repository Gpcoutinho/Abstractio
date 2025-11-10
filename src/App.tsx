import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Exercicios from './pages/Exercicios';
import Ponteiros from './pages/Ponteiros';
import POO from './pages/POO';
import LessonPage from './pages/LessonPage';
import LessonClasses from './pages/LessonClasses';
import modules from './data/modules';
import { ProgressProvider } from './contexts/ProgressContext';
import { Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-Primary">

      <Header />

      <main>
        <Routes>
          
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/exercicios" element={<Exercicios />} />

          <Route path="/ponteiros" element={<Ponteiros />} />
          
          <Route path="/poo" element={<POO />} />
          <Route
            path="/modules/:moduleId/lessons/:lessonId"
            element={
              <ProgressProvider courseId="poo-1" initialModules={modules}>
                <LessonPage />
              </ProgressProvider>
            }
          />
          <Route
            path="/lesson-classes"
            element={
              <ProgressProvider courseId="poo-1" initialModules={modules}>
                <LessonClasses />
              </ProgressProvider>
            }
          />

        </Routes>
      </main>

    </div>
  );
}

export default App;