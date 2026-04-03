import React from 'react';
import { Mail, Hammer, Rocket } from 'lucide-react';
import heroLogo from '../assets/hero.png';

export default function UnderDevelopment() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        padding: 'clamp(2rem, 5vw, 4rem)',
        maxWidth: '600px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        
        {/* Logo */}
        <div style={{ position: 'relative' }}>
          <img 
            src={heroLogo} 
            alt="SKDev Logo" 
            style={{ 
              width: '100px', 
              height: '100px', 
              objectFit: 'cover', 
              borderRadius: '50%', 
              background: 'var(--bg-secondary)',
              border: '3px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)'
            }} 
          />
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            right: '-10px',
            backgroundColor: 'var(--accent-primary)',
            borderRadius: '50%',
            padding: '0.5rem',
            color: '#fff',
            boxShadow: 'var(--shadow-md)'
          }}>
            <Hammer size={24} />
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
            Under <span className="text-gradient">Development</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            We're currently working hard behind the scenes to craft a completely fresh, premium web experience. 
            SKDev's new portal will launch soon!
          </p>
        </div>

        {/* Interaction */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            <Rocket size={18} /> Coming very soon
          </div>
          
          <a 
            href="mailto:satyakiran296@gmail.com" 
            className="btn btn-primary" 
            style={{ width: '100%', maxWidth: '300px', margin: '1rem auto 0 auto' }}
          >
            <Mail size={18} /> Contact Developer
          </a>
        </div>

      </div>
    </div>
  );
}
