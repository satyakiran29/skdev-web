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
  ChevronDown
} from 'lucide-react';
import SEO from '../components/SEO';
import skdevbanner from '../assets/skdev-banner.webp';
import { useToast } from '../context/ToastContext';

const GitHubIcon = ({ size = 14, color = '#38bdf8' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 14, color = '#38bdf8' }) => (
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
    id: 'web',
    icon: <Code size={20} />,
    shortTitle: 'Full-Stack Web',
    title: 'Full-Stack Web Development',
    tagline: 'Modern, ultra-fast web apps engineered with React, Node, and scalable databases.',
    desc: 'Custom, ultra-fast, and responsive web applications built with modern frontend frameworks and robust backend architectures.',
    deliverables: [
      'Single Page Apps (SPA) & SaaS Dashboards',
      'RESTful API & GraphQL integrations',
      'Database design (MongoDB, SQLite, MySQL)',
      'Vite & React performance optimization',
      'Vercel, Cloudflare, and custom deployment',
    ],
    tags: ['React.js', 'Vite', 'Node.js', 'Express', 'Django', 'MongoDB', 'Tailwind / CSS'],
    formType: 'Full-Stack Web App',
  },
  {
    id: 'android',
    icon: <Smartphone size={20} />,
    shortTitle: 'Android Apps',
    title: 'Android App Development',
    tagline: 'High-performance native Android apps, custom widgets, and Play Store publishing.',
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
    formType: 'Native Android App',
  },
  {
    id: 'design',
    icon: <Palette size={20} />,
    shortTitle: 'UI/UX & Design',
    title: 'UI/UX & Product Design',
    tagline: 'User-centric interfaces, design systems, and clickable Figma prototypes.',
    desc: 'Modern, aesthetic, and user-centric interfaces crafted with meticulous attention to detail, typography, and micro-interactions.',
    deliverables: [
      'High-fidelity Figma wireframes & mockups',
      'Interactive, clickable prototypes',
      'Component design systems & tokens',
      'Mobile-first responsive layouts',
      'Dark mode & glassmorphism aesthetics',
    ],
    tags: ['Figma', 'Prototyping', 'Design Systems', 'Micro-Animations', 'Responsive'],
    formType: 'UI/UX & Figma Design',
  },
  {
    id: 'backend',
    icon: <Server size={20} />,
    shortTitle: 'Backend & APIs',
    title: 'Backend, APIs & Automation',
    tagline: 'Secure server logic, database design, REST APIs, and automated pipelines.',
    desc: 'Reliable server-side logic, secure authentication workflows, automated pipelines, and seamless third-party integrations.',
    deliverables: [
      'RESTful API design with Express / Django',
      'n8n automated workflow pipelines',
      'Authentication & authorization (JWT, OAuth)',
      'Database modeling & indexing (MongoDB, SQL)',
      'Serverless functions & webhook handling',
    ],
    tags: ['Node.js', 'Express', 'Python / Django', 'n8n', 'REST APIs', 'JWT'],
    formType: 'Consultation / Other',
  },
];

