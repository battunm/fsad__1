import React from 'react';
import { Navigate } from 'react-router-dom';
import { EMS } from '../utils/ems';
import Layout from '../components/Layout';

const DashboardPage = ({ role }) => {
  const user = EMS.getCurrentUser();
  
  if (!user || user.role !== role) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div style={{ marginTop: '72px', padding: '40px 5%' }}>
        <div className="container">
          <div style={{ marginBottom: '30px' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800' }}>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>Welcome back, {user.name}! 👋</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px', marginBottom: '28px' }}>
            <div className="card" style={{ padding: '22px 20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '2rem', fontWeight: '900' }}>156</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Active Users</div>
            </div>
            <div className="card" style={{ padding: '22px 20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '2rem', fontWeight: '900' }}>2</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Live Elections</div>
            </div>
            <div className="card" style={{ padding: '22px 20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '2rem', fontWeight: '900' }}>847</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Observer Reports</div>
            </div>
            <div className="card" style={{ padding: '22px 20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '2rem', fontWeight: '900' }}>98.4%</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Uptime</div>
            </div>
          </div>

          <div className="card" style={{ padding: '24px', marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '20px' }}>Elections Overview</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                { state: 'Tamil Nadu', type: 'By-Election', status: '🔴 Live', turnout: '62%' },
                { state: 'Assam', type: 'Panchayat', status: '🔴 Live', turnout: '71%' },
                { state: 'Bihar', type: 'State Assembly', status: '📅 Upcoming', turnout: null },
              ].map((e, i) => (
                <div key={i} style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontWeight: '700', marginBottom: '6px' }}>📍 {e.state}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '10px' }}>{e.type}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--saffron)' }}>{e.status}</span>
                    {e.turnout && <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Turnout: {e.turnout}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '12px' }}>Full Dashboard Coming Soon</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              The complete {role} dashboard with analytics, reports, and real-time data will be available soon. 
              <br/>This is a preview of the layout and component system.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const AdminDashboard = () => <DashboardPage role="admin" />;
export const CitizenDashboard = () => <DashboardPage role="citizen" />;
export const ObserverDashboard = () => <DashboardPage role="observer" />;
export const AnalystDashboard = () => <DashboardPage role="analyst" />;
