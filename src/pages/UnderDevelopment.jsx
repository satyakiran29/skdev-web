import React from 'react';
import { Mail, Hammer, Rocket } from 'lucide-react';
import heroLogo from '../assets/hero.webp';

export default function UnderDevelopment() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '32px 16px',
      textAlign: 'center',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="app-card responsive-panel animate-fade-in" style={{
        maxWidth: '520px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Logo */}
        <div style={{ position: 'relative' }}>
          <img 
            src={heroLogo} 
            alt="SKDev Logo" 
            style={{ 
              width: '84px', 
              height: '84px', 
              objectFit: 'cover', 
              borderRadius: '50%', 
              background: 'var(--bg-raised)',
              border: '2px solid var(--border-subtle)',
            }} 
          />
          <div style={{
            position: 'absolute',
            bottom: '-4px',
            right: '-4px',
            backgroundColor: 'var(--accent-primary)',
            borderRadius: 'var(--radius-sm)',
            padding: '6px',
            color: '#07080d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Hammer size={16} />
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '8px' }}>
            Under Development
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            We are working behind the scenes on the portal updates. Full access will be restored shortly.
          </p>
        </div>

        {/* Interaction */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%' }}>
          <span className="tech-badge">
            <Rocket size={12} /> Maintenance in progress
          </span>
          
          <a 
            href="mailto:satyakiran296@gmail.com" 
            className="btn btn-primary" 
            style={{ width: '100%', maxWidth: '260px' }}
          >
            <Mail size={15} /> Contact Developer
          </a>
        </div>
      </div>
    </div>
  );
}
