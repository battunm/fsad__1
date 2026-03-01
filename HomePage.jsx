import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EMS } from '../utils/ems';
import Layout from '../components/Layout';

export default function HomePage() {
  const [elections, setElections] = useState(EMS.elections);
  const [filter, setFilter] = useState('all');

  const renderElections = (filterType) => {
    const data = filterType === 'all' ? EMS.elections : EMS.elections.filter(e => e.status === filterType);
    return data.map(e => {
      const statusMap = { live: 'badge-live', upcoming: 'badge-upcoming', completed: 'badge-verified' };
      const statusText = { live: '🔴 Live', upcoming: '📅 Upcoming', completed: '✅ Completed' };
      const dateObj = new Date(e.date);
      const dateStr = dateObj.toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' });
      return (
        <div key={e.id} className="election-card">
          <div className="d-flex justify-between align-center mb-4">
            <span className={`badge ${statusMap[e.status]}`}>{statusText[e.status]}</span>
            <span className="fs-sm text-muted">{e.type}</span>
          </div>
          <div className="election-state">📍 {e.state}</div>
          <div className="election-type">{e.seats} Constituencies · {e.voters} Voters</div>
          <div className="election-meta">
            <div className="election-date">📅 {dateStr}</div>
            {e.turnout ? <span className="badge badge-verified">Turnout: {e.turnout}</span> : <span className="text-muted fs-sm">Awaiting results</span>}
          </div>
        </div>
      );
    });
  };

  return (
    <Layout>
      {/* Ticker */}
      <div style={{ marginTop: '72px', backgroundColor: 'rgba(255,153,51,0.03)', borderTop: '1px solid rgba(255,153,51,0.08)', borderBottom: '1px solid rgba(19,136,8,0.08)', padding: '12px 0', overflow: 'hidden', position: 'relative' }}>
        <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, var(--saffron), var(--saffron-dark))', color: 'var(--dark-bg)', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '1px', padding: '0 20px', zIndex: 2, textTransform: 'uppercase' }}>
          🔴 LIVE
        </span>
        <div style={{ display: 'flex', gap: '60px', animation: 'ticker 30s linear infinite', whiteSpace: 'nowrap', paddingLeft: '140px' }}>
          {EMS.tickerNews.concat(EMS.tickerNews).map((item, i) => (
            <span key={i} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--saffron)' }}>◆</span>{item}
            </span>
          ))}
        </div>
        <style>{`@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--saffron)', marginBottom: '20px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--error)', animation: 'livePulse 1.5s ease-in-out infinite' }}></span>
            Election Monitoring System · India
          </div>
          <h1 className="hero-title">
            Empowering <span className="gradient-text">Democracy</span><br/>One Vote at a Time
          </h1>
          <p className="hero-subtitle">
            India's most transparent election monitoring platform. Track elections in real time, report issues, and join a billion citizen voices shaping the future. <strong>Jai Hind! 🇮🇳</strong>
          </p>
          <div className="hero-cta">
            <Link to="/register" className="btn btn-primary btn-lg">Register to Vote →</Link>
            <a href="#elections" className="btn btn-outline btn-lg">View Elections</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="chakra-container">
            <div className="chakra-ring"></div>
            <div className="chakra-ring"></div>
            <div className="chakra-ring"></div>
            <div className="chakra-glow">🇮🇳</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '96.8 Cr', label: 'Registered Voters' },
              { number: '28+', label: 'States Monitored' },
              { number: '2', label: 'Live Elections' },
              { number: '98.4%', label: 'System Uptime' },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elections */}
      <section className="section" id="elections">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Real-Time Updates</span>
            <h2 className="section-title">Elections Across <span className="gradient-text">India</span></h2>
            <p className="section-subtitle">Stay informed about upcoming, live, and recently completed elections in every Indian state and union territory.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {['all', 'live', 'upcoming', 'completed'].map(f => (
              <button
                key={f}
                className={`btn btn-glass btn-sm ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
                style={{ 
                  background: filter === f ? 'rgba(255,153,51,0.12)' : 'var(--glass-bg)',
                  borderColor: filter === f ? 'var(--saffron)' : 'var(--glass-border)',
                  color: filter === f ? 'var(--saffron)' : 'var(--text-muted)'
                }}
              >
                {f === 'all' ? 'All Elections' : f === 'live' ? '🔴 Live Now' : f === 'upcoming' ? '📅 Upcoming' : '✅ Completed'}
              </button>
            ))}
          </div>
          <div className="elections-grid">
            {renderElections(filter)}
          </div>
        </div>
      </section>

      {/* Why Vote */}
      <section className="section" style={{ background: 'rgba(255,153,51,0.03)', borderTop: '1px solid rgba(255,153,51,0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Civic Engagement</span>
            <h2 className="section-title">Why Your Vote <span className="gradient-text">Matters</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🗳️', title: 'Your Voice Counts', desc: 'Every single vote shapes the future of 1.4 billion people. Your participation is the foundation of Indian democracy.' },
              { icon: '🛡️', title: 'Fight Corruption', desc: 'Informed voters elect accountable representatives. Use this platform to report irregularities and ensure fair elections.' },
              { icon: '🌍', title: 'Represent Your State', desc: 'From Arunachal Pradesh to Kerala — every state\'s election matters. Participate locally, influence nationally.' },
              { icon: '⚖️', title: 'Justice & Equality', desc: 'Elections are the great equalizer. One person, one vote — regardless of caste, creed, or economic status.' },
              { icon: '🚀', title: 'Shape the Future', desc: 'Young voters especially: the policies decided today will determine India\'s place in the 21st century world stage.' },
              { icon: '🤝', title: 'Community Power', desc: 'When communities vote together, they gain power. Encourage your family, friends, and neighbors to participate.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '30px 20px' }}>
                <span style={{ fontSize: '3rem', marginBottom: '14px', display: 'block' }}>{item.icon}</span>
                <div style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '8px' }}>{item.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Platform Roles</span>
            <h2 className="section-title">Who Uses <span className="gradient-text">EMS India?</span></h2>
            <p className="section-subtitle">A dedicated role-based platform ensuring every stakeholder has the right tools.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🔐', title: 'Administrator', desc: 'Manages the entire system, approves citizen registrations, monitors election data, and ensures platform security.', link: '/login' },
              { icon: '🏠', title: 'Citizen', desc: 'Track elections in your state, report issues, participate in civic discussions, and view verified election results.', link: '/register' },
              { icon: '🔭', title: 'Election Observer', desc: 'Monitor polling activities on the ground, submit field reports, flag anomalies, and provide real-time insights.', link: '/register' },
              { icon: '📊', title: 'Data Analyst', desc: 'Analyze election data from across India, generate comprehensive reports, and provide real-time statistical updates.', link: '/login' },
            ].map((role, i) => (
              <div key={i} className="card" style={{ padding: '28px 22px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '2.8rem', marginBottom: '14px' }}>{role.icon}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '8px' }}>{role.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '18px' }}>{role.desc}</p>
                <Link to={role.link} className="btn btn-outline btn-sm">
                  {role.title === 'Citizen' ? 'Register Now' : role.title === 'Administrator' || role.title === 'Data Analyst' ? `${role.title} Login` : 'Apply as ' + role.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
