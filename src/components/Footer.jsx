import React from 'react';
import { NavLink } from 'react-router-dom';
import { Play, Mail, Send, MessageCircle, Clock, Heart } from 'lucide-react';
import heroLogo from '../assets/hero.webp';

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: 'clamp(2rem, 5vw, 3.5rem) 0', marginTop: 'clamp(2.5rem, 6vw, 4.5rem)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container flex-between flex-between-mobile-col" style={{ alignItems: 'flex-start', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
        {/* Brand & Bio */}
        <div style={{ maxWidth: '420px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.875rem' }}>
            <img src={heroLogo} alt="SKDev Logo" style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid rgba(56, 189, 248, 0.3)' }} />
            <h3 className="text-gradient" style={{ margin: 0, fontSize: '1.25rem' }}>SKDev</h3>
          </div>
          <p style={{ fontSize: '0.925rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
            Indie Android developer crafting clean, aesthetic, and high-performance personalization and productivity apps.
          </p>
        </div>
        
        {/* Links Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(120px, 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', width: '100%', maxWidth: '450px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <h4 style={{ marginBottom: '0.35rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Quick Links</h4>
            <NavLink to="/" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Home</NavLink>
            <NavLink to="/apps" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Apps</NavLink>
            <NavLink to="/roadmap" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Roadmap</NavLink>
            <NavLink to="/faq" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}>FAQ</NavLink>
            <NavLink to="/donate" style={{ fontSize: '0.9rem', color: '#ec4899', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              Support <Heart size={12} fill="#ec4899" />
            </NavLink>
            <NavLink to="/privacy" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Privacy Policy</NavLink>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <h4 style={{ marginBottom: '0.35rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Connect</h4>
            <a href="mailto:satyakiran296@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <Mail size={15} color="var(--accent-primary)" /> Email
            </a>
            <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <Play size={15} color="#38bdf8" /> Play Store
            </a>
            <a href="https://t.me/skdev29" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <Send size={15} color="#38bdf8" /> Updates
            </a>
            <a href="https://t.me/skdev_chat" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <MessageCircle size={15} color="#34d399" /> Group Chat
            </a>
            <a href="https://www.instagram.com/skdev29/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <InstagramIcon size={15} /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="container" style={{ textAlign: 'center', marginTop: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1.5rem' }}>
        <div>&copy; {new Date().getFullYear()} SKDev. All rights reserved.</div>
        <div>
          Designed & Developed by <a href="https://psatyakiran.in" target="_blank" rel="noreferrer" className="text-gradient" style={{ fontWeight: 600, textDecoration: 'none' }}>Satyakiran</a>
        </div>
        <div style={{ fontSize: '0.775rem', opacity: 0.75, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
          <Clock size={12} color="var(--accent-primary)" /> Last updated: September 1, 2026 at 1:00 AM IST
        </div>
      </div>
    </footer>
  );
}
