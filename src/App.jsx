import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import './App.css';

// Configuração do basename para GitHub Pages
const basename = process.env.NODE_ENV === 'production' ? '/aplicacao-de-tarefas' : '';

const App = () => {
  return (
    <TaskProvider>
      <Router basename={basename}>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/edit-task/:id" element={<EditTask />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
};

export default App;
