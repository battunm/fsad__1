import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout>
      <div className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Get in Touch</span>
          <h1 className="page-hero-title">Contact <span className="gradient-text">EMS India</span></h1>
          <p className="page-hero-sub">Have questions or feedback? We'd love to hear from you. Reach out to our team anytime.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <h2 className="section-title">Send us a Message</h2>
              {submitted && (
                <div className="alert alert-info" style={{ marginBottom: '20px' }}>
                  ✅ Thank you! We received your message and will respond soon.
                </div>
              )}
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
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea 
                    className="form-control" 
                    name="message"
                    placeholder="Your message..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ resize: 'vertical', fontFamily: 'inherit' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
              </form>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '24px' }}>Quick Info</h3>
              <div className="card" style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📍</div>
                <div style={{ fontWeight: '700', marginBottom: '4px' }}>Headquarters</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Election Commission of India<br/>
                  Nirvachan Sadan, New Delhi<br/>
                  110001, India
                </p>
              </div>
              <div className="card" style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📧</div>
                <div style={{ fontWeight: '700', marginBottom: '4px' }}>Email</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--saffron)' }}>
                  support@ems-india.gov.in<br/>
                  technical@ems-india.gov.in
                </p>
              </div>
              <div className="card">
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>☎️</div>
                <div style={{ fontWeight: '700', marginBottom: '4px' }}>Phone</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  +91 (011) 2309-1111<br/>
                  +91 (011) 2309-1234
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(255,153,51,0.03)', borderTop: '1px solid rgba(255,153,51,0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Support</span>
            <h2 className="section-title">FAQs</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'How do I register on EMS India?', a: 'Visit our registration page, fill in your details with valid Aadhaar and PAN information, and submit. Admin approval typically takes 24-48 hours.' },
              { q: 'Is my data secure?', a: 'Yes! We use military-grade encryption, multi-factor authentication, and comply with all GDPR and Indian data protection laws.' },
              { q: 'Can I report election irregularities?', a: 'Absolutely. Observers and citizens can submit reports via the mobile app or web dashboard. All reports are reviewed by certified ECI officers.' },
              { q: 'What languages are supported?', a: 'We support all 22 official Indian languages plus English. Locale can be changed in account settings.' },
            ].map((faq, i) => (
              <div key={i} className="card" style={{ marginBottom: '16px', padding: '22px' }}>
                <div style={{ fontWeight: '700', marginBottom: '8px', color: 'var(--saffron)' }}>Q: {faq.q}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
