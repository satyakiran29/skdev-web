import React from 'react';
import { NavLink } from 'react-router-dom';
import { Play, Mail, Send, MessageCircle, Clock, Heart } from 'lucide-react';
import heroLogo from '../assets/hero.webp';

const InstagramIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '48px 0 32px 0',
        marginTop: '64px',
        backgroundColor: 'var(--bg-deep)',
      }}
    >
      <div
        className="container flex-between flex-between-mobile-col"
        style={{ alignItems: 'flex-start', gap: '32px' }}
      >
        {/* Brand & Bio */}
        <div style={{ maxWidth: '380px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <img
              src={heroLogo}
              alt="SKDev logo"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid var(--border-subtle)',
              }}
            />
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              SKDev
            </h3>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
            Independent Android application and widget engineering by Satyakiran. Built for performance, privacy, and system customization.
          </p>
        </div>

        {/* Links Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(120px, 1fr))',
            gap: '32px',
            width: '100%',
            maxWidth: '380px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '4px' }}>
              Navigation
            </div>
            <NavLink to="/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Home</NavLink>
            <NavLink to="/apps" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Apps</NavLink>
            <NavLink to="/roadmap" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Roadmap</NavLink>
            <NavLink to="/freelance" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Freelance</NavLink>
            <NavLink to="/faq" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>FAQ</NavLink>
            <NavLink to="/donate" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Support</NavLink>
            <NavLink to="/privacy" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Privacy Policy</NavLink>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '4px' }}>
              Connect
            </div>
            <a
              href="https://play.google.com/store/apps/dev?id=9166037782169864125"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
            >
              <Play size={15} style={{ color: 'var(--text-muted)' }} /> Google Play
            </a>
            <a
              href="https://t.me/skdev29"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
            >
              <Send size={15} style={{ color: 'var(--text-muted)' }} /> Updates
            </a>
            <a
              href="https://t.me/skdev_chat"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
            >
              <MessageCircle size={15} style={{ color: 'var(--text-muted)' }} /> Community
            </a>
            <a
              href="https://www.instagram.com/skdev29/"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
            >
              <InstagramIcon size={15} /> Instagram
            </a>
            <a
              href="mailto:satyakiran296@gmail.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
            >
              <Mail size={15} style={{ color: 'var(--text-muted)' }} /> Email
            </a>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: '32px',
          paddingTop: '20px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
        }}
      >
        <div>
          &copy; {new Date().getFullYear()} SKDev. All rights reserved.
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }} className="font-mono tabular-nums">
          <Clock size={12} /> Last updated: November 23, 2026 at 12:49 PM IST
        </div>
      </div>
    </footer>
  );
}
