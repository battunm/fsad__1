import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { EMS } from '../utils/ems';
import Layout from '../components/Layout';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = EMS.accounts.find(a => a.email === email && a.password === password);
    if (account) {
      EMS.setCurrentUser(account);
      navigate(EMS.dashboardFor(account.role));
    } else {
      setError('Invalid email or password');
    }
  };

  const quickLogin = (email, password) => {
    setEmail(email);
    setPassword(password);
  };

  return (
    <Layout>
      <div className="auth-page">
        <div className="auth-box" style={{ margin: '0 auto' }}>
          <div className="auth-logo">
            <span className="emblem">🗳️</span>
            <div className="auth-logo-title">EMS India</div>
            <div className="auth-logo-sub">Secure Portal · Election Monitoring System</div>
          </div>

          <h1 className="auth-title">Welcome Back 🇮🇳</h1>
          <p className="auth-subtitle">Login with your registered email and password.</p>

          <div className="alert alert-info" style={{ marginBottom: '20px', fontSize: '0.82rem' }}>
            ℹ️ <strong>Demo credentials:</strong> admin@eci.gov.in / Admin@ECI2024! &nbsp;|&nbsp;
            rahul.sharma@gmail.com / Citizen@123!
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address *</label>
              <div className="input-group">
                <span className="input-icon">📧</span>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password *</label>
              <div className="input-group">
                <span className="input-icon">🔒</span>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  className="form-control" 
                  id="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="input-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              <div style={{ textAlign: 'right', marginTop: '8px' }}>
                <Link to="/forgot-password" style={{ fontSize: '0.82rem', color: 'var(--saffron)', fontWeight: '600' }}>
                  Forgot Password?
                </Link>
              </div>
            </div>

            {error && <div style={{ color: 'var(--error)', marginBottom: '14px', fontSize: '0.85rem' }}>{error}</div>}

            <button type="submit" className="btn btn-primary btn-block btn-lg">
              🔐 Login to Dashboard
            </button>
          </form>

          <div style={{ margin: '24px 0', display:'flex', alignItems:'center', gap:'12px' }}>
            <div style={{ flex:1, height:'1px', background: 'var(--glass-border)' }}></div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>or login as</span>
            <div style={{ flex:1, height:'1px', background: 'var(--glass-border)' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button 
              type="button"
              className="btn btn-glass btn-sm" 
              onClick={() => quickLogin('admin@eci.gov.in','Admin@ECI2024!')}
            >
              🔐 Admin
            </button>
            <button 
              type="button"
              className="btn btn-glass btn-sm" 
              onClick={() => quickLogin('rahul.sharma@gmail.com','Citizen@123!')}
            >
              🏠 Citizen
            </button>
            <button 
              type="button"
              className="btn btn-glass btn-sm" 
              onClick={() => quickLogin('observer1@eci.gov.in','Observer@123!')}
            >
              🔭 Observer
            </button>
            <button 
              type="button"
              className="btn btn-glass btn-sm" 
              onClick={() => quickLogin('analyst@eci.gov.in','Analyst@123!')}
            >
              📊 Analyst
            </button>
          </div>

          <div className="auth-footer" style={{ marginTop: '24px' }}>
            Don't have an account? <Link to="/register">Register here</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
