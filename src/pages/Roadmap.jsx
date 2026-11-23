import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Compass,
  Milestone,
  CheckCircle2,
  Clock,
  Layers,
  Send,
  Palette,
  Lightbulb,
  Smartphone
} from 'lucide-react';
import SEO from '../components/SEO';
import { useToast } from '../context/ToastContext';
import skdevbanner from '../assets/skdev-banner.webp';
import anifyIcon from '../assets/anify/anifyicon_new.webp';
import anisetIcon from '../assets/Aniset_logo.webp';
import milkyIcon from '../assets/milky/milky-icon.webp';

export default function Roadmap() {
  const toast = useToast();
  const [selectedYear, setSelectedYear] = useState('All');
  const [activeTab, setActiveTab] = useState('all');

  const journeyMilestones = [
    {
      year: '2023',
      date: 'Early 2023',
      title: 'The Inception & Gwalls Wallpaper App',
      tag: 'Foundation',
      icon: <Palette size={18} style={{ color: 'var(--accent-primary)' }} />,
      description: 'Started the indie Android journey with Gwalls — a clean, ad-free wallpaper app focusing on curated aesthetics and total user privacy. Set the foundation for mobile UI personalization.',
      status: 'Completed',
    },
    {
      year: '2023',
      date: 'December 2023',
      title: 'Launch of Aniset (Anime KWGT & KLWP Suite)',
      tag: 'Release',
      icon: <Layers size={18} style={{ color: 'var(--accent-primary)' }} />,
      app: 'Aniset',
      appIcon: anisetIcon,
      appLink: '/apps/aniset',
      description: 'Published Aniset on Google Play — bringing iconic anime aesthetics to KWGT widgets and KLWP dynamic live wallpapers. Introduced typography, palette customization, and curated anime art.',
      status: 'Completed',
    },
    {
      year: '2024',
      date: '2024',
      title: 'Aniset Major Updates & Community Growth',
      tag: 'Milestone',
      icon: <Layers size={18} style={{ color: 'var(--text-muted)' }} />,
      app: 'Aniset',
      appIcon: anisetIcon,
      appLink: '/apps/aniset',
      description: 'Expanded Aniset with new widget packs, community-requested anime themes, tablet support, and continuous bug-fixing for seamless integration across all major launchers.',
      status: 'Completed',
    },
    {
      year: '2025',
      date: 'Mid 2025',
      title: 'Developing Anify: Standalone Widget Architecture',
      tag: 'Architecture',
      icon: <Smartphone size={18} style={{ color: 'var(--color-positive)' }} />,
      description: 'Recognized the barrier of requiring 3rd-party base apps (like KWGT Pro) for casual users. Began architecting Anify — a fully standalone, native widget suite requiring zero companion apps.',
      status: 'Completed',
    },
    {
      year: '2026',
      date: 'Early 2026',
      title: 'Anify Official Launch & Focus Lock Integration',
      tag: 'Flagship release',
      icon: <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)' }} />,
      app: 'Anify',
      appIcon: anifyIcon,
      appLink: '/apps/anify',
      description: 'Launched Anify on Google Play! Packed with ready-to-apply widgets, BlockIt Focus Lock (using Android AccessibilityService API), HD wallpapers, and custom ringtones.',
      status: 'Completed',
    },
    {
      year: '2026',
      date: 'August 2026',
      title: 'Anify v1.1.5: Sticker Studio & Android 16 (API 36)',
      tag: 'Latest release',
      icon: <CheckCircle2 size={18} style={{ color: 'var(--color-positive)' }} />,
      app: 'Anify',
      appIcon: anifyIcon,
      appLink: '/apps/anify',
      description: 'Rolled out Sticker Studio with Telegram to WhatsApp conversion and 1-tap export, KWGT copyright and widget removal requests, improved Focus Lock UI, and updated Android 16 (API 36) target.',
      status: 'Completed',
    }
  ];

  const roadmapItems = [
    {
      id: 1,
      title: 'Anify 1.1.6 — Under Development',
      targetApp: 'Anify',
      category: 'in-progress',
      categoryLabel: 'Under Development',
      priority: 'Active Development',
      description: 'Major upcoming upgrade introducing PC Remote (trackpad & media controls), Dual Screen extension mode, ultra-fast local File Transfer between PC and Android, and refined widget optimizations.',
      eta: 'Under Development',
      progress: 75,
    },
    {
      id: 2,
      title: 'Aniset 2.0 — Active Development',
      targetApp: 'Aniset',
      category: 'in-progress',
      categoryLabel: 'Active Development',
      priority: 'Active Sprint',
      description: 'A massive next-generation overhaul of the Aniset suite featuring brand-new anime KWGT presets, modernized KLWP dynamic live wallpaper setups, and expanded launcher compatibility.',
      eta: 'In Progress',
      progress: 65,
    },
    {
      id: 3,
      title: 'Aniset Pro — Coming Soon after Aniset 2.0',
      targetApp: 'Aniset Pro',
      category: 'planned',
      categoryLabel: 'After Aniset 2.0',
      priority: 'Next Phase Flagship',
      description: 'The ultimate premium edition of Aniset launching immediately following the 2.0 release, packed with exclusive pro anime widgets, dynamic themes, and advanced customization modules.',
      eta: 'After Aniset 2.0',
      progress: 20,
    },
    {
      id: 4,
      title: 'Milky Launcher — Google Play Launch',
      targetApp: 'Milky Launcher',
      category: 'in-progress',
      categoryLabel: 'Launching 25 Dec',
      priority: 'Release Target: 25 December 2026',
      partner: {
        name: 'Krishna Vishwakarma (@Spyou)',
        link: 'https://github.com/Spyou'
      },
      app: 'Milky Launcher',
      appIcon: milkyIcon,
      appLink: '/apps/milky-launcher',
      description: 'Android home screen launcher built natively with Jetpack Compose in co-development with Krishna Vishwakarma. Releasing on Google Play on 25 December 2026. Engineered with spring-based spatial motion physics tokens, adaptive circle icon masking, 4-tier instant smart search, modular desktop widgets, and 100% on-device privacy with zero internet permissions.',
      eta: '25 December 2026',
      progress: 95,
    },
  ];

  const filteredMilestones = selectedYear === 'All'
    ? journeyMilestones
    : journeyMilestones.filter(m => m.year === selectedYear);

  const filteredRoadmap = activeTab === 'all'
    ? roadmapItems
    : roadmapItems.filter(item => item.category === activeTab);

  const handleSuggestFeature = () => {
    const telegramUrl = `https://t.me/skdev1?text=${encodeURIComponent("Hi Satya, I have a feature idea for SKDev apps:\n\n[Describe your widget or app idea here]")}`;
    window.open(telegramUrl, '_blank');
    toast.success('Opening Telegram to submit your idea!');
  };

  const roadmapJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'SKDev Developer Journey & Public Roadmap',
    description: 'Chronological timeline of SKDev milestones from 2023 to 2026+ and live public roadmap for upcoming Android personalization features.',
    url: 'https://skdev.psatyakiran.in/roadmap',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: roadmapItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        description: item.description,
      })),
    },
  };

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
      <SEO
        title="Developer Journey & Public Roadmap"
        description="Explore the evolution of SKDev and track live development sprints for Anify 1.1.6, Aniset 2.0, Aniset Pro, and Milky Launcher."
        keywords="skdev roadmap, anify 1.1.6, aniset 2.0, aniset pro, milky launcher, android indie developer, android widgets development, transparent indie dev"
        canonical="/roadmap"
        image={skdevbanner}
        jsonLd={roadmapJsonLd}
      />

      {/* Hero Section */}
      <section style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px auto' }}>
        <div style={{ marginBottom: '14px' }}>
          <span className="tech-badge">
            <Compass size={13} /> Transparent development
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', marginBottom: '12px' }}>
          Developer journey and roadmap
        </h1>

        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '28px', maxWidth: '620px', margin: '0 auto 28px auto' }}>
          From wallpaper experiments to standalone Android widgets and native launchers — track what is live, in sprint, and planned.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={handleSuggestFeature} className="btn btn-primary" style={{ minWidth: '160px' }}>
            <Lightbulb size={15} /> Suggest a feature
          </button>
          <a href="https://t.me/skdev29" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ minWidth: '160px' }}>
            <Send size={15} /> Updates channel
          </a>
        </div>
      </section>

      {/* Section 1: The Public Roadmap */}
      <section style={{ marginBottom: '56px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.35rem', marginBottom: '4px' }}>What we are building</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
                Active sprint progress and planned features.
              </p>
              <span className="tech-badge">
                <Clock size={11} /> Updated: November 23, 2026 at 12:49 PM IST
              </span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="scroll-pills-container" style={{ width: '100%', maxWidth: 'max-content' }}>
            {[
              { id: 'all', label: 'All items' },
              { id: 'in-progress', label: 'Active sprints' },
              { id: 'planned', label: 'Next phase' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="scroll-pill-item"
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid',
                  fontSize: '0.825rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  borderColor: activeTab === tab.id ? 'var(--accent-border)' : 'var(--border-subtle)',
                  backgroundColor: activeTab === tab.id ? 'var(--bg-raised)' : 'var(--bg-card)',
                  color: activeTab === tab.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  transition: 'all 140ms cubic-bezier(0.22, 1, 0.36, 1)',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Roadmap Grid */}
        <div className="stagger-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: '20px'
        }}>
          {filteredRoadmap.map(item => (
            <div
              key={item.id}
              className="app-card responsive-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                  <span className="tech-badge">
                    <span className="status-dot" /> {item.categoryLabel}
                  </span>

                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    App: <span style={{ color: 'var(--text-primary)' }}>{item.targetApp}</span>
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: item.partner ? '10px' : '20px' }}>
                  {item.description}
                </p>

                {item.partner && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Partner:</span>
                    <a
                      href={item.partner.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: 'var(--accent-primary)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {item.partner.name}
                    </a>
                  </div>
                )}
              </div>

              <div>
                {/* Progress bar */}
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }} className="font-mono tabular-nums">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--bg-raised)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                    <div style={{
                      width: `${item.progress}%`,
                      height: '100%',
                      backgroundColor: 'var(--accent-primary)',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'width 0.4s ease'
                    }} />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: 'var(--text-muted)' }} className="font-mono">
                  <span>Target: {item.eta}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{item.priority}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Interactive Developer Journey Timeline */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.35rem', marginBottom: '4px' }}>Milestones and history</h2>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
              Key milestones achieved in indie development.
            </p>
          </div>

          {/* Year Filter */}
          <div className="scroll-pills-container" style={{ width: '100%', maxWidth: 'max-content' }}>
            {['All', '2023', '2024', '2025', '2026'].map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className="scroll-pill-item"
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid',
                  borderColor: selectedYear === year ? 'var(--accent-border)' : 'var(--border-subtle)',
                  backgroundColor: selectedYear === year ? 'var(--bg-raised)' : 'var(--bg-card)',
                  color: selectedYear === year ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  fontSize: '0.825rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 140ms cubic-bezier(0.22, 1, 0.36, 1)',
                  whiteSpace: 'nowrap',
                }}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="app-card responsive-panel"
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                position: 'relative'
              }}
            >
              {/* Left Badge */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '44px',
                flexShrink: 0
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-raised)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '6px'
                }}>
                  {milestone.icon}
                </div>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {milestone.year}
                </span>
              </div>

              {/* Main Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <span className="tech-badge">
                    {milestone.tag}
                  </span>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {milestone.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {milestone.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, margin: '0 0 12px 0' }}>
                  {milestone.description}
                </p>

                {milestone.app && (
                  <NavLink
                    to={milestone.appLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--accent-primary)',
                    }}
                  >
                    View {milestone.app}
                  </NavLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
