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
    <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
      <SEO
        title="Android Apps & Widgets"
        description="Browse all Android apps by SKDev — featuring Anify (Free personalization suite, Sticker Studio & widgets), Aniset (Anime KWGT & KLWP), and Gwalls."
        keywords="android apps, anify, aniset, kwgt widgets, klwp live wallpapers, sticker studio, focus lock, android 16, personalization apps, indie android developer"
        canonical="/apps"
        image={skdevbanner}
        jsonLd={collectionJsonLd}
      />
      <header style={{ marginBottom: '4rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>My Applications</h1>
        <p>A curated collection of tools, widgets, and platforms meticulously crafted for an unparalleled user experience.</p>
      </header>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {appsData.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}
