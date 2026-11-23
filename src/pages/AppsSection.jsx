import React from 'react';
import { appsData } from '../data/appsData';
import AppCard from '../components/AppCard';
import SEO from '../components/SEO';
import skdevbanner from '../assets/skdev-banner.webp';

export default function AppsSection() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SKDev Android Applications & Personalization Tools',
    description: 'Explore the full suite of Android apps by SKDev, featuring Anify, Milky Launcher, and Aniset.',
    url: 'https://skdev.psatyakiran.in/apps',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: appsData.map((app, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: app.name,
        url: `https://skdev.psatyakiran.in/apps/${app.id}`,
        description: app.shortDesc || app.description,
      })),
    },
  };

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
      <SEO
        title="Android Apps & Widgets"
        description="Browse all Android apps by SKDev — featuring Anify, Milky Launcher, Aniset, and Gwalls."
        keywords="android apps, milky launcher, jetpack compose launcher, anify, aniset, kwgt widgets, klwp live wallpapers, sticker studio, focus lock, android 16, personalization apps, indie android developer"
        canonical="/apps"
        image={skdevbanner}
        jsonLd={collectionJsonLd}
      />
      <header style={{ marginBottom: '40px', textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px auto' }}>
        <div style={{ marginBottom: '14px' }}>
          <span className="tech-badge">
            <span className="status-dot" /> Android suites
          </span>
        </div>
        <h1 style={{ marginBottom: '12px', fontSize: 'clamp(2rem, 5vw, 2.75rem)' }}>
          Applications
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
          Independent Android personalization suites, system widgets, and launchers built for real user needs.
        </p>
      </header>
      
      <div className="stagger-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', 
        gap: '20px' 
      }}>
        {appsData.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}
