import React from 'react';
import { NavLink } from 'react-router-dom';
import { Play } from 'lucide-react';
import heroLogo from '../assets/hero.png';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '3rem 0', marginTop: '4rem', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container flex-between" style={{ alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src={heroLogo} alt="SKDev Logo" style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '50%', background: 'var(--bg-secondary)' }} />
            <h3 className="text-gradient" style={{ margin: 0 }}>SKDev</h3>
          </div>
          <p>Indie developer crafting clean, practical apps<br/>focused on performance and real user needs.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Quick Links</h4>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/apps">Apps</NavLink>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Connect</h4>
            <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Play size={16} /> Play Store
            </a>
          </div>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div>&copy; {new Date().getFullYear()} SKDev. All rights reserved.</div>
        <div>
          Designed & Developed by <a href="https://psatyakiran.in" target="_blank" rel="noreferrer" className="text-gradient" style={{ fontWeight: 600, textDecoration: 'none' }}>Satyakiran</a>
        </div>
      </div>
    </footer>
  );
}
