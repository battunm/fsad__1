import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EMS } from '../utils/ems';
import { useCustomCursor } from '../hooks/useCursor';

export default function Layout({ children }) {
  const { dotRef, ringRef } = useCustomCursor();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(EMS.getCurrentUser());
  }, []);

  const handleLogout = () => {
    EMS.logout();
    setUser(null);
    window.location.href = '/';
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div>
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
      <div className="page-bg"></div>

      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <span className="emblem">🗳️</span>EMS India
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about')}>About</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
        </ul>
        <div className="nav-actions">
          {user ? (
            <>
              <span className="badge badge-verified">{user.name}</span>
              <button className="btn btn-glass btn-sm" onClick={handleLogout}>Logout</button>
              <Link to={EMS.dashboardFor(user.role)} className="btn btn-primary btn-sm">Dashboard →</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-glass btn-sm">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
            </>
          )}
        </div>
      </nav>

      {children}

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo"><span className="emblem">🗳️</span>EMS India</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '12px', lineHeight: '1.7' }}>
              India's transparent, real-time election monitoring platform. Ensuring fair elections for every Indian citizen since 2024.
            </p>
            <div className="footer-flag"><div className="flag-s"></div><div className="flag-w"></div><div className="flag-g"></div></div>
          </div>
          <div>
            <div className="footer-heading">Navigation</div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-heading">Dashboards</div>
            <ul className="footer-links">
              <li><a href="#admin">Admin</a></li>
              <li><a href="#citizen">Citizen</a></li>
              <li><a href="#observer">Observer</a></li>
              <li><a href="#analyst">Analyst</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-heading">Legal</div>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Use</a></li>
              <li><a href="#eci">ECI Guidelines</a></li>
              <li><a href="#rti">RTI Portal</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Election Monitoring System India. All rights reserved.</span>
          <span>Powered by Election Commission of India 🇮🇳</span>
        </div>
      </footer>
    </div>
  );
}
