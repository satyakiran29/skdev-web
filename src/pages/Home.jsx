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

      {/* ── Birthday Sale Featured Spotlight ── */}
      <section style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }} className="animate-fade-in">
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: 'clamp(1.5rem, 4vw, 2.25rem)',
            borderRadius: '1.5rem',
            background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.35) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(190, 24, 93, 0.25) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.45)',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(168, 85, 247, 0.18)',
          }}
        >
          {/* Top glowing accent line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '5%',
              right: '5%',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #a855f7, #ec4899, #38bdf8, transparent)',
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'clamp(1.25rem, 3vw, 2.5rem)',
              flexWrap: 'wrap',
            }}
          >
            {/* Left Content */}
            <div style={{ flex: '1 1 340px', minWidth: '280px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.85rem',
                }}
              >
                <span>🎂 Birthday Special</span>
                <span>•</span>
                <span>29th Sept – 2nd Oct</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                  fontWeight: 800,
                  color: '#f8fafc',
                  marginBottom: '0.5rem',
                  lineHeight: 1.25,
                }}
              >
                Aniset Owner’s Birthday Sale! 🎉
              </h2>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                  maxWidth: '580px',
                }}
              >
                It’s my birthday! 🥳 To celebrate, I’m bringing you a special deal on <strong style={{ color: '#d8b4fe' }}>Aniset</strong> 💜 — premium anime KWGT widgets, KLWP dynamic live wallpapers, and curated aesthetics for your Android setup.
              </p>

              {/* Pricing highlight pills */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    gap: '0.45rem',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '0.875rem',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                  }}
                >
                  <span style={{ fontSize: '0.85rem' }}>🇮🇳 UPI:</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38bdf8' }}>₹100</span>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>₹160</span>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    gap: '0.45rem',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '0.875rem',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                  }}
                >
                  <span style={{ fontSize: '0.85rem' }}>🌎 PayPal:</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#22c55e' }}>$1.20</span>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>$1.68</span>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <NavLink
                  to="/apps/aniset"
                  className="btn btn-primary"
                  style={{
                    padding: '0.65rem 1.35rem',
                    fontSize: '0.95rem',
                    background: 'linear-gradient(135deg, #9333ea, #db2777)',
                    borderColor: 'rgba(236, 72, 153, 0.4)',
                    boxShadow: '0 4px 18px rgba(168, 85, 247, 0.4)',
                  }}
                >
                  <span>Claim Deal (₹100 / $1.20)</span>
                  <ArrowRight size={16} />
                </NavLink>

                <a
                  href="https://t.me/skdev1?text=Hi%20Satya%2C%20I'd%20like%20to%20get%20Aniset%20for%20the%20Birthday%20Sale%20via%20UPI%20(%E2%82%B9100)%20or%20PayPal%20(%241.20)!%20%F0%9F%8E%82"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{
                    padding: '0.65rem 1.15rem',
                    fontSize: '0.95rem',
                    borderColor: 'rgba(168, 85, 247, 0.35)',
                    color: '#d8b4fe',
                  }}
                >
                  <Send size={15} />
                  <span>DM @skdev1</span>
                </a>
              </div>
            </div>

            {/* Right Artwork / Preview */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: 'clamp(100px, 16vw, 130px)',
                  height: 'clamp(100px, 16vw, 130px)',
                  borderRadius: '1.5rem',
                  padding: '4px',
                  background: 'linear-gradient(135deg, #a855f7, #ec4899, #38bdf8)',
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={appsData.find((a) => a.id === 'aniset')?.icon}
                  alt="Aniset icon"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '1.25rem',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
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
