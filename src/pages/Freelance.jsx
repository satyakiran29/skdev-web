import React, { useState } from 'react';
import {
  Code,
  Smartphone,
  Palette,
  Server,
  CheckCircle,
  ArrowRight,
  Send,
  Mail,
  Copy,
  ExternalLink,
  Play,
  Check,
  Zap,
  HelpCircle,
  MessageSquare,
  Shield,
  Layers,
  Clock,
  Sparkles,
  Award,
  Globe,
  ChevronDown
} from 'lucide-react';
import SEO from '../components/SEO';
import skdevbanner from '../assets/skdev-banner.webp';
import { useToast } from '../context/ToastContext';

const GitHubIcon = ({ size = 13, color = '#38bdf8' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 13, color = '#38bdf8' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// JSON-LD structured data for freelance services
const FREELANCE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Satyakiran (SKDev) Freelance Web & Mobile App Development',
  image: 'https://skdev.psatyakiran.in/android-chrome-512x512.png',
  url: 'https://skdev.psatyakiran.in/freelance',
  telephone: '',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  founder: {
    '@type': 'Person',
    name: 'Satyakiran Pampana',
    alternateName: 'SKDev',
    url: 'https://skdev.psatyakiran.in',
  },
  description:
    'Hire Satyakiran (SKDev) for production-grade Android application development, full-stack web applications (React, Node, Django), custom home screen widgets, and UI/UX design.',
  knowsAbout: [
    'Android App Development',
    'Kotlin',
    'Java',
    'React.js',
    'Full-Stack Web Development',
    'UI/UX Design',
    'Google Play Store Publishing',
    'Android Widgets',
    'REST APIs',
    'Firebase',
  ],
};

const SERVICES_DATA = [
  {
    icon: <Code size={28} />,
    title: 'Full-Stack Web Development',
    desc: 'Custom, ultra-fast, and responsive web applications built with modern frontend frameworks and robust backend architectures.',
    deliverables: [
      'Single Page Apps (SPA) & SaaS Dashboards',
      'RESTful API & GraphQL integrations',
      'Database design (MongoDB, SQLite, MySQL)',
      'Vite & React performance optimization',
      'Vercel, Cloudflare, and custom deployment',
    ],
    tags: ['React.js', 'Vite', 'Node.js', 'Express', 'Django', 'MongoDB', 'CSS3 / Tailwind'],
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Android App Development',
    desc: 'Fluid, high-performance native Android applications with custom UI widgets, background services, and modern system integrations.',
    deliverables: [
      'Native Android app architecture (Java / Kotlin)',
      'Home screen widgets & system UI personalization',
      'Firebase backend & push notifications',
      'Offline caching & local data storage',
      'Proven published apps: Anify & Aniset on Google Play Store',
      'Google Play Store release & compliance guidance',
    ],
    tags: ['Android SDK', 'Kotlin', 'Java', 'Firebase', 'REST APIs', 'Play Console'],
  },
  {
    icon: <Palette size={28} />,
    title: 'UI/UX & Product Design',
    desc: 'Modern, aesthetic, and user-centric interfaces crafted with meticulous attention to detail, typography, and micro-interactions.',
    deliverables: [
      'High-fidelity Figma wireframes & mockups',
      'Interactive, clickable prototypes',
      'Component design systems & tokens',
      'Mobile-first responsive layouts',
      'Dark mode & glassmorphism aesthetics',
    ],
    tags: ['Figma', 'Prototyping', 'Design Systems', 'Micro-Animations', 'Responsive'],
  },
  {
    icon: <Server size={28} />,
    title: 'Backend, APIs & Automation',
    desc: 'Reliable server-side logic, secure authentication workflows, automated pipelines, and seamless third-party integrations.',
    deliverables: [
      'RESTful API design with Express / Django',
      'n8n automated workflow pipelines',
      'Authentication & authorization (JWT, OAuth)',
      'Database modeling & indexing (MongoDB, SQL)',
      'Serverless functions & webhook handling',
    ],
    tags: ['Node.js', 'Express', 'Python / Django', 'n8n', 'REST APIs', 'JWT'],
  },
];

const PROVEN_APPS_DATA = [
  {
    title: 'Anify - Ultimate Personalization',
    platform: 'Android App (Google Play Store)',
    badge: 'Published on Play Store',
    desc: 'A feature-packed Android personalization app published on Google Play. Offers ready-to-use home screen widgets, curated HD wallpapers, and trending ringtones—all natively built without requiring third-party tools like KWGT.',
    highlights: [
      'Native Android Architecture & Performance',
      'Custom Widget Engine & Live Wallpapers',
      'Published on Google Play Store with Active Users',
      'Seamless Firebase Integration & Offline Support',
    ],
    tags: ['Android', 'Kotlin', 'Java', 'Google Play', 'Widgets', 'Firebase'],
    link: 'https://play.google.com/store/apps/details?id=com.skdev.anify',
    linkText: 'View on Google Play',
  },
  {
    title: 'Aniset - Anime KWGT & KLWP',
    platform: 'Android App (Google Play Store)',
    badge: 'Published on Play Store',
    desc: 'A popular Android home screen customization app on Google Play with anime-themed widgets and live wallpapers. Features deep personalization, preset pickers, and optimized rendering engines.',
    highlights: [
      'Intricate KWGT & KLWP Widget Presets',
      'Published Paid App on Google Play Store',
      'High Rating & Active Customization Community',
      'Regular Feature & Design Updates',
    ],
    tags: ['KWGT', 'KLWP', 'Paid App', 'Google Play', 'Anime UI', 'Android'],
    link: 'https://play.google.com/store/apps/details?id=com.skdev.aniset',
    linkText: 'View on Google Play',
  },
  {
    title: 'MernShop - Full-Stack eCommerce',
    platform: 'Full-Stack Web App',
    badge: 'Production App',
    desc: 'Production-ready eCommerce platform featuring product search, user authentication, shopping cart, PayPal checkout integration, and an admin dashboard for inventory and order management.',
    highlights: [
      'Full MERN Stack (MongoDB, Express, React, Node)',
      'Redux State Management & JWT Authentication',
      'PayPal API & Order Processing System',
      'Responsive Admin Dashboard & Analytics',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'PayPal'],
    link: 'https://github.com/satyakiran29',
    linkText: 'View Source Code',
  },
  {
    title: 'SkDev Android Apps Showcase',
    platform: 'Web App & Portfolio',
    badge: 'Live Production',
    desc: 'Official web showcase for SKDev Android applications with real-time app store links, feature breakdowns, dynamic QR codes, interactive FAQs, and developer milestone roadmap.',
    highlights: [
      'Vite & React 19 Performance Engine',
      'Dynamic QR Code Generation for Direct Installs',
      'Dark Glassmorphic UI Design System',
      'Interactive Roadmap & Public App Metrics',
    ],
    tags: ['React 19', 'Vite', 'Lucide', 'PWA', 'Glassmorphism', 'WebP'],
    link: 'https://skdev.psatyakiran.in',
    linkText: 'Visit Website',
  },
];

const PACKAGES_DATA = [
  {
    name: 'MVP Launchpad',
    scope: 'Best for Startups & Quick Launches',
    desc: 'Turn your idea into a functioning, market-ready MVP in 2–4 weeks.',
    features: [
      'Core feature implementation',
      'Responsive web or Android app',
      'Authentication & database setup',
      'Deployment & domain configuration',
      '2 weeks post-launch bug support',
    ],
    buttonText: 'Choose MVP Launchpad',
    featured: false,
  },
  {
    name: 'Full-Stack Custom App',
    scope: 'Comprehensive End-to-End Build',
    desc: 'A complete, scalable product built from scratch with custom design and architecture.',
    features: [
      'Full custom UI/UX design in Figma',
      'Frontend & backend architecture',
      'Third-party API & payment integrations',
      'Google Play Store release or Web deployment',
      'Admin dashboard & analytics',
      '30 days post-launch support & warranty',
    ],
    buttonText: 'Choose Full-Stack Custom',
    featured: true,
  },
  {
    name: 'Retainer & Support',
    scope: 'Ongoing Feature Rollouts & Maintenance',
    desc: 'Dedicated monthly engineering hours for continuous feature development and maintenance.',
    features: [
      'Dedicated monthly sprint hours',
      'Priority bug fixes & security patches',
      'Continuous feature development',
      'Performance & SEO optimization',
      'Direct Slack / Telegram channel access',
    ],
    buttonText: 'Choose Retainer & Support',
    featured: false,
  },
];

const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Discovery & Scope',
    desc: 'We discuss your vision, define core features, evaluate technical feasibility, and agree on clear milestones.',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    desc: 'I create wireframes and interactive prototypes in Figma, establishing the visual identity and user flows.',
  },
  {
    number: '03',
    title: 'Agile Development',
    desc: 'I build your application in focused sprint cycles, providing regular demo links or APK builds for continuous feedback.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    desc: 'Deployment to production (Vercel/Cloudflare or Google Play Store), complete handover of source code, and post-launch warranty.',
  },
];

const FAQ_DATA = [
  {
    q: 'How does the payment and milestone structure work?',
    a: 'Typically, projects are split into milestones: a 30-50% upfront deposit upon contract signing, intermediate milestone payments upon demo approvals, and the remaining balance upon final deployment and code handover.',
  },
  {
    q: 'Who owns the intellectual property and code?',
    a: 'You do. Upon final payment, 100% of the intellectual property, source code, Figma design files, and production assets belong entirely to you.',
  },
  {
    q: 'Can you help publish my app to the Google Play Store?',
    a: 'Yes! I handle the entire Play Store submission process, including creating signing keys, setting up Google Play Console store listings, configuring privacy policies, and addressing any policy compliance reviews.',
  },
  {
    q: 'Can you work with an existing codebase?',
    a: 'Yes. I frequently audit, refactor, and add new features to existing React, Node.js, and Android codebases. I\'ll review your repository and provide an upfront feasibility assessment.',
  },
  {
    q: 'What communication channels do you use?',
    a: 'I communicate directly via Telegram, Email, and Google Meet/Zoom for sync calls. You will have direct developer access throughout the entire engagement.',
  },
];

const PROJECT_TYPES = [
  'Native Android App',
  'Full-Stack Web App',
  'UI/UX & Figma Design',
  'Home Screen Widgets / Tools',
  'Bug Fix & Optimization',
  'Consultation / Other',
];

const BUDGET_RANGES = [
  '< $500 (₹40K)',
  '$500 - $1,500 (₹40K - ₹1.25L)',
  '$1,500 - $3,000 (₹1.25L - ₹2.5L)',
  '$3,000+ (₹2.5L+)',
  'Flexible / Hourly',
];

const TIMELINES = ['Urgent (< 2 weeks)', '1 Month', '2 - 3 Months', 'Flexible'];

export default function Freelance() {
  const toast = useToast();

  // Form states
  const [selectedType, setSelectedType] = useState('Native Android App');
  const [selectedBudget, setSelectedBudget] = useState('$500 - $1,500 (₹40K - ₹1.25L)');
  const [selectedTimeline, setSelectedTimeline] = useState('1 Month');
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const handlePackageSelect = (packageName) => {
    setProjectDetails((prev) => `I am interested in the ${packageName} package.\n\n${prev}`);
    const inquirySection = document.getElementById('inquiry');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buildInquirySummary = () => {
    return (
      `Project Inquiry for Satyakiran (SKDev)\n` +
      `------------------------------------\n` +
      `• Client Name: ${clientName || 'Not specified'}\n` +
      `• Contact / Handle: ${clientContact || 'Not specified'}\n` +
      `• Project Type: ${selectedType}\n` +
      `• Estimated Budget: ${selectedBudget}\n` +
      `• Target Timeline: ${selectedTimeline}\n\n` +
      `• Project Overview:\n${projectDetails || 'No additional details provided.'}\n`
    );
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Project Inquiry] ${selectedType} - ${clientName || 'New Client'}`);
    const body = encodeURIComponent(buildInquirySummary());
    window.open(`mailto:satyakiran296@gmail.com?subject=${subject}&body=${body}`, '_blank');
    toast.success('Opening your email client...');
  };

  const handleSendTelegram = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(buildInquirySummary());
    window.open(`https://t.me/skdev29?text=${message}`, '_blank');
    toast.success('Redirecting to Telegram...');
  };

  const handleCopyDetails = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(buildInquirySummary());
      toast.success('Inquiry details copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy to clipboard.');
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(1rem, 3.5vw, 3rem) 0' }}>
      <SEO
        title="Hire Satyakiran | Freelance Full-Stack & Android Developer"
        description="Hire Satyakiran for high-performance Full-Stack Web Development, native Android app engineering, custom home screen widgets, and modern UI/UX design. Published Google Play apps (Anify, Aniset)."
        keywords="hire satyakiran, freelance full stack developer, freelance android developer, react developer, skdev freelance, anify developer, custom android widgets, hire web developer"
        canonical="/freelance"
        image={skdevbanner}
        jsonLd={FREELANCE_JSONLD}
      />

      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          textAlign: 'center',
          maxWidth: '860px',
          margin: '0 auto clamp(2.5rem, 6vw, 4.5rem) auto',
        }}
      >
        {/* Availability Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(52, 211, 153, 0.1)',
            border: '1px solid rgba(52, 211, 153, 0.3)',
            color: '#34d399',
            fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
            fontWeight: 600,
            marginBottom: '1.25rem',
            maxWidth: '100%',
            lineHeight: 1.4,
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#34d399',
              boxShadow: '0 0 10px #34d399',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          Available for New Projects & Contracts
        </div>

        <h1
          style={{
            marginBottom: '1.25rem',
            fontSize: 'clamp(1.7rem, 6vw, 3.75rem)',
            lineHeight: 1.18,
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
          }}
        >
          Transforming Ideas into <span className="text-gradient">High-Performance</span> <br className="mobile-hidden" />
          Web & Mobile Apps
        </h1>

        <p
          style={{
            fontSize: 'clamp(0.925rem, 2.75vw, 1.175rem)',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            maxWidth: '720px',
            margin: '0 auto 2rem auto',
            padding: '0 0.5rem',
          }}
        >
          Need a modern React web app, a native Android application, or a sleek UI/UX design?
          I craft scalable, fast, and visually stunning digital products that delight users and drive results.
        </p>

        {/* Hero Actions */}
        <div className="hero-actions-container">
          <a
            href="#inquiry"
            className="btn btn-primary"
            style={{
              padding: '0.85rem 1.85rem',
              fontSize: '1rem',
              fontWeight: 700,
              boxShadow: '0 4px 20px rgba(56, 189, 248, 0.3)',
            }}
          >
            <Send size={18} /> Start a Project
          </a>

          <a
            href="#proven-apps"
            className="btn btn-secondary"
            style={{
              padding: '0.85rem 1.75rem',
              fontSize: '1rem',
            }}
          >
            Real-World Apps <ArrowRight size={18} />
          </a>

          <a
            href="#services"
            className="btn btn-secondary"
            style={{
              padding: '0.85rem 1.5rem',
              fontSize: '0.95rem',
              color: '#38bdf8',
            }}
          >
            Explore Services
          </a>
        </div>

        {/* Value Highlights Pill Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 145px), 1fr))',
            gap: '0.5rem',
            width: '100%',
            maxWidth: '780px',
            margin: '0 auto',
          }}
        >
          {[
            '⚡ Fast Turnaround & Sprints',
            '🎯 100% Direct Communication',
            '🚀 Full Lifecycle (Design to Launch)',
            '📱 Proven Play Store Apps',
          ].map((pill, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '0.4rem',
                padding: '0.55rem 0.75rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                border: '1px solid var(--border-color)',
                fontSize: 'clamp(0.75rem, 2.2vw, 0.8rem)',
                color: 'var(--text-secondary)',
                fontWeight: 500,
                lineHeight: 1.3,
              }}
            >
              {pill}
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" style={{ marginBottom: 'clamp(3.5rem, 8vw, 6rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}
          >
            <Zap size={15} /> Capabilities
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '0.75rem' }}>
            What I Can Build <span className="text-gradient">For You</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Comprehensive end-to-end engineering and design services tailored to your project's unique requirements.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: '1.25rem' }}>
          {SERVICES_DATA.map((service, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: 'clamp(1.35rem, 3.5vw, 1.85rem)',
                borderRadius: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '0.85rem',
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {service.icon}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.65rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {service.desc}
                </p>

                <div style={{ marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.5rem' }}>
                    Key Deliverables:
                  </span>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                        <Check size={14} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      padding: '0.2rem 0.55rem',
                      borderRadius: '0.35rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.725rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROVEN PRODUCTION APPS ================= */}
      <section id="proven-apps" style={{ marginBottom: 'clamp(3.5rem, 8vw, 6rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}
          >
            <Sparkles size={15} /> Track Record
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '0.75rem' }}>
            Proven Production <span className="text-gradient">Applications</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Explore live, battle-tested applications I've engineered and published on the Google Play Store and the web.
          </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
          {PROVEN_APPS_DATA.map((app, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: 'clamp(1.5rem, 3.5vw, 2rem)',
                borderRadius: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {app.platform}
                    </span>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginTop: '0.2rem' }}>{app.title}</h3>
                  </div>
                  <span
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: 'var(--accent-primary)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    {app.badge}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {app.desc}
                </p>

                <div style={{ marginBottom: '1.25rem' }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {app.highlights.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                        <CheckCircle size={14} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {app.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: '0.35rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={app.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.75rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {app.linkText} <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Profile Banner */}
        <div
          className="glass-panel freelance-banner-mobile-col"
          style={{
            padding: 'clamp(1.25rem, 3vw, 1.75rem)',
            borderRadius: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                flexShrink: 0,
              }}
            >
              <Play size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Official Google Play Developer Account</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Explore all published Android applications, updates, and releases directly on the Google Play Store.
              </p>
            </div>
          </div>
          <a
            href="https://play.google.com/store/apps/dev?id=9166037782169864125"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}
          >
            <Play size={16} /> Open Play Console Profile
          </a>
        </div>
      </section>

      {/* ================= WHY WORK WITH ME & PROCESS ================= */}
      <section style={{ marginBottom: 'clamp(3.5rem, 8vw, 6rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}
          >
            <Shield size={15} /> Value Proposition
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '0.75rem' }}>
            Why Work With <span className="text-gradient">Me?</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Get agency-quality results with the agility, transparency, and dedication of a solo specialist.
          </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '1.25rem', marginBottom: '3.5rem' }}>
          {[
            {
              title: 'Direct Communication',
              desc: 'Work directly with the engineer building your product—no account managers, no miscommunications, and rapid iterations.',
              icon: <MessageSquare size={22} />,
              color: 'var(--accent-primary)',
              bg: 'rgba(56, 189, 248, 0.1)',
            },
            {
              title: 'Clean, Scalable Code',
              desc: 'I write production-ready code with modular architecture, strict typing/linting, and maintainable patterns.',
              icon: <Code size={22} />,
              color: '#34d399',
              bg: 'rgba(52, 211, 153, 0.1)',
            },
            {
              title: 'End-to-End Ownership',
              desc: 'From initial wireframing and design tokens to cloud deployment and Play Store approval—I handle the entire lifecycle.',
              icon: <Layers size={22} />,
              color: '#a78bfa',
              bg: 'rgba(167, 139, 250, 0.1)',
            },
            {
              title: 'Reliable Timelines',
              desc: 'Milestone-based delivery with weekly demos so you always know the exact status of your project.',
              icon: <Clock size={22} />,
              color: '#f472b6',
              bg: 'rgba(244, 114, 182, 0.1)',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: 'clamp(1.25rem, 3.5vw, 1.75rem)',
                borderRadius: '1.25rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '0.75rem',
                  backgroundColor: item.bg,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>{item.title}</h4>
                <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Process */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: 'clamp(1.35rem, 4vw, 1.85rem)', marginBottom: '0.5rem' }}>
            How We Work Together
          </h3>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            A structured, collaborative development process designed to deliver exceptional results on schedule.
          </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '1.25rem' }}>
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                borderRadius: '1.25rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'rgba(56, 189, 248, 0.15)',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                  fontFamily: 'monospace',
                }}
              >
                {step.number}
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem' }}>{step.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PACKAGES / PRICING SECTION ================= */}
      <section style={{ marginBottom: 'clamp(3.5rem, 8vw, 6rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}
          >
            <Award size={15} /> Pricing & Scope
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '0.75rem' }}>
            Flexible Engagement <span className="text-gradient">Models</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Choose the model that best fits your project stage and requirements.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
          {PACKAGES_DATA.map((pkg, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: 'clamp(1.5rem, 4vw, 2.25rem)',
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: pkg.featured ? '1.5px solid var(--accent-primary)' : '1px solid var(--border-color)',
                backgroundColor: pkg.featured ? 'rgba(56, 189, 248, 0.05)' : 'var(--glass-bg)',
              }}
            >
              <div>
                {pkg.featured && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '24px',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      backgroundColor: 'var(--accent-primary)',
                      color: '#020617',
                      fontSize: '0.725rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Most Popular
                  </span>
                )}

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem' }}>{pkg.name}</h3>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>
                  {pkg.scope}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {pkg.desc}
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.85rem', color: '#e2e8f0' }}>
                      <CheckCircle size={15} color="#38bdf8" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handlePackageSelect(pkg.name)}
                className={pkg.featured ? 'btn btn-primary' : 'btn btn-secondary'}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.8rem',
                  fontSize: '0.925rem',
                  fontWeight: 700,
                }}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INQUIRY / CONTACT FORM ================= */}
      <section id="inquiry" style={{ marginBottom: 'clamp(3.5rem, 8vw, 6rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}
          >
            <Send size={15} /> Let's Connect
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '0.75rem' }}>
            Start Your <span className="text-gradient">Project</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Tell me about your idea, timeline, and budget. I'll review your details and respond within 24 hours.
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            padding: 'clamp(1.125rem, 3.5vw, 2.25rem)',
            borderRadius: '1.5rem',
          }}
        >
          <form>
            {/* Step 1: Project Type */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.925rem', fontWeight: 700, marginBottom: '0.65rem' }}>
                1. What type of project are you looking for?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '0.45rem' }}>
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      style={{
                        padding: '0.55rem 0.75rem',
                        borderRadius: '0.65rem',
                        fontSize: 'clamp(0.775rem, 2.5vw, 0.85rem)',
                        fontWeight: isSelected ? 700 : 500,
                        backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                        border: isSelected ? '1px solid #38bdf8' : '1px solid var(--border-color)',
                        color: isSelected ? '#38bdf8' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        textAlign: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Estimated Budget */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.925rem', fontWeight: 700, marginBottom: '0.65rem' }}>
                2. What is your estimated budget?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '0.45rem' }}>
                {BUDGET_RANGES.map((budget) => {
                  const isSelected = selectedBudget === budget;
                  return (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      style={{
                        padding: '0.55rem 0.75rem',
                        borderRadius: '0.65rem',
                        fontSize: 'clamp(0.775rem, 2.5vw, 0.85rem)',
                        fontWeight: isSelected ? 700 : 500,
                        backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                        border: isSelected ? '1px solid #38bdf8' : '1px solid var(--border-color)',
                        color: isSelected ? '#38bdf8' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        textAlign: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {budget}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.925rem', fontWeight: 700, marginBottom: '0.65rem' }}>
                3. Expected timeline or deadline?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))', gap: '0.45rem' }}>
                {TIMELINES.map((time) => {
                  const isSelected = selectedTimeline === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTimeline(time)}
                      style={{
                        padding: '0.55rem 0.75rem',
                        borderRadius: '0.65rem',
                        fontSize: 'clamp(0.775rem, 2.5vw, 0.85rem)',
                        fontWeight: isSelected ? 700 : 500,
                        backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                        border: isSelected ? '1px solid #38bdf8' : '1px solid var(--border-color)',
                        color: isSelected ? '#38bdf8' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        textAlign: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact details */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.65rem',
                    backgroundColor: 'rgba(2, 6, 23, 0.6)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  Email or Telegram Handle
                </label>
                <input
                  type="text"
                  placeholder="e.g. alex@company.com or @alex_tg"
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.65rem',
                    backgroundColor: 'rgba(2, 6, 23, 0.6)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Step 5: Details */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                Project Overview & Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Describe your project, goals, key features, or link to references/designs..."
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.65rem',
                  backgroundColor: 'rgba(2, 6, 23, 0.6)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Submit Action Buttons */}
            <div
              className="freelance-form-actions"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                gap: '0.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <button
                type="button"
                onClick={handleSendTelegram}
                className="btn btn-primary"
                style={{
                  padding: '0.8rem 1.25rem',
                  fontSize: '0.925rem',
                  fontWeight: 700,
                  gap: '0.5rem',
                  backgroundColor: '#0284c7',
                  borderColor: '#38bdf8',
                }}
              >
                <Send size={16} /> Send via Telegram
              </button>

              <button
                type="button"
                onClick={handleSendEmail}
                className="btn btn-secondary"
                style={{
                  padding: '0.8rem 1.25rem',
                  fontSize: '0.925rem',
                  fontWeight: 600,
                  gap: '0.5rem',
                }}
              >
                <Mail size={16} /> Send via Email
              </button>

              <button
                type="button"
                onClick={handleCopyDetails}
                className="btn btn-secondary"
                style={{
                  padding: '0.8rem 1.25rem',
                  fontSize: '0.925rem',
                  fontWeight: 600,
                  gap: '0.5rem',
                }}
              >
                <Copy size={16} /> Copy Inquiry Text
              </button>
            </div>

            {/* Quick Action Contact Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.6rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                paddingTop: '1rem',
              }}
            >
              <a
                href="https://t.me/skdev29"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <Send size={13} color="#38bdf8" /> Telegram: @skdev29
              </a>

              <a
                href="mailto:satyakiran296@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <Mail size={13} color="#38bdf8" /> satyakiran296@gmail.com
              </a>

              <a
                href="https://in.linkedin.com/in/satyakiran29"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <LinkedInIcon size={13} color="#38bdf8" /> LinkedIn
              </a>

              <a
                href="https://github.com/satyakiran29"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <GitHubIcon size={13} color="#38bdf8" /> GitHub
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* ================= FREELANCE FAQ ACCORDION ================= */}
      <section style={{ maxWidth: '820px', margin: '0 auto clamp(2rem, 5vw, 4rem) auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}
          >
            <HelpCircle size={15} /> Clarifications
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.25rem)', marginBottom: '0.5rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Have questions before starting? Here are answers to common inquiries.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel"
                onClick={() => toggleFaq(idx)}
                style={{
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: isOpen ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid var(--border-color)',
                  background: isOpen ? 'rgba(15, 23, 42, 0.9)' : 'var(--glass-bg)',
                  transition: 'border-color 0.25s ease, background 0.25s ease',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    padding: '1.15rem 1.35rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    background: 'transparent',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: isOpen ? 'var(--accent-primary)' : 'var(--text-primary)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: isOpen ? '#0f172a' : 'var(--text-secondary)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease, background 0.25s ease, color 0.25s ease',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={16} />
                  </div>
                </div>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.35rem 1.25rem 1.35rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.925rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingTop: '0.85rem',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
