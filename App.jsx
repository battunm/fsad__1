import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { AdminDashboard, CitizenDashboard, ObserverDashboard, AnalystDashboard } from './pages/DashboardPages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
        <Route path="/observer-dashboard" element={<ObserverDashboard />} />
        <Route path="/analyst-dashboard" element={<AnalystDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