const PROVEN_APPS_DATA = [
  {
    id: 'anify',
    title: 'Anify - Ultimate Personalization',
    shortName: 'Anify (Android)',
    platform: 'Android App (Google Play Store)',
    badge: 'Published on Play Store',
    tagline: 'Native Android personalization app with custom widgets and wallpapers.',
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
    id: 'aniset',
    title: 'Aniset - Anime KWGT & KLWP',
    shortName: 'Aniset (KWGT)',
    platform: 'Android App (Google Play Store)',
    badge: 'Published on Play Store',
    tagline: 'Premium paid Android customization app with complex widget presets.',
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
    id: 'mernshop',
    title: 'MernShop - Full-Stack eCommerce',
    shortName: 'MernShop (Web)',
    platform: 'Full-Stack Web App',
    badge: 'Production App',
    tagline: 'Complete eCommerce solution with cart, PayPal, and admin dashboard.',
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
    id: 'skdevshowcase',
    title: 'SkDev Android Apps Showcase',
    shortName: 'SkDev Showcase',
    platform: 'Web App & Portfolio',
    badge: 'Live Production',
    tagline: 'Official high-performance web showcase for all SKDev Android products.',
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
    id: 'mvp',
    name: 'MVP Launchpad',
    scope: 'Best for Startups & Quick Launches',
    duration: '2–4 Weeks Delivery',
    desc: 'Turn your idea into a functioning, market-ready MVP in 2–4 weeks with essential features and rock-solid architecture.',
    features: [
      'Core feature implementation & flows',
      'Responsive web or native Android app',
      'Authentication & database setup',
      'Deployment & domain configuration',
      '2 weeks post-launch bug support',
    ],
    buttonText: 'Choose MVP Launchpad',
    featured: false,
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Custom App',
    scope: 'Comprehensive End-to-End Build',
    duration: '4–8 Weeks Delivery',
    desc: 'A complete, scalable product built from scratch with custom Figma design, robust backend, and third-party integrations.',
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
    id: 'retainer',
    name: 'Retainer & Support',
    scope: 'Ongoing Feature Rollouts & Maintenance',
    duration: 'Monthly Commitment',
    desc: 'Dedicated monthly engineering hours for continuous feature development, performance tuning, and rapid bug fixes.',
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
    shortTitle: 'Discovery',
    tagline: 'Understanding your goals & technical feasibility',
    desc: 'We discuss your vision, define core features, evaluate technical feasibility, establish the project timeline, and agree on clear milestones.',
    outputs: ['Feature specifications', 'Technical stack selection', 'Milestone & cost breakdown'],
  },
  {
    number: '02',
    title: 'Design & Prototype',
    shortTitle: 'Design',
    tagline: 'Visual identity & clickable mockups',
    desc: 'I create wireframes and interactive prototypes in Figma, establishing the visual identity, design tokens, and smooth user flows.',
    outputs: ['Figma design system', 'Interactive prototype', 'UI asset preparation'],
  },
  {
    number: '03',
    title: 'Agile Development',
    shortTitle: 'Development',
    tagline: 'Iterative sprints & regular demos',
    desc: 'I build your application in focused sprint cycles, providing regular demo links or APK builds for continuous feedback and transparent progress.',
    outputs: ['Clean, modular code repository', 'Weekly demo builds / APKs', 'API integrations & database setup'],
  },
  {
    number: '04',
    title: 'Launch & Support',
    shortTitle: 'Launch',
    tagline: 'Production release & source handover',
    desc: 'Deployment to production (Vercel/Cloudflare or Google Play Store), complete handover of 100% source code, and post-launch warranty.',
    outputs: ['Live deployment / Play Store live', 'Complete source code & IP handover', 'Post-launch warranty & documentation'],
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

  // Interactive Selection States
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [activeAppIdx, setActiveAppIdx] = useState(0);
  const [activePackageIdx, setActivePackageIdx] = useState(1);
  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState(0);

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

  const handleSelectServiceForForm = (service) => {
    setSelectedType(service.formType || 'Full-Stack Web App');
    setProjectDetails((prev) => {
      const prefix = `Interested in: ${service.title}\n`;
      return prev.includes(prefix) ? prev : `${prefix}${prev}`;
    });
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
    toast.success(`Selected "${service.shortTitle}" in project form!`);
  };

  const handlePackageSelect = (packageName) => {
    setProjectDetails((prev) => `I am interested in the ${packageName} package.\n\n${prev}`);
    const inquirySection = document.getElementById('inquiry');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
    toast.success(`Selected "${packageName}" in project form!`);
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

  const currentService = SERVICES_DATA[activeServiceIdx];
  const currentApp = PROVEN_APPS_DATA[activeAppIdx];
  const currentPackage = PACKAGES_DATA[activePackageIdx];
  const currentWorkflow = WORKFLOW_STEPS[activeWorkflowIdx];

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
          margin: '0 auto clamp(2rem, 5vw, 3.5rem) auto',
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
            fontSize: 'clamp(1.75rem, 6vw, 3.75rem)',
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
            fontSize: 'clamp(0.925rem, 2.75vw, 1.15rem)',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
            gap: '0.5rem',
            width: '100%',
            maxWidth: '780px',
            margin: '0 auto 2rem auto',
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

        {/* Quick Section Navigation Bar */}
        <div
          className="scroll-pills-container"
          style={{
            justifyContent: 'center',
            maxWidth: '840px',
            margin: '0 auto',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '1.25rem',
          }}
        >
          <a
            href="#services"
            className="scroll-pill-item interactive-tab-btn"
            style={{ width: 'auto', padding: '0.45rem 0.85rem', fontSize: '0.8rem', borderRadius: '9999px', minHeight: '36px' }}
          >
            <Zap size={13} color="#38bdf8" /> Capabilities
          </a>
          <a
            href="#proven-apps"
            className="scroll-pill-item interactive-tab-btn"
            style={{ width: 'auto', padding: '0.45rem 0.85rem', fontSize: '0.8rem', borderRadius: '9999px', minHeight: '36px' }}
          >
            <Sparkles size={13} color="#38bdf8" /> Apps
          </a>
          <a
            href="#workflow"
            className="scroll-pill-item interactive-tab-btn"
            style={{ width: 'auto', padding: '0.45rem 0.85rem', fontSize: '0.8rem', borderRadius: '9999px', minHeight: '36px' }}
          >
            <Layers size={13} color="#38bdf8" /> Process
          </a>
          <a
            href="#packages"
            className="scroll-pill-item interactive-tab-btn"
            style={{ width: 'auto', padding: '0.45rem 0.85rem', fontSize: '0.8rem', borderRadius: '9999px', minHeight: '36px' }}
          >
            <Award size={13} color="#38bdf8" /> Packages
          </a>
          <a
            href="#inquiry"
            className="scroll-pill-item interactive-tab-btn"
            style={{ width: 'auto', padding: '0.45rem 0.85rem', fontSize: '0.8rem', borderRadius: '9999px', minHeight: '36px' }}
          >
            <Send size={13} color="#38bdf8" /> Inquiry
          </a>
          <a
            href="#faq"
            className="scroll-pill-item interactive-tab-btn"
            style={{ width: 'auto', padding: '0.45rem 0.85rem', fontSize: '0.8rem', borderRadius: '9999px', minHeight: '36px' }}
          >
            <HelpCircle size={13} color="#38bdf8" /> FAQ
          </a>
        </div>
      </section>

      {/* ================= 1. INTERACTIVE SERVICES / CAPABILITIES SECTION ================= */}
      <section id="services" style={{ marginBottom: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
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
            <Zap size={15} /> Interactive Capabilities
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>
            What I Can Build <span className="text-gradient">For You</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
            Select a core domain below to inspect specialized deliverables, tech stacks, and capabilities.
          </p>
        </div>

        {/* Domain Selector Tabs: 4 equal columns on desktop, 2x2 on mobile */}
        <div className="tabs-grid-4" style={{ maxWidth: '840px', margin: '0 auto 1.5rem auto' }}>
          {SERVICES_DATA.map((srv, idx) => {
            const isSelected = activeServiceIdx === idx;
            return (
              <button
                key={srv.id}
                type="button"
                onClick={() => setActiveServiceIdx(idx)}
                className={`interactive-tab-btn ${isSelected ? 'active' : ''}`}
              >
                {srv.icon}
                <span>{srv.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Detail Card */}
        <div
          key={currentService.id}
          className="glass-panel interactive-detail-card"
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            padding: 'clamp(1.25rem, 4vw, 2.25rem)',
            borderRadius: '1.5rem',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '1rem',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(56, 189, 248, 0.3)',
              }}
            >
              {currentService.icon}
            </div>

            <div style={{ flex: 1, minWidth: '220px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.6rem)', fontWeight: 700 }}>
                  {currentService.title}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginTop: '0.35rem', marginBottom: 0 }}>
                {currentService.desc}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div style={{ marginBottom: '1.5rem', backgroundColor: 'rgba(2, 6, 23, 0.4)', padding: '1.15rem', borderRadius: '1rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Included Deliverables & Solutions:
            </span>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '0.6rem' }}>
              {currentService.deliverables.map((item, dIdx) => (
                <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.875rem', color: '#e2e8f0' }}>
                  <Check size={16} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack & Action Button */}
          <div
            className="interactive-detail-actions"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.07)',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', flex: 1, minWidth: '200px' }}>
              {currentService.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '0.4rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => handleSelectServiceForForm(currentService)}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.35rem', fontSize: '0.9rem', fontWeight: 700 }}
            >
              Request {currentService.shortTitle} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= 2. INTERACTIVE PROVEN PRODUCTION APPS ================= */}
      <section id="proven-apps" style={{ marginBottom: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
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
            <Sparkles size={15} /> Track Record & Portfolio
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>
            Proven Production <span className="text-gradient">Applications</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
            Explore live, battle-tested applications I've engineered and published on Google Play and the web.
          </p>
        </div>

        {/* App Selector Tabs: 4 equal columns on desktop, 2x2 on mobile */}
        <div className="tabs-grid-4" style={{ maxWidth: '840px', margin: '0 auto 1.5rem auto' }}>
          {PROVEN_APPS_DATA.map((app, idx) => {
            const isSelected = activeAppIdx === idx;
            return (
              <button
                key={app.id}
                type="button"
                onClick={() => setActiveAppIdx(idx)}
                className={`interactive-tab-btn ${isSelected ? 'active' : ''}`}
              >
                <span>{app.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Active App Detail Card */}
        <div
          key={currentApp.id}
          className="glass-panel interactive-detail-card"
          style={{
            maxWidth: '840px',
            margin: '0 auto 2rem auto',
            padding: 'clamp(1.25rem, 4vw, 2.25rem)',
            borderRadius: '1.5rem',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
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
                {currentApp.platform}
              </span>
              <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.6rem)', fontWeight: 700, marginTop: '0.2rem' }}>
                {currentApp.title}
              </h3>
            </div>
            <span
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: 'var(--accent-primary)',
                fontSize: '0.75rem',
                fontWeight: 600,
              }}
            >
              {currentApp.badge}
            </span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            {currentApp.desc}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: '1.5rem', backgroundColor: 'rgba(2, 6, 23, 0.4)', padding: '1.15rem', borderRadius: '1rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Key Architecture & Achievements:
            </span>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '0.6rem' }}>
              {currentApp.highlights.map((feat, fIdx) => (
                <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.875rem', color: '#e2e8f0' }}>
                  <CheckCircle size={16} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech tags & CTA */}
          <div
            className="interactive-detail-actions"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.07)',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', flex: 1, minWidth: '200px' }}>
              {currentApp.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '0.4rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={currentApp.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{
                padding: '0.75rem 1.35rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {currentApp.linkText} <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Developer Profile Banner */}
        <div
          className="glass-panel freelance-banner-mobile-col"
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            padding: 'clamp(1.15rem, 3vw, 1.6rem)',
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
              <Play size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>Official Google Play Developer Account</h4>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Explore all published Android applications, updates, and releases directly on Google Play.
              </p>
            </div>
          </div>
          <a
            href="https://play.google.com/store/apps/dev?id=9166037782169864125"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.7rem 1.35rem', fontSize: '0.875rem' }}
          >
            <Play size={15} /> Open Play Console Profile
          </a>
        </div>
      </section>

      {/* ================= 3. WHY WORK WITH ME & WORKFLOW ================= */}
      <section id="workflow" style={{ marginBottom: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
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
            <Shield size={15} /> Value & Collaboration
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>
            Why Work With <span className="text-gradient">Me?</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
            Agency-quality execution with the agility, speed, and dedication of a specialized solo engineer.
          </p>
        </div>

        {/* 4 Value Props Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '1rem',
            maxWidth: '840px',
            margin: '0 auto 3rem auto',
          }}
        >
          {[
            {
              title: 'Direct Communication',
              desc: 'Work directly with the engineer building your product—no middlemen or miscommunications.',
              icon: <MessageSquare size={20} />,
              color: 'var(--accent-primary)',
              bg: 'rgba(56, 189, 248, 0.1)',
            },
            {
              title: 'Clean, Scalable Code',
              desc: 'Production-ready code with modular architecture, strict linting, and maintainable patterns.',
              icon: <Code size={20} />,
              color: '#34d399',
              bg: 'rgba(52, 211, 153, 0.1)',
            },
            {
              title: 'End-to-End Ownership',
              desc: 'From initial Figma wireframes to cloud hosting and Google Play approval—I handle it all.',
              icon: <Layers size={20} />,
              color: '#a78bfa',
              bg: 'rgba(167, 139, 250, 0.1)',
            },
            {
              title: 'Reliable Timelines',
              desc: 'Milestone-based delivery with weekly demos so you always know the exact development status.',
              icon: <Clock size={20} />,
              color: '#f472b6',
              bg: 'rgba(244, 114, 182, 0.1)',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.25rem',
                borderRadius: '1.15rem',
                display: 'flex',
                gap: '0.85rem',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
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
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive 4-Step Process */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: 'clamp(1.35rem, 4vw, 1.85rem)', marginBottom: '0.4rem' }}>
            Interactive Workflow Process
          </h3>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Tap each milestone step below to explore how we take your project from discovery to deployment.
          </p>
        </div>

        {/* Workflow Step Tabs: 4 equal columns on desktop, 2x2 on mobile */}
        <div className="tabs-grid-4" style={{ maxWidth: '840px', margin: '0 auto 1.25rem auto' }}>
          {WORKFLOW_STEPS.map((step, idx) => {
            const isSelected = activeWorkflowIdx === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveWorkflowIdx(idx)}
                className={`interactive-tab-btn ${isSelected ? 'active' : ''}`}
                style={{ fontSize: '0.85rem' }}
              >
                <span style={{ fontFamily: 'monospace', fontWeight: 800 }}>{step.number}</span>
                <span>{step.shortTitle || step.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detail Card */}
        <div
          key={currentWorkflow.number}
          className="glass-panel interactive-detail-card"
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            padding: 'clamp(1.25rem, 4vw, 2rem)',
            borderRadius: '1.25rem',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                fontWeight: 900,
                color: 'rgba(56, 189, 248, 0.25)',
                lineHeight: 1,
                fontFamily: 'monospace',
              }}
            >
              {currentWorkflow.number}
            </div>
            <div style={{ flex: 1, minWidth: '220px' }}>
              <h4 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                {currentWorkflow.title}
              </h4>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                {currentWorkflow.tagline}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                {currentWorkflow.desc}
              </p>

              <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.4)', padding: '0.85rem 1.15rem', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
                  Phase Outputs:
                </span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {currentWorkflow.outputs.map((out, oIdx) => (
                    <li key={oIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#cbd5e1' }}>
                      <CheckCircle size={14} color="#38bdf8" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. INTERACTIVE PACKAGES / PRICING SECTION ================= */}
      <section id="packages" style={{ marginBottom: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
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
            <Award size={15} /> Scope & Pricing
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>
            Flexible Engagement <span className="text-gradient">Models</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
            Select a model below to inspect the included scope, deliverables, and estimated delivery timeframe.
          </p>
        </div>

        {/* Package Selector Tabs: 3 equal columns on desktop, 1 column on mobile */}
        <div className="tabs-grid-3" style={{ maxWidth: '840px', margin: '0 auto 1.5rem auto' }}>
          {PACKAGES_DATA.map((pkg, idx) => {
            const isSelected = activePackageIdx === idx;
            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setActivePackageIdx(idx)}
                className={`interactive-tab-btn ${isSelected ? 'active' : ''}`}
                style={{ position: 'relative' }}
              >
                <span>{pkg.name}</span>
                {pkg.featured && (
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      backgroundColor: 'var(--accent-primary)',
                      color: '#020617',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                      marginLeft: '0.25rem',
                    }}
                  >
                    Popular
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Package Detail Card */}
        <div
          key={currentPackage.id}
          className="glass-panel interactive-detail-card"
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            padding: 'clamp(1.35rem, 4vw, 2.5rem)',
            borderRadius: '1.5rem',
            border: currentPackage.featured ? '1.5px solid var(--accent-primary)' : '1px solid rgba(56, 189, 248, 0.35)',
            backgroundColor: currentPackage.featured ? 'rgba(56, 189, 248, 0.05)' : 'var(--glass-bg)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                {currentPackage.scope}
              </div>
              <h3 style={{ fontSize: 'clamp(1.35rem, 3.5vw, 1.85rem)', fontWeight: 800 }}>
                {currentPackage.name}
              </h3>
            </div>
            <span
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: 'var(--accent-primary)',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              {currentPackage.duration}
            </span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            {currentPackage.desc}
          </p>

          {/* Features Checklist */}
          <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.4)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '1.75rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>
              What's Included in {currentPackage.name}:
            </span>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '0.65rem' }}>
              {currentPackage.features.map((feat, fIdx) => (
                <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.875rem', color: '#e2e8f0' }}>
                  <CheckCircle size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => handlePackageSelect(currentPackage.name)}
            className={currentPackage.featured ? 'btn btn-primary' : 'btn btn-secondary'}
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '0.85rem',
              fontSize: '0.95rem',
              fontWeight: 700,
            }}
          >
            {currentPackage.buttonText} <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ================= 5. INTERACTIVE INQUIRY FORM ================= */}
      <section id="inquiry" style={{ marginBottom: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
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
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>
            Start Your <span className="text-gradient">Project</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
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
            {/* Step 1: Project Type (2 cols on mobile) */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.925rem', fontWeight: 700, marginBottom: '0.65rem' }}>
                1. What type of project are you looking for?
              </label>
              <div className="chips-grid-2">
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
                        minHeight: '44px',
                      }}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Estimated Budget (2 cols on mobile) */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.925rem', fontWeight: 700, marginBottom: '0.65rem' }}>
                2. What is your estimated budget?
              </label>
              <div className="chips-grid-2">
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
                        minHeight: '44px',
                      }}
                    >
                      {budget}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline (2 cols on mobile) */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.925rem', fontWeight: 700, marginBottom: '0.65rem' }}>
                3. Expected timeline or deadline?
              </label>
              <div className="chips-grid-2">
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
                        minHeight: '44px',
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

      {/* ================= 6. FREELANCE FAQ ACCORDION ================= */}
      <section id="faq" style={{ maxWidth: '820px', margin: '0 auto clamp(2rem, 5vw, 4rem) auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
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
            Have questions before starting? Tap any question below to inspect the details.
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
