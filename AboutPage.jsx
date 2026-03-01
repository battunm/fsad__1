import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Our Story</span>
          <h1 className="page-hero-title">About <span className="gradient-text">EMS India</span></h1>
          <p className="page-hero-sub">Building transparent, fair, and accessible elections for every Indian citizen — from Leh to Lakshadweep.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ display:'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <span className="section-eyebrow">Our Mission</span>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>Democracy <span className="gradient-text">Deserves Transparency</span></h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '16px' }}>
              The Election Monitoring System (EMS) India was established to bring unprecedented transparency and accountability to India's democratic process. We believe that every Indian citizen — regardless of geography, literacy, or economic status — deserves access to clear, reliable, and real-time election information.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              From remote polling booths in the Northeast to urban constituencies in Mumbai, EMS India monitors every aspect of the election process and makes data available to all stakeholders through modern digital tools.
            </p>
          </div>
          <div className="card" style={{ padding: '36px', textAlign: 'center' }}>
            <div style={{ fontSize: '6rem', marginBottom: '16px' }}>🏛️</div>
            <div className="section-title" style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Established 2024</div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              Commissioned by the Election Commission of India to digitize and modernize election monitoring across all 28 states and 8 Union Territories.
            </p>
            <div style={{display:'flex', gap: '16px', justifyContent:'center', marginTop: '20px' }}>
              <div style={{textAlign:'center'}}>
                <div className="stat-number" style={{ fontSize:'1.6rem' }}>96.8Cr</div>
                <div className="stat-label">Voters</div>
              </div>
              <div style={{textAlign:'center'}}>
                <div className="stat-number" style={{ fontSize:'1.6rem' }}>36</div>
                <div className="stat-label">States/UTs</div>
              </div>
              <div style={{textAlign:'center'}}>
                <div className="stat-number" style={{ fontSize:'1.6rem' }}>543</div>
                <div className="stat-label">LS Seats</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(19,136,8,0.03)', borderTop: '1px solid rgba(19,136,8,0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Platform Features</span>
            <h2 className="section-title">What Makes Us <span className="gradient-text">Different</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🔴', title: 'Real-Time Monitoring', desc: 'Live updates from every constituency. Observer reports filed from the field appear instantly on dashboards.' },
              { icon: '🛡️', title: 'Fraud Prevention', desc: 'AI-assisted anomaly detection flags irregularities. Every report is reviewed by certified ECI officers.' },
              { icon: '📊', title: 'Data Analytics', desc: 'Comprehensive dashboards analyze voter turnout, demographic patterns, and state-wise election trends.' },
              { icon: '🔐', title: 'End-to-End Security', desc: 'Military-grade encryption, multi-factor authentication, and blockchain-backed audit trails.' },
              { icon: '🌐', title: 'Mobile-First Design', desc: 'Citizens and observers can participate and report issues from anywhere using mobile or desktop.' },
              { icon: '♿', title: 'Accessibility', desc: 'Multi-language support, high-contrast modes, and screen-reader compatible interfaces for all citizens.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize:'1rem', fontWeight:'700', marginBottom:'6px' }}>{item.title}</h3>
                  <p style={{ fontSize:'0.83rem', color:'var(--text-muted)', lineHeight:'1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Team</span>
            <h2 className="section-title">Meet the <span className="gradient-text">Experts</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { emoji: '👨‍💼', name: 'Rajesh Sharma', role: 'Founder & CEO' },
              { emoji: '👩‍💻', name: 'Priya Verma', role: 'CTO', },
              { emoji: '👨‍⚖️', name: 'Dr. Amit Patel', role: 'Chief Compliance Officer' },
              { emoji: '👩‍🔬', name: 'Dr. Neha Singh', role: 'Data Science Lead' },
            ].map((member, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--saffron), var(--green))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 14px' }}>
                  {member.emoji}
                </div>
                <div style={{ fontWeight: '700', fontSize: '1rem' }}>{member.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
