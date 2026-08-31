import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Download, Send, MessageCircle, Sparkles } from 'lucide-react';
import AppCard from '../components/AppCard';
import { appsData } from '../data/appsData';
import SEO from '../components/SEO';
import OfficialInfographic from '../components/OfficialInfographic';
import skdevbanner from '../assets/skdev-banner.webp';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  const featuredApps = appsData.slice(0, 2);

  return (
    <div className="container">
      <SEO
        title="Crafting Digital Experiences"
        description="Explore Android personalization and productivity suites crafted by indie developer Satyakiran (SKDev) — including Anify, Aniset, and live developer roadmap."
        keywords="skdev, satyakiran, anify, aniset, sticker studio, kwgt widgets, klwp live wallpapers, android 16, focus lock, blockit, android personalization, indie app developer"
        canonical="/"
        image={skdevbanner}
        jsonLd={ORG_JSONLD}
      />
      {/* Hero Section */}
      <section
        style={{
          padding: 'clamp(3rem, 7vw, 6rem) 0 clamp(2rem, 5vw, 4rem) 0',
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto',
        }}
        className="animate-fade-in"
      >
        {/* Subtle Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            color: 'var(--accent-primary)',
            fontSize: '0.825rem',
            fontWeight: 600,
            marginBottom: '1.25rem',
          }}
        >
          <Sparkles size={14} /> Indie Android Creator
        </div>

        <h1
          style={{
            marginBottom: '1.25rem',
            fontSize: 'clamp(2.25rem, 7.5vw, 3.85rem)',
            lineHeight: 1.15,
          }}
        >
          Crafting Digital <br /> <span className="text-gradient">Experiences</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(0.95rem, 3.5vw, 1.2rem)',
            marginBottom: '2rem',
            padding: '0 0.5rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
          }}
        >
          Clean, aesthetic, and battery-friendly Android personalization suites built for real user needs.
        </p>

        {/* Primary CTAs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem',
          }}
        >
          <NavLink
            to="/apps"
            className="btn btn-primary"
            style={{
              padding: '0.85rem 1.75rem',
              fontSize: '1rem',
              flex: '1 1 200px',
              maxWidth: '280px',
            }}
          >
            Explore All Apps <ArrowRight size={18} />
          </NavLink>

          <a
            href="https://play.google.com/store/apps/dev?id=9166037782169864125"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{
              padding: '0.85rem 1.75rem',
              fontSize: '1rem',
              flex: '1 1 200px',
              maxWidth: '280px',
            }}
          >
            Google Play <Download size={18} />
          </a>
        </div>

        {/* Community & Social Quick Links Strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://t.me/skdev29"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{
              padding: '0.45rem 0.95rem',
              fontSize: '0.85rem',
              minHeight: '38px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
            }}
          >
            <Send size={15} color="var(--accent-primary)" /> Updates Channel
          </a>
          <a
            href="https://t.me/skdev_chat"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{
              padding: '0.45rem 0.95rem',
              fontSize: '0.85rem',
              minHeight: '38px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
            }}
          >
            <MessageCircle size={15} color="#34d399" /> Community Chat
          </a>
          <a
            href="https://www.instagram.com/skdev29/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{
              padding: '0.45rem 0.95rem',
              fontSize: '0.85rem',
              minHeight: '38px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
            }}
          >
            <InstagramIcon size={15} /> Instagram
          </a>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }} className="animate-fade-in delay-200">
        <div
          className="flex-between"
          style={{
            marginBottom: '2rem',
            alignItems: 'flex-end',
            gap: '1rem',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Curated Highlights
            </span>
            <h2 style={{ margin: '0.25rem 0 0 0', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
              Featured Applications
            </h2>
          </div>
          <NavLink
            to="/apps"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--accent-primary)',
              fontWeight: 600,
              fontSize: '0.95rem',
              flexShrink: 0,
              padding: '0.35rem 0.75rem',
              borderRadius: '0.5rem',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
            }}
          >
            See All <ArrowRight size={15} />
          </NavLink>
        </div>

        <div className="grid grid-cols-2">
          {featuredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {appsData.length > 2 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
            <NavLink to="/apps" className="btn btn-secondary" style={{ padding: '0.75rem 2rem' }}>
              Show More Applications ({appsData.length})
            </NavLink>
          </div>
        )}
      </section>

      {/* Official vs Modded App Education Infographic */}
      <OfficialInfographic />
    </div>
  );
}
