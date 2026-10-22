import React, { useState } from 'react';
import { appsData } from '../data/appsData';
import AppCard from '../components/AppCard';
import SEO from '../components/SEO';
import skdevbanner from '../assets/skdev-banner.webp';
import { Grid as GridIcon, Search, X } from 'lucide-react';

const appStatus = (app) => {
  if (app.id === 'gwalls') return 'discontinued';
  if (app.status === 'upcoming') return 'upcoming';
  return 'available';
};

export default function AppsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'All apps' },
    { id: 'available', label: 'Available' },
    { id: 'upcoming', label: 'Coming soon' },
    { id: 'discontinued', label: 'Discontinued' },
  ];

  const visibleApps = appsData.filter((app) => {
    const matchesFilter = activeFilter === 'all' || appStatus(app) === activeFilter;
    const searchableText = `${app.name} ${app.tagline} ${app.shortDesc || ''} ${app.description}`.toLowerCase();
    return matchesFilter && searchableText.includes(searchQuery.trim().toLowerCase());
  });

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SKDev Android Applications & Personalization Tools',
    description: 'Explore the full suite of Android apps by SKDev, featuring Anify (Free personalization & productivity suite), Milky Launcher (Native Jetpack Compose launcher releasing Nov 19), and Aniset (Anime KWGT & KLWP widgets).',
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
    <div className="container animate-fade-in" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)', paddingBottom: 'clamp(2rem, 5vw, 4rem)' }}>
      <SEO
        title="Android Apps & Widgets"
        description="Browse all Android apps by SKDev — featuring Anify (Free personalization suite, Sticker Studio & widgets), Milky Launcher (Native Jetpack Compose launcher releasing 19 Nov), Aniset (Anime KWGT & KLWP), and Gwalls."
        keywords="android apps, milky launcher, jetpack compose launcher, anify, aniset, kwgt widgets, klwp live wallpapers, sticker studio, focus lock, android 16, personalization apps, indie android developer"
        canonical="/apps"
        image={skdevbanner}
        jsonLd={collectionJsonLd}
      />
      <header className="editorial-intro" style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center', maxWidth: '680px', margin: '0 auto clamp(2rem, 5vw, 3.5rem) auto' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
            border: '1px solid rgba(var(--accent-rgb), 0.25)',
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
      
      <section className="apps-explorer" aria-label="Find and filter apps">
        <div className="apps-explorer__topline">
          <div className="apps-explorer__filters" role="group" aria-label="Filter apps by availability">
            {filters.map((filter) => {
              const count = appsData.filter((app) => filter.id === 'all' || appStatus(app) === filter.id).length;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={activeFilter === filter.id}
                  className={activeFilter === filter.id ? 'is-active' : ''}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  <span>{filter.label}</span>
                  <span className="apps-explorer__filter-count" aria-hidden="true">{String(count).padStart(2, '0')}</span>
                </button>
              );
            })}
          </div>

          <label className="apps-explorer__search">
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              aria-label="Search apps by name or description"
              placeholder="Search the collection"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            {searchQuery && (
              <button type="button" aria-label="Clear app search" onClick={() => setSearchQuery('')}>
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </label>
        </div>

        <p className="apps-explorer__count" aria-live="polite">
          {visibleApps.length} {visibleApps.length === 1 ? 'app' : 'apps'} shown
        </p>

        {visibleApps.length > 0 ? (
          <div className="apps-grid">
            {visibleApps.map((app, index) => (
              <div key={`${activeFilter}-${app.id}`} className="apps-grid__item" style={{ '--item-index': index }}>
                <AppCard app={app} />
              </div>
            ))}
          </div>
        ) : (
          <p className="apps-explorer__empty" role="status">No apps match your search.</p>
        )}
      </section>
    </div>
  );
}
