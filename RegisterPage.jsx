import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { EMS, validatePassword, generateStrongPassword } from '../utils/ems';
import Layout from '../components/Layout';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '', dob: '', state: '', phone: ''
  });
  const [pwdStrength, setPwdStrength] = useState({ score: 0, strength: 'weak' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'password') {
      setPwdStrength(validatePassword(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    // Add user to accounts
    const newAccount = {
      id: 'A' + Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: 'citizen',
      status: 'verified',
      state: formData.state
    };
    EMS.accounts.push(newAccount);
    EMS.setCurrentUser(newAccount);
    navigate(EMS.dashboardFor('citizen'));
  };

  const handleGeneratePassword = () => {
    const pwd = generateStrongPassword();
    setFormData(prev => ({ ...prev, password: pwd, confirmPassword: pwd }));
    setPwdStrength(validatePassword(pwd));
  };

  return (
    <Layout>
      <div className="auth-page" style={{ alignItems: 'flex-start', paddingTop: '100px' }}>
        <div className="auth-box" style={{ maxWidth: '580px' }}>
          <div className="auth-logo">
            <span className="emblem">🗳️</span>
            <div className="auth-logo-title">Register for EMS India</div>
            <div className="auth-logo-sub">Indian Citizens Aged 18+</div>
          </div>

          <h1 className="auth-title">Create Your Account 🇮🇳</h1>
          <p className="auth-subtitle">Join India's most transparent election platform.</p>

          <div style={{ height: '4px', background: 'linear-gradient(90deg, #FF9933 33.33%, #fff 33.33% 66.66%, #138808 66.66%)', borderRadius: '2px', marginBottom: '28px' }}></div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input 
                type="text" 
                className="form-control" 
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <div className="input-group">
                <span className="input-icon">📧</span>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">State/UT *</label>
              <select 
                className="form-control" 
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">Select your state</option>
                {EMS.states.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <div className="input-group">
                <span className="input-icon">📱</span>
                <input 
                  type="tel" 
                  className="form-control" 
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Date of Birth *</label>
              <input 
                type="date" 
                className="form-control" 
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password *</label>
              <div className="input-group">
                <span className="input-icon">🔒</span>
                <input 
                  type="password" 
                  className="form-control" 
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    style={{ 
                      height: '4px', 
                      flex: 1, 
                      borderRadius: '2px', 
                      background: 
                        pwdStrength.strength === 'weak' && i < 2 ? 'var(--error)' :
                        pwdStrength.strength === 'fair' && i < 4 ? 'var(--warning)' :
                        pwdStrength.strength === 'strong' && i < 6 ? 'var(--success)' :
                        'rgba(255, 255, 255, 0.1)'
                    }}
                  ></div>
                ))}
              </div>
              <div style={{ fontSize: '0.75rem', marginTop: '5px', fontWeight: '600', color: 
                pwdStrength.strength === 'weak' ? 'var(--error)' :
                pwdStrength.strength === 'fair' ? 'var(--warning)' :
                'var(--success)'
              }}>
                {pwdStrength.strength.toUpperCase()}
              </div>
              <button 
                type="button" 
                onClick={handleGeneratePassword}
                style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--saffron)', background: 'none', border: 'none', cursor: 'pointer', marginTop: '8px' }}
              >
                🎲 Generate Strong Password
              </button>
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password *</label>
              <div className="input-group">
                <span className="input-icon">🔒</span>
                <input 
                  type="password" 
                  className="form-control" 
                  name="confirmPassword"
                  placeholder="Re-enter password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {error && <div style={{ color: 'var(--error)', marginBottom: '14px', fontSize: '0.85rem' }}>{error}</div>}

            <button type="submit" className="btn btn-primary btn-block btn-lg">
              📝 Create Account
            </button>
          </form>

          <div className="auth-footer" style={{ marginTop: '24px' }}>
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
