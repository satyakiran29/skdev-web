import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Download, Send } from 'lucide-react';
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
  '@type': 'Person',
  name: 'Satyakiran Pampana',
  url: 'https://skdev.psatyakiran.in',
  sameAs: [
    'https://play.google.com/store/apps/dev?id=9166037782169864125',
    'https://t.me/anify_app',
    'https://t.me/skdev29',
    'https://www.instagram.com/skdev29/',
  ],
  jobTitle: 'Indie App Developer',
  description:
    'Indie developer crafting clean, practical apps focused on performance and real user needs.',
};



export default function Home() {
  const featuredApps = appsData.slice(0, 2);

  return (
    <div className="container">
      <SEO
        description="Indie developer crafting clean, practical apps focused on performance and real user needs. Explore apps like Aniset, Anify, and Gwalls."
        canonical="/"
        image={skdevbanner}
        jsonLd={ORG_JSONLD}
      />
      {/* Hero Section */}
      <section style={{ padding: '8rem 0 6rem 0', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }} className="animate-fade-in">
        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 8vw, 4rem)' }}>
          Crafting Digital <br /> <span className="text-gradient">Experiences</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', marginBottom: '2.5rem', padding: '0 1rem' }}>
          Indie developer crafting clean, practical apps focused on performance and real user needs.
        </p>
        <div className="flex-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
          <NavLink to="/apps" className="btn btn-primary mobile-w-full">
            View All Apps <ArrowRight size={18} />
          </NavLink>
          <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer" className="btn btn-secondary mobile-w-full">
            Play Store Profile <Download size={18} />
          </a>
          <a href="https://t.me/skdev29" target="_blank" rel="noreferrer" className="btn btn-secondary mobile-w-full">
            Telegram Channel <Send size={18} />
          </a>
          <a href="https://www.instagram.com/skdev29/" target="_blank" rel="noreferrer" className="btn btn-secondary mobile-w-full">
            Instagram <InstagramIcon size={18} />
          </a>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section style={{ padding: '4rem 0' }} className="animate-fade-in delay-200">
        <div className="flex-between flex-between-mobile-col" style={{ marginBottom: '3rem' }}>
          <h2>Featured Applications</h2>
          <NavLink to="/apps" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            See All <ArrowRight size={16} />
          </NavLink>
        </div>

        <div className="grid grid-cols-2">
          {featuredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {appsData.length > 2 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <NavLink to="/apps" className="btn btn-secondary">
              Show More
            </NavLink>
          </div>
        )}
      </section>

      {/* Official vs Modded App Education Infographic */}
      <OfficialInfographic />
    </div>
  );
}
