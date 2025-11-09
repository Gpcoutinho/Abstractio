import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';
import Ponteiros from './pages/Ponteiros';
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

          <Route path="/tasks" element={<Tasks />} />

          <Route path="/ponteiros" element={<Ponteiros />} />
          

        </Routes>
      </main>

    </div>
  );
}

export default App;