import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Compass, 
  Milestone, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Send, 
  MessageCircle, 
  ArrowRight, 
  Layers, 
  Smartphone, 
  Palette, 
  Lightbulb
} from 'lucide-react';
import SEO from '../components/SEO';
import ProgressPlayground from '../experience/ProgressPlayground';
import { useToast } from '../context/useToast';
import skdevbanner from '../assets/skdev-banner.webp';
import anifyIcon from '../assets/anify/anifyicon_new.webp';
import anisetIcon from '../assets/Aniset_logo.webp';
import milkyIcon from '../assets/milky/milky-icon.webp';

export default function Roadmap() {
  const toast = useToast();
  const [selectedYear, setSelectedYear] = useState('All');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'in-progress', 'planned', 'planning'

  const journeyMilestones = [
    {
      year: '2023',
      date: 'Early 2023',
      title: 'The Inception & Gwalls Wallpaper App',
      tag: 'Foundation',
      tagColor: 'var(--accent-primary)',
      icon: <Palette size={20} color="var(--accent-primary)" />,
      description: 'Started the indie Android journey with Gwalls — a clean, ad-free wallpaper app focusing on high-resolution curated aesthetics and total user privacy. Set the foundation for mobile UI personalization.',
      status: 'Completed',
    },
    {
      year: '2023',
      date: 'December 2023',
      title: 'Launch of Aniset (Anime KWGT & KLWP Suite)',
      tag: 'Release',
      tagColor: 'var(--accent-primary)',
      icon: <Palette size={20} color="var(--accent-primary)" />,
      app: 'Aniset',
      appIcon: anisetIcon,
      appLink: '/apps/aniset',
      description: 'Published Aniset on Google Play — bringing iconic anime aesthetics to KWGT widgets and KLWP dynamic live wallpapers. Introduced deep typography, palette customization, and curated anime art.',
      status: 'Completed',
    },
    {
      year: '2024',
      date: '2024',
      title: 'Aniset Major Updates & Community Growth',
      tag: 'Milestone',
      tagColor: 'var(--accent-secondary)',
      icon: <Layers size={20} color="var(--accent-secondary)" />,
      app: 'Aniset',
      appIcon: anisetIcon,
      appLink: '/apps/aniset',
      description: 'Expanded Aniset with new widget packs, community-requested anime themes, tablet support, and continuous bug-fixing for seamless integration across all major launchers.',
      status: 'Completed',
    },
    {
      year: '2025',
      date: 'Mid 2025',
      title: 'Developing Anify: The Standalone Widget Revolution',
      tag: 'Innovation',
      tagColor: 'var(--accent-secondary)',
      icon: <Smartphone size={20} color="var(--accent-secondary)" />,
      description: 'Recognized the barrier of requiring 3rd-party base apps (like KWGT Pro) for casual users. Began architecting Anify — a fully standalone, native widget suite requiring ZERO companion apps.',
      status: 'Completed',
    },
    {
      year: '2026',
      date: 'Early 2026',
      title: 'Anify Official Launch & Focus Lock Integration',
      tag: 'Flagship Release',
      tagColor: 'var(--accent-primary)',
      icon: <Flame size={20} color="var(--accent-primary)" />,
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
      tag: 'Latest Release',
      tagColor: 'var(--accent-secondary)',
      icon: <CheckCircle2 size={20} color="var(--accent-secondary)" />,
      app: 'Anify',
      appIcon: anifyIcon,
      appLink: '/apps/anify',
      description: 'Rolled out Sticker Studio with Telegram → WhatsApp conversion & 1-tap export, KWGT copyright and widget removal requests, improved Focus Lock UI & controls, automatic crash reports & diagnostics, and updated Android 16 (API 36) target.',
      status: 'Completed',
    }
  ];

  const roadmapItems = [
    {
      id: 1,
      title: 'Anify 1.1.6 — Under Development',
      targetApp: 'Anify',
      category: 'in-progress',
      categoryLabel: '⚡ Under Development',
      categoryColor: 'var(--accent-secondary)',
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
      categoryLabel: '⚡ Active Development',
      categoryColor: 'var(--accent-primary)',
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
      categoryLabel: '👑 After Aniset 2.0',
      categoryColor: 'var(--accent-primary)',
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
      categoryLabel: '🚀 Launching 19 Nov',
      categoryColor: 'var(--accent-primary)',
      priority: 'Release Target: 19 November 2026',
      partner: {
        name: 'Krishna Vishwakarma (@Spyou)',
        link: 'https://github.com/Spyou'
      },
      app: 'Milky Launcher',
      appIcon: milkyIcon,
      appLink: '/apps/milky-launcher',
      description: 'Android home screen launcher built natively with Jetpack Compose in co-development with Krishna Vishwakarma. Releasing on Google Play on 19 November 2026. Engineered with spring-based spatial motion physics tokens, adaptive circle icon masking, 4-tier instant smart search, modular desktop widgets, and 100% on-device privacy with zero internet permissions.',
      eta: '19 November 2026',
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
    description: 'Chronological timeline of SKDev milestones from 2023 to 2026+ and live public roadmap for upcoming Android personalization features (Anify 1.1.6, Aniset 2.0, Aniset Pro, and Home Launcher).',
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
    <div className="container animate-fade-in roadmap-page" style={{ paddingTop: 'clamp(1.5rem, 4vw, 3.5rem)', paddingBottom: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
      <SEO
        title="Developer Journey & Public Roadmap"
        description="Explore the evolution of SKDev and track live development sprints for Anify 1.1.6 (PC Remote, Dual Screen, File Transfer), Aniset 2.0, Aniset Pro, and Home Launcher."
        keywords="skdev roadmap, anify 1.1.6, aniset 2.0, aniset pro, home launcher, android indie developer, pc remote android, android widgets development, transparent indie dev"
        canonical="/roadmap"
        image={skdevbanner}
        jsonLd={roadmapJsonLd}
      />

      <ProgressPlayground page items={roadmapItems.filter((item) => item.category === 'in-progress')} onSuggest={handleSuggestFeature} />

      {/* ── Section 1: The Public Roadmap ── */}
      <section data-reveal="true" style={{ marginBottom: 'clamp(3rem, 7vw, 5rem)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <Flame color="var(--accent-primary)" size={22} />
              <h2 style={{ margin: 0, fontSize: 'clamp(1.4rem, 4.5vw, 2.25rem)' }}>What We're Building</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.35rem' }}>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
                Live sprint progress and planned features for Anify and Aniset.
              </p>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--accent-primary)',
                backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                border: '1px solid rgba(var(--accent-rgb), 0.25)',
                padding: '0.15rem 0.6rem',
                borderRadius: '9999px'
              }}>
                <Clock size={12} /> Updated: October 18, 2026 at 5:43 PM IST
              </span>
            </div>
          </div>

          {/* Filter Tabs (Horizontal scrollable pill container on mobile) */}
          <div className="scroll-pills-container" style={{ backgroundColor: 'rgba(24, 19, 29, 0.7)', padding: '0.35rem', borderRadius: '1rem', border: '1px solid var(--border-color)', width: '100%', maxWidth: 'max-content' }}>
            {[
              { id: 'all', label: 'All Items' },
              { id: 'in-progress', label: '⚡ Active Sprints' },
              { id: 'planned', label: '👑 Next Phase' },
              { id: 'planning', label: '⏳ In Planning' },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="scroll-pill-item"
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeTab === tab.id ? 'var(--accent-primary)' : 'transparent',
                  color: activeTab === tab.id ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Roadmap Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'clamp(1rem, 3vw, 1.5rem)'
        }}>
          {filteredRoadmap.map(item => (
            <div 
              key={item.id}
              className="glass-panel responsive-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `3px solid ${item.categoryColor}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backgroundColor: `color-mix(in srgb, ${item.categoryColor} 12%, transparent)`,
                    color: item.categoryColor,
                    border: `1px solid color-mix(in srgb, ${item.categoryColor} 35%, transparent)`
                  }}>
                    {item.categoryLabel}
                  </span>

                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    App: <strong style={{ color: 'var(--text-primary)' }}>{item.targetApp}</strong>
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: item.partner ? '0.65rem' : '1.25rem' }}>
                  {item.description}
                </p>

                {item.partner && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>🤝 In Partnership with:</span>
                    <a
                      href={item.partner.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                        padding: '0.15rem 0.6rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(var(--accent-rgb), 0.25)',
                      }}
                    >
                      <Send size={12} /> {item.partner.name}
                    </a>
                  </div>
                )}
              </div>

              <div>
                {/* Progress bar */}
                <div style={{ marginBottom: '0.875rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${item.progress}%`,
                      height: '100%',
                      backgroundColor: item.categoryColor,
                      borderRadius: '9999px',
                      transition: 'width 0.4s ease'
                    }} />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <span>Target: <strong style={{ color: 'var(--text-primary)' }}>{item.eta}</strong></span>
                  <span style={{ color: item.categoryColor, fontWeight: 600 }}>{item.priority}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: Interactive Developer Journey Timeline ── */}
      <section data-reveal="true" style={{ marginBottom: 'clamp(3rem, 7vw, 5rem)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <Milestone color="var(--accent-primary)" size={22} />
              <h2 style={{ margin: 0, fontSize: 'clamp(1.4rem, 4.5vw, 2.25rem)' }}>The Story & Milestones</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
              Key milestones achieved in our indie development journey.
            </p>
          </div>

          {/* Year Filter (Horizontal scrollable pill container on mobile) */}
          <div className="scroll-pills-container" style={{ width: '100%', maxWidth: 'max-content' }}>
            {['All', '2023', '2024', '2025', '2026'].map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                type="button"
                aria-pressed={selectedYear === year}
                className="scroll-pill-item"
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  border: selectedYear === year ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                  backgroundColor: selectedYear === year ? 'rgba(var(--accent-rgb), 0.15)' : 'rgba(24, 19, 29, 0.6)',
                  color: selectedYear === year ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="glass-panel responsive-panel"
              style={{
                display: 'flex',
                gap: 'clamp(0.875rem, 3vw, 1.75rem)',
                alignItems: 'flex-start',
                position: 'relative'
              }}
            >
              {/* Left Badge */}
                    <div className="roadmap-progress-fill" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '52px',
                flexShrink: 0
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '0.875rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid color-mix(in srgb, ${milestone.tagColor} 35%, transparent)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  marginBottom: '0.35rem'
                }}>
                  {milestone.icon}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: milestone.tagColor }}>
                  {milestone.year}
                </span>
              </div>

              {/* Main Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                  <span style={{
                    padding: '0.15rem 0.55rem',
                    borderRadius: '2rem',
                    backgroundColor: `color-mix(in srgb, ${milestone.tagColor} 10%, transparent)`,
                    color: milestone.tagColor,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    border: `1px solid color-mix(in srgb, ${milestone.tagColor} 30%, transparent)`
                  }}>
                    {milestone.tag}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {milestone.date}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)', marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {milestone.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 0.875rem 0' }}>
                  {milestone.description}
                </p>

                {milestone.app && (
                  <NavLink
                    to={milestone.appLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '0.5rem',
                      backgroundColor: 'rgba(var(--accent-rgb), 0.08)',
                      border: '1px solid rgba(var(--accent-rgb), 0.2)'
                    }}
                  >
                    {milestone.appIcon && (
                      <img src={milestone.appIcon} alt="" style={{ width: '16px', height: '16px', borderRadius: '4px' }} />
                    )}
                    View {milestone.app} Page <ArrowRight size={13} />
                  </NavLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: Community Input & Suggestion Box ── */}
      <section>
        <div
          className="glass-panel responsive-panel"
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(24, 19, 29, 0.9) 0%, rgba(43, 36, 51, 0.7) 100%)',
            border: '1px solid rgba(var(--accent-rgb), 0.3)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '1.25rem',
            backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
            border: '1px solid rgba(var(--accent-rgb), 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto',
            color: 'var(--accent-primary)'
          }}>
            <Lightbulb size={26} />
          </div>

          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', marginBottom: '0.75rem' }}>
            Have a Widget or Feature Idea?
          </h2>

          <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem', maxWidth: '600px', margin: '0 auto 1.75rem auto' }}>
            SKDev apps evolve directly from user suggestions. If there's a widget style, focus feature, or wallpaper theme you'd love to see, share it directly!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button onClick={handleSuggestFeature} className="btn btn-primary mobile-w-full" style={{ padding: '0.8rem 1.65rem', fontSize: '0.95rem', flex: '1 1 200px', maxWidth: '280px' }}>
              <Send size={16} /> Send via Telegram
            </button>
            <a href="https://t.me/skdev_chat" target="_blank" rel="noreferrer" className="btn btn-secondary mobile-w-full" style={{ padding: '0.8rem 1.65rem', fontSize: '0.95rem', flex: '1 1 200px', maxWidth: '280px' }}>
              <MessageCircle size={16} /> Community Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
