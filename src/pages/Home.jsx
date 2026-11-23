import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Download, Send, MessageCircle } from 'lucide-react';
import AppCard from '../components/AppCard';
import { appsData } from '../data/appsData';
import SEO from '../components/SEO';
import OfficialInfographic from '../components/OfficialInfographic';
import skdevbanner from '../assets/skdev-banner.webp';

const InstagramIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://skdev.psatyakiran.in/#person',
      name: 'Satyakiran Pampana',
      alternateName: 'SKDev',
      url: 'https://skdev.psatyakiran.in',
      sameAs: [
        'https://play.google.com/store/apps/dev?id=9166037782169864125',
        'https://t.me/anify_app',
        'https://t.me/skdev29',
        'https://t.me/skdev_chat',
        'https://t.me/skdev1',
        'https://www.instagram.com/skdev29/',
      ],
      jobTitle: 'Indie Android App Developer',
      description:
        'Indie Android developer crafting clean, aesthetic, and high-performance personalization and productivity apps.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://skdev.psatyakiran.in/#website',
      url: 'https://skdev.psatyakiran.in',
      name: 'SKDev',
      description: 'Official portfolio for SKDev Android applications, widgets, and tools.',
      publisher: { '@id': 'https://skdev.psatyakiran.in/#person' },
    }
  ]
};

export default function Home() {
  const featuredApps = appsData.filter(app => app.id !== 'gwalls');

  return (
    <div className="container">
      <SEO
        title="Android Personalization & System Tools"
        description="Explore Android personalization and productivity suites crafted by indie developer Satyakiran (SKDev) — including Anify, Milky Launcher, Aniset, and live developer roadmap."
        keywords="skdev, satyakiran, milky launcher, jetpack compose, anify, aniset, sticker studio, kwgt widgets, klwp live wallpapers, android 16, focus lock, blockit, android personalization, indie app developer"
        canonical="/"
        image={skdevbanner}
        jsonLd={ORG_JSONLD}
      />

      {/* Hero Section */}
      <section
        style={{
          padding: '80px 0 48px 0',
          textAlign: 'center',
          maxWidth: '760px',
          margin: '0 auto',
        }}
        className="animate-fade-in"
      >
        {/* Technical signature telemetry badge */}
        <div style={{ marginBottom: '20px' }}>
          <span className="tech-badge">
            <span className="status-dot" /> Android · Indie Developer
          </span>
        </div>

        <h1
          style={{
            marginBottom: '16px',
            fontSize: 'clamp(2.2rem, 5.5vw, 3.25rem)',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}
        >
          Android personalization and system tools
        </h1>

        <p
          style={{
            fontSize: '1.05rem',
            marginBottom: '32px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            maxWidth: '620px',
            margin: '0 auto 32px auto',
          }}
        >
          Independent Android suites built for performance, privacy, and deep home screen customization.
        </p>

        {/* Primary CTAs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '28px',
          }}
        >
          <NavLink
            to="/apps"
            className="btn btn-primary"
            style={{ minWidth: '160px' }}
          >
            Explore apps <ArrowRight size={16} />
          </NavLink>

          <a
            href="https://play.google.com/store/apps/dev?id=9166037782169864125"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ minWidth: '160px' }}
          >
            Google Play <Download size={16} />
          </a>
        </div>

        {/* Community & Social Links Strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://t.me/skdev29"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{
              height: '34px',
              padding: '0 12px',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
            }}
          >
            <Send size={14} style={{ color: 'var(--text-muted)' }} /> Updates
          </a>
          <a
            href="https://t.me/skdev_chat"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{
              height: '34px',
              padding: '0 12px',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
            }}
          >
            <MessageCircle size={14} style={{ color: 'var(--text-muted)' }} /> Community
          </a>
          <a
            href="https://www.instagram.com/skdev29/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{
              height: '34px',
              padding: '0 12px',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
            }}
          >
            <InstagramIcon size={14} /> Instagram
          </a>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section style={{ padding: '48px 0 32px 0' }} className="animate-fade-in">
        <div
          className="flex-between"
          style={{
            marginBottom: '24px',
            alignItems: 'flex-end',
            gap: '16px',
          }}
        >
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginBottom: '4px',
              }}
            >
              Curated suites
            </div>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)' }}>
              Featured applications
            </h2>
          </div>
          <NavLink
            to="/apps"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--accent-primary)',
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            See all <ArrowRight size={14} />
          </NavLink>
        </div>

        <div className="stagger-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '20px' }}>
          {featuredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Official vs Modded App Education Infographic */}
      <OfficialInfographic />
    </div>
  );
}
