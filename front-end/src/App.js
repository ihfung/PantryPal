import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './component/login';
import RegisterForm from './component/register';

const App = () => {
 
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

