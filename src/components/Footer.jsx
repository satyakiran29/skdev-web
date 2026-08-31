import React from 'react';
import { NavLink } from 'react-router-dom';
import { Play, Mail, Send, MessageCircle } from 'lucide-react';
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
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '3rem 0', marginTop: '4rem', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container flex-between flex-between-mobile-col" style={{ alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src={heroLogo} alt="SKDev Logo" style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '50%', background: 'var(--bg-secondary)' }} />
            <h3 className="text-gradient" style={{ margin: 0 }}>SKDev</h3>
          </div>
          <p>Indie developer crafting clean, practical apps<br/>focused on performance and real user needs.</p>
        </div>
        
        <div style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 4rem)', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Quick Links</h4>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/apps">Apps</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/donate">Donate</NavLink>
            <NavLink to="/privacy">Privacy Policy</NavLink>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Connect</h4>
            <a href="mailto:satyakiran296@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} /> Email
            </a>
            <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Play size={16} /> Play Store
            </a>
            <a href="https://t.me/skdev29" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Send size={16} /> Telegram Channel
            </a>
            <a href="https://t.me/skdev_chat" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageCircle size={16} /> Telegram Chat
            </a>
            <a href="https://www.instagram.com/skdev29/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <InstagramIcon size={16} /> Instagram
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
