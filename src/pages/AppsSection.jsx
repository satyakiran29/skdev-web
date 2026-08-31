import React from 'react';
import { appsData } from '../data/appsData';
import AppCard from '../components/AppCard';
import SEO from '../components/SEO';
import skdevbanner from '../assets/skdev-banner.webp';
import { Grid as GridIcon } from 'lucide-react';

export default function AppsSection() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SKDev Android Applications & Personalization Tools',
    description: 'Explore the full suite of Android apps by SKDev, featuring Anify (Free personalization & productivity suite) and Aniset (Anime KWGT & KLWP widgets).',
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
    <div className="container animate-fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
      <SEO
        title="Android Apps & Widgets"
        description="Browse all Android apps by SKDev — featuring Anify (Free personalization suite, Sticker Studio & widgets), Aniset (Anime KWGT & KLWP), and Gwalls."
        keywords="android apps, anify, aniset, kwgt widgets, klwp live wallpapers, sticker studio, focus lock, android 16, personalization apps, indie android developer"
        canonical="/apps"
        image={skdevbanner}
        jsonLd={collectionJsonLd}
      />
      <header style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center', maxWidth: '680px', margin: '0 auto clamp(2rem, 5vw, 3.5rem) auto' }}>
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
            marginBottom: '1rem',
          }}
        >
          <GridIcon size={14} /> Android Ecosystem
        </div>
        <h1 style={{ marginBottom: '0.875rem', fontSize: 'clamp(2rem, 6vw, 3.25rem)' }}>
          My <span className="text-gradient">Applications</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 3vw, 1.125rem)', lineHeight: 1.65 }}>
          A curated collection of tools, widgets, and personalization suites crafted for an unparalleled user experience.
        </p>
      </header>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', 
        gap: 'clamp(1.25rem, 3vw, 2rem)' 
      }}>
        {appsData.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}
