import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Menu, 
  X, 
  ExternalLink, 
  Smartphone, 
  Lock,
  Rocket,
  Globe, 
  Heart, 
  Twitter, 
  Youtube, 
  Github, 
  Disc,
  Coffee,
  Mail,
  MessageSquare,
  Send,
  ArrowLeft,
  CheckCircle,
  Cpu,
  Layers,
  Play,
  Quote, 
  Star,
  BookOpen,
  CreditCard, 
  QrCode,
  Copy, 
  Check, 
  Activity,
  Palette,
  Brush
} from 'lucide-react';

// --- Configuration & Links ---

const LINKS = {
  github: "https://github.com",
  twitter: "https://twitter.com",
  youtube: "https://youtube.com",
  discord: "https://discord.com",
  telegram: "https://telegram.org",
  paypal: "https://paypal.me/",
  upi: "satyakiran29@upi", 
  email: "mailto:satyakiran29@gmail.com", // Updated based on review response
  playStoreDev: "https://play.google.com/store/apps/dev?id=ReyDevStuffs",
};

// --- DATA CONSTANTS ---

const RECENT_SUPPORTERS = [
    { name: "Seonbaeyakuza", amount: "Play Store Review" },
];

const DEV_STATS = {
    nextBuildDate: "2026-01-30", 
    lastBuild: "Dec 27 Alpha bulid", // From "What's New"
    version: "unannounced project",
    overallProgress: 60,
    totalTasks: 150,
    categories: [
        { name: "Widgets Design", completed: 20, total: 30, color: "bg-[#e91e63]" }, 
        { name: "App Support", completed: 15, total: 30, color: "bg-[#4caf50]" },  
        { name: "Code (React/Kotlin)", completed: 20, total: 100, color: "bg-[#4682b4]" }, 
        { name: "Bugs/Issues", completed: 0, total: 0, color: "bg-[#4b0082]" } 
    ]
};

const TEAM_MEMBERS = [
  { 
    name: 'Satyakiran', 
    role: 'Lead Developer & Designer', 
    alias: '(aka Skdev)',
    icon: <Terminal className="w-8 h-8" />, 
    color: 'text-cyan-400',
    bio: 'The sole mind behind skdev and ReyDevStuffs. Architecting the entire ecosystem from backend infrastructure to frontend design and Android customization.',
    socials: {
      github: LINKS.github,
      twitter: LINKS.twitter,
      youtube: LINKS.youtube
    }
  }
];

// Updated with Real Reviews from Play Store
const TESTIMONIALS = [
  {
    id: 1,
    name: "Seonbaeyakuza",
    role: "Verified User (Feb 8)",
    content: "This widget is best in Play Store and it's a game-changer! It's sleek, customizable, and makes app discovery and management a breeze. The developer support is top-notch.",
    rating: 5
  },
  {
    id: 2,
    name: "Gaurav Kumar",
    role: "Long-term User",
    content: "Using it since one year and really like its widgets. And developer thank you for your efforts.",
    rating: 5
  },
  {
    id: 3,
    name: "Nate Westby",
    role: "Verified User",
    content: "Great widget and wall set. Only found 1 locked widget (I hate those). Gonna keep.",
    rating: 4
  }
];

const PROJECTS = [
  {
    id: 'aniset', 
    title: 'Aniset',
    type: 'Released',
    tag: 'Anime Customization',
    description: 'Transform your Android Home Screen with Anime Kwgt Widgets & Klwp. Rated 4.8 Stars.',
    longDescription: 'Transform Your Android Home Screen with Aniset - Anime Kwgt Widgets & Klwp! Elevate your device customization to a whole new level with Aniset - Anime Kwgt & Klwp Widgets! This collection of stunning KWGT and KLWP widgets brings the vibrant and dynamic world of anime to your Android home screen. Immerse yourself in the captivating aesthetics of your favorite anime characters and themes, making your device a true anime wonderland.   Note: While initially launched on the Play Store, Aniset has transitioned to UPI-based direct sales via DMs. This change was made to prevent refund abuse and ensure fair access for all users.',
    features: [
      '9 New Widgets Added (v4.8)',
      'Android 16 Support',
      'Curated 4K Wallpaper Section',
      'Seamless KWGT & KLWP Integration'
    ],
    imagePlaceholder: 'bg-gradient-to-br from-pink-600 to-purple-100',
    banner: 'https://play-lh.googleusercontent.com/X5-j_gJq-zNoshCO96DwKVjh6Y6XNIOWFtFlip3EtWLJ-W5gctNo_Y-Qg1dk-98x00s=w5120-h2880-rw', // Anime/Abstract vibe
    icon: <Brush className="w-12 h-12 text-pink-100" />,
    action: 'Open',
    active: true,
    url: 'https://play.google.com/store/apps/details?id=com.reydevstuffs.aniset',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.reydevstuffs.aniset',
    githubUrl: null,
    // extraLink: {
    //     label: "More by ReyDevStuffs",
    //     url: LINKS.playStoreDev
    // }
  },
  {
    id: 'gwalls', 
    title: 'Gwalls',
    type: 'Released',
    tag: 'Wallpaper Utility',
    description: 'A premium wallpaper application focusing on high-quality, curated aesthetics for Android devices.',
    longDescription: 'Gwalls offers a hand-picked selection of wallpapers designed to make your home screen pop. With a focus on quality over quantity, every image is optimized for high-DPI displays. Features cloud-based syncing and daily updates.',
    features: [
      'High-Res Cloud Gallery',
      'Daily Updates',
      'Material You Design',
      'Simple, Ad-free Experience'
    ],
    imagePlaceholder: 'bg-gradient-to-br from-green-600 to-teal-900',
    banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop',
    icon: <Palette className="w-12 h-12 text-green-400" />,
    action: 'View App',
    active: true,
    url: LINKS.playStoreDev, // General dev link as fallback
    playStoreUrl: LINKS.playStoreDev,
    githubUrl: null,
    extraLink: null
  },

  {
    id: 'unannounced',
    title: 'Unannounced Title',
    type: 'Top Secret',
    tag: 'Unknown',
    description: 'We are working on something entirely new behind the scenes. No details are available at this time.',
    longDescription: 'This project is currently classified. Access is restricted to Level 4 clearance personnel. Stay tuned for the official reveal trailer coming later this year.',
    features: ['[REDACTED]', '[REDACTED]', '[REDACTED]'],
    imagePlaceholder: 'bg-gray-950',
    banner: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop', 
    icon: <Lock className="w-12 h-12 text-gray-800" />,
    action: 'Classified',
    active: false,
    url: '#',
    playStoreUrl: null,
    githubUrl: null,
    extraLink: null
  }
];

// --- Sub-Components ---

const Navigation = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', action: () => { onNavigate('home'); setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { name: 'Status', action: () => onNavigate('status') }, 
    { name: 'Donate', action: () => onNavigate('donate') }, 
    { name: 'Community', action: () => { onNavigate('home'); setTimeout(() => document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg border-b border-gray-800' : 'bg-black/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => { onNavigate('home'); window.scrollTo(0,0); }}>
            <div className="relative">
              <Terminal className="w-8 h-8 text-cyan-500 mr-3 relative z-10" />
              <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <span className="font-bold text-2xl tracking-wider text-white font-mono">
              sk<span className="text-cyan-500">dev</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => {
                      setIsOpen(false);
                      link.action();
                  }}
                  className="text-gray-400 hover:text-cyan-400 hover:bg-gray-900/50 px-3 py-2 rounded-md text-sm font-bold transition-all uppercase tracking-widest bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => {
                    setIsOpen(false);
                    link.action();
                }}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold uppercase tracking-wider w-full text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// --- DEV STATUS PAGE ---
const DevStatus = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const calculateDaysLeft = () => {
        const target = new Date(DEV_STATS.nextBuildDate);
        const today = new Date();
        const diffTime = target - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    };

    const daysLeft = calculateDaysLeft();
    const targetDateFormatted = new Date(DEV_STATS.nextBuildDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return (
        <div className="min-h-screen bg-black pt-24 pb-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <button 
                    onClick={onBack}
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-2 flex items-center justify-center">
                        <Activity className="w-8 h-8 mr-3 text-cyan-500" />
                        Development Status
                    </h1>
                    <p className="text-gray-500 font-mono">Real-time roadmap tracking.</p>
                </div>

                <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-6 shadow-2xl shadow-black/50">
                    
                    <div className="flex justify-between items-end mb-2 text-gray-200 font-bold font-sans">
                        <span className="text-lg">{daysLeft} days until next major build</span>
                        <span className="text-lg text-cyan-400">{targetDateFormatted}</span>
                    </div>

                    <div className="w-full h-4 bg-gray-700 rounded-full mb-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-slate-400 to-slate-200 w-11/12 rounded-full opacity-80"></div>
                    </div>
                    
                    <div className="text-xs text-gray-500 font-mono mb-8">
                        Last build: {DEV_STATS.lastBuild} ({DEV_STATS.version})
                    </div>

                    <div className="flex justify-between items-center mb-2 text-white font-bold text-xl">
                        <span>Overall Progress: {DEV_STATS.overallProgress}%</span>
                        <span>{DEV_STATS.totalTasks} Tasks</span>
                    </div>

                    <div className="space-y-3 border border-gray-600 p-1 rounded bg-[#16213e]/50">
                        {DEV_STATS.categories.map((cat, idx) => {
                            const percent = cat.total > 0 ? Math.round((cat.completed / cat.total) * 100) : 0;
                            const statusLabel = cat.name === "Bugs/Issues" ? (percent === 100 || cat.total === 0 ? "Fixed" : "Pending") : `${percent}%`;

                            return (
                                <div key={idx} className="relative h-10 bg-gray-800/80 rounded overflow-hidden">
                                    <div 
                                        className={`absolute top-0 left-0 h-full ${cat.color} transition-all duration-1000 ease-out`} 
                                        style={{ width: `${percent}%` }}
                                    ></div>
                                    
                                    <div className="absolute inset-0 flex justify-between items-center px-3 text-white font-bold text-sm drop-shadow-md z-10 pointer-events-none" style={{ textShadow: '1px 1px 2px black' }}>
                                        <span className="tracking-wide text-yellow-50">{cat.name}</span>
                                        <span className="font-mono text-white/90">
                                            [{cat.completed}/{cat.total}] {statusLabel}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

// --- DONATIONS PAGE ---
const Donations = ({ onBack }) => {
    const [copied, setCopied] = useState(null);

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <button 
                    onClick={onBack}
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                        Support the <span className="text-cyan-500">Mission</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Every contribution directly funds server costs, asset licensing for Aniset, and the caffeine required to build the future. 
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    
                    {/* PayPal Card */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-[#00457C]/50 transition-colors">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-[#00457C] rounded-full flex items-center justify-center text-white mr-4">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">PayPal</h2>
                        </div>
                        <p className="text-gray-400 mb-8">
                            Secure and easy donation. Supports one-time and recurring contributions.
                        </p>
                        <a 
                            href={LINKS.paypal} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-[#00457C] hover:bg-[#003965] text-white font-bold rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-blue-900/20"
                        >
                            Donate with PayPal <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                    </div>

                    {/* UPI Card */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-colors">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white mr-4">
                                <QrCode className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">UPI / QR</h2>
                        </div>
                        
                        <div className="bg-white p-4 rounded-xl w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                             <img 
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(LINKS.upi)}`} 
                                alt="UPI QR Code" 
                                className="w-full h-full"
                             />
                        </div>

                        <div className="flex items-center bg-black rounded-lg p-3 border border-gray-700">
                            <code className="flex-1 text-cyan-400 font-mono text-sm text-center">{LINKS.upi}</code>
                            <button 
                                onClick={() => handleCopy(LINKS.upi, 'upi')}
                                className="ml-2 text-gray-400 hover:text-white"
                            >
                                {copied === 'upi' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- RECENT SUPPORTERS SECTION --- */}
                <div className="border-t border-gray-900 pt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-4">
                            Hall of <span className="text-cyan-500">Support</span>
                        </h2>
                        <p className="text-gray-500 font-mono">Huge thanks to our recent contributors.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {RECENT_SUPPORTERS.map((donor, index) => (
                            <div key={index} className="p-4 bg-gray-900/30 border border-gray-800 rounded-lg flex items-center hover:bg-gray-900/50 hover:border-cyan-500/20 transition-all duration-300 group">
                                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                    <Heart className="w-5 h-5 text-red-500 fill-current" />
                                </div>
                                <div>
                                    <div className="text-white font-bold font-mono text-sm">{donor.name}</div>
                                    <div className="text-xs text-gray-500">Action: <span className="text-cyan-600">{donor.amount}</span></div>
                                </div>
                            </div>
                        ))}
                        
                        {/* Placeholder for new donor */}
                        <div className="p-4 border border-dashed border-gray-700 rounded-lg flex items-center justify-center opacity-50">
                            <span className="text-gray-500 font-mono text-sm">Your Name Here...</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const Hero = ({ onNavigate }) => (
  <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
    <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800 rounded-full mix-blend-screen filter blur-[100px] opacity-60"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/50 border border-gray-700 text-cyan-400 text-sm font-mono mb-8 backdrop-blur-sm">
        <span className="flex h-2 w-2 relative mr-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Systems Online // Welcome to the Studio
      </div>
      
      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase">
        Innovate. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Build.</span> Deploy.
      </h1>
      
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light">
        The digital project studio of <span className="text-white font-semibold">Satyakiran</span> (SkDev). 
        Crafting immersive applications, widgets, and web experiences.
      </p>
      
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
        <button onClick={() => { document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}} className="group relative px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
          <span className="relative z-10 flex items-center">
            Explore Projects <Rocket className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </span>
        </button>
        <button onClick={() => { document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' })}} className="px-8 py-4 border border-gray-700 text-gray-300 font-bold rounded-lg hover:bg-gray-900 hover:border-gray-600 transition-all flex items-center justify-center">
          Join Community
        </button>
      </div>
    </div>
  </header>
);

const ProjectList = ({ onOpenProject }) => (
  <section id="projects" className="py-24 bg-gray-950 border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-800 pb-8">
        <div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Project <span className="text-cyan-500">Log</span></h2>
          <p className="mt-2 text-gray-500 font-mono">Index of active and past developments.</p>
        </div>
        <div className="mt-4 md:mt-0 text-cyan-500 font-mono text-sm">
          {'// SHOWING ALL ENTRIES'}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            
            <div className={`h-48 relative flex items-center justify-center overflow-hidden ${!project.banner ? project.imagePlaceholder : 'bg-gray-900'}`}>
              
              {project.banner ? (
                  <img 
                      src={project.banner} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                  />
              ) : (
                  <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

              <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </div>

              <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur text-xs font-bold text-white uppercase tracking-wider rounded border border-gray-700 z-10">
                {project.type}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="text-xs font-mono text-cyan-500 mb-2">{project.tag}</div>
              <h3 className={`text-2xl font-bold mb-3 ${project.active ? 'text-white' : 'text-gray-600'}`}>
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-900">
                <button 
                  onClick={() => onOpenProject(project)}
                  className={`w-full py-3 rounded font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2
                    ${project.active 
                      ? 'bg-gray-900 text-white hover:bg-cyan-600' 
                      : 'bg-gray-900 text-gray-600 cursor-not-allowed border border-gray-800'
                    }`}
                >
                  {project.active ? (
                    <>
                      {project.action} <ExternalLink className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <Lock className="w-3 h-3" /> {project.action}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
    <section id="testimonials" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-4">Play Store <span className="text-cyan-500">Reviews</span></h2>
           <p className="text-gray-500 font-mono">Feedback from the Aniset community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {TESTIMONIALS.map((item) => (
             <div key={item.id} className="bg-gray-900/50 backdrop-blur border border-gray-800 p-8 rounded-xl relative hover:border-cyan-500/30 transition-colors">
                <Quote className="w-10 h-10 text-cyan-500/20 absolute top-6 right-6" />
                
                <div className="flex text-yellow-500 mb-6">
                   {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                   ))}
                </div>

                <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                    "{item.content}"
                </p>

                <div className="flex items-center">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm mr-4">
                      {item.name.charAt(0)}
                   </div>
                   <div>
                      <div className="text-white font-bold text-sm">{item.name}</div>
                      <div className="text-cyan-500 text-xs font-mono">{item.role}</div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
);

const ProjectDetail = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Studio
        </button>

        {/* Project Header / Banner Area */}
        <div className="relative rounded-2xl overflow-hidden mb-12 border border-gray-800 group">
          <div className={`h-64 md:h-80 relative flex items-center justify-center overflow-hidden`}>
             
             {project.banner ? (
                <img 
                    src={project.banner} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
             ) : (
                <div className={`absolute inset-0 w-full h-full ${project.imagePlaceholder}`}></div>
             )}
             
             <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

             <div className="relative z-10 text-center">
                <div className="inline-flex p-4 rounded-full bg-black/30 backdrop-blur-md border border-white/10 mb-4">
                  {React.cloneElement(project.icon, { className: "w-16 h-16 text-white" })}
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">{project.title}</h1>
             </div>
          </div>
          
          <div className="bg-gray-900 p-6 flex flex-wrap gap-4 border-t border-gray-800 relative z-20">
             <span className="px-3 py-1 bg-black rounded border border-gray-700 text-xs font-mono text-cyan-400 uppercase">
                STATUS: {project.type}
             </span>
             <span className="px-3 py-1 bg-black rounded border border-gray-700 text-xs font-mono text-gray-400 uppercase">
                TYPE: {project.tag}
             </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Layers className="w-6 h-6 text-cyan-500 mr-3" /> 
                Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cpu className="w-6 h-6 text-cyan-500 mr-3" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Actions */}
          <div className="space-y-8">
              <div className="bg-black rounded-xl p-6 border border-gray-800 sticky top-28">
                <h3 className="text-lg font-bold text-white mb-4">Project Actions</h3>
                
                {project.playStoreUrl && (
                    <a 
                      href={project.playStoreUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-[#008744] hover:bg-[#009955] text-white font-bold rounded-lg transition-colors flex items-center justify-center mb-4 shadow-lg shadow-green-900/20"
                    >
                      <Play className="w-4 h-4 mr-2 fill-current" /> Get it on Google Play
                    </a>
                )}

                {project.active ? (
                  <a 
                    href={project.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center mb-4 shadow-lg shadow-cyan-900/20"
                  >
                    Launch / View <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                ) : (
                  <div className="w-full py-4 bg-gray-800 text-gray-500 font-bold rounded-lg flex items-center justify-center mb-4 cursor-not-allowed border border-gray-700">
                    <Lock className="w-4 h-4 mr-2" /> Access Restricted
                  </div>
                )}
                
                {project.extraLink && (
                    <a 
                        href={project.extraLink.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center mb-4 shadow-lg shadow-indigo-900/20"
                    >
                        <BookOpen className="w-4 h-4 mr-2" /> {project.extraLink.label}
                    </a>
                )}
                
                {project.githubUrl && (
                    <a 
                        href={project.githubUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors flex items-center justify-center border border-gray-700"
                    >
                        <Github className="w-4 h-4 mr-2" /> View Source
                    </a>
                )}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const Support = ({ onNavigate }) => (
  <section id="support" className="py-20 bg-black relative">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black"></div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-cyan-900/30 shadow-2xl">
        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 text-cyan-400">
          <Coffee className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Fuel the Projects</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          skdev (ReyDevStuffs) is an independent project studio. Your support directly funds server costs, assets, and coffee required to keep building updates for Aniset and future titles.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={LINKS.upi} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-500 transition-colors shadow-lg flex items-center justify-center gap-2">
            <QrCode className="w-5 h-5 fill-current" /> Donate via UPI
          </a>
          <button 
            onClick={() => onNavigate('donate')}
            className="px-8 py-3 bg-[#00457C] text-white font-bold rounded-lg hover:bg-[#003965] transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <CreditCard className="w-5 h-5" /> View All Methods
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Studio = () => (
  <section id="studio" className="py-24 bg-gray-950 border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-white sm:text-4xl uppercase tracking-widest">The <span className="text-cyan-500">Creator</span></h2>
        <p className="mt-4 text-gray-500 font-mono">One mind. Infinite Code.</p>
      </div>
      <div className="max-w-xl mx-auto">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.name} className="bg-black rounded-xl p-8 text-center border border-gray-800 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
            <div className={`w-32 h-32 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-6 ${member.color} ring-4 ring-gray-900 ring-offset-2 ring-offset-gray-800`}>
              {member.icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
            <p className="text-cyan-400 font-mono text-sm mb-4">{member.alias}</p>
            <div className="inline-block px-3 py-1 bg-gray-900 rounded text-xs font-mono text-cyan-400 mb-6 border border-gray-800">
              {member.role}
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
                {member.bio}
            </p>
            <div className="flex justify-center space-x-6">
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110"><Github className="w-6 h-6" /></a>
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1DA1F2] transition-colors transform hover:scale-110"><Twitter className="w-6 h-6" /></a>
                <a href={member.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FF0000] transition-colors transform hover:scale-110"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Feedback = () => (
  <section id="feedback" className="py-24 bg-gray-900 border-t border-gray-800">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-6">Join the <span className="text-cyan-500">Hub</span></h2>
      <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          Connect with the developer, get instant updates on new projects like Aniset, <br className="hidden md:block"/>and become part of the ecosystem.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-cyan-400 mb-6">
                  <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">For business inquiries, bug reports, and confidential matters.</p>
              <a href={LINKS.email} className="px-6 py-3 bg-gray-900 text-cyan-400 rounded-lg hover:bg-cyan-900/30 transition-colors font-mono font-bold w-full">
                  satyakiran29@gmail.com
              </a>
          </div>
          <div className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-cyan-400 mb-6">
                  <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Channels</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">Chat with us and other users on your preferred platform.</p>
              <div className="flex flex-col space-y-3 w-full">
                  <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg transition-colors font-bold shadow-lg shadow-indigo-900/20">
                      <Disc className="w-5 h-5 mr-2" /> Join Discord Server
                  </a>
                  <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-6 py-3 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-lg transition-colors font-bold shadow-lg shadow-sky-900/20">
                      <Send className="w-5 h-5 mr-2" /> Join Telegram Group
                  </a>
              </div>
          </div>
      </div>
    </div>
  </section>
);

const Footer = ({ onNavigate }) => (
  <footer id="footer" className="bg-black border-t border-gray-900 pt-16 pb-8 text-gray-500 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-6 text-white">
            <Terminal className="w-6 h-6 text-cyan-500 mr-2" />
            <span className="font-bold text-2xl tracking-wider font-mono">skdev</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-gray-400">
            A digital project studio dedicated to building high-quality web and mobile experiences.
          </p>
          <div className="mt-4 text-sm text-cyan-400 font-mono">
            <Mail className="w-4 h-4 inline mr-2" /> satyakiran29@gmail.com
          </div>
          <div className="mt-6 flex space-x-4">
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
             <span className="text-xs font-mono text-green-500">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Studio</h4>
          <ul className="space-y-4 text-sm">
            <li><button className="bg-transparent border-none cursor-pointer text-gray-500 hover:text-cyan-400 transition-colors text-left p-0">About</button></li>
            <li><button className="bg-transparent border-none cursor-pointer text-gray-500 hover:text-cyan-400 transition-colors text-left p-0">Assets</button></li>
            <li><button className="bg-transparent border-none cursor-pointer text-gray-500 hover:text-cyan-400 transition-colors text-left p-0">Changelog</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Community</h4>
          <ul className="space-y-4 text-sm">
            <li><a href={LINKS.playStoreDev} target="_blank" rel="noopener noreferrer" className="bg-transparent border-none cursor-pointer text-gray-500 hover:text-cyan-400 transition-colors flex items-center p-0"><Play className="w-4 h-4 mr-2" /> Play Store</a></li>
            <li><a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="bg-transparent border-none cursor-pointer text-gray-500 hover:text-cyan-400 transition-colors flex items-center p-0"><Disc className="w-4 h-4 mr-2" /> Discord</a></li>
            <li><a href={LINKS.twitter} target="_blank" rel="noopener noreferrer" className="bg-transparent border-none cursor-pointer text-gray-500 hover:text-cyan-400 transition-colors flex items-center p-0"><Twitter className="w-4 h-4 mr-2" /> Twitter</a></li>
            <li>
                <button onClick={() => onNavigate('donate')} className="bg-transparent border-none cursor-pointer text-gray-500 hover:text-cyan-400 transition-colors flex items-center p-0">
                    <CreditCard className="w-4 h-4 mr-2" /> Donate
                </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>© 2025 skdev Studio (SkDev). All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-mono">DESIGNED BY SATYAKIRAN</p>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [view, setView] = useState('home'); // 'home' | 'project' | 'donate' | 'status'

  // 1. Check URL on Load (Deep Linking)
  useEffect(() => {
    const path = window.location.pathname;
    
    if (path.startsWith('/project/')) {
       const projectId = path.split('/')[2];
       const foundProject = PROJECTS.find(p => p.id === projectId);
       if (foundProject) {
           setActiveProject(foundProject);
           setView('project');
       }
    } else if (path === '/donate') {
        setView('donate');
    } else if (path === '/status') {
        setView('status');
    }

    // 2. Handle Browser Back/Forward Buttons
    const handlePopState = () => {
       const currentPath = window.location.pathname;
       if (currentPath === '/' || currentPath === '') {
          setActiveProject(null);
          setView('home');
       } else if (currentPath.startsWith('/project/')) {
          const pid = currentPath.split('/')[2];
          const found = PROJECTS.find(p => p.id === pid);
          if (found) {
             setActiveProject(found);
             setView('project');
          }
       } else if (currentPath === '/donate') {
           setView('donate');
           setActiveProject(null);
       } else if (currentPath === '/status') {
           setView('status');
           setActiveProject(null);
       }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenProject = (project) => {
    window.history.pushState({}, '', `/project/${project.id}`);
    setActiveProject(project);
    setView('project');
  };

  const handleNavigate = (destination) => {
      if (destination === 'donate') {
          window.history.pushState({}, '', '/donate');
          setView('donate');
          setActiveProject(null);
      } else if (destination === 'status') {
          window.history.pushState({}, '', '/status');
          setView('status');
          setActiveProject(null);
      } else if (destination === 'home') {
          window.history.pushState({}, '', '/');
          setView('home');
          setActiveProject(null);
      }
  };

  return (
    <div className="bg-black text-gray-100 font-sans antialiased selection:bg-cyan-500 selection:text-white scroll-smooth">
      <Navigation onNavigate={handleNavigate} currentView={view} />
      
      {view === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <ProjectList onOpenProject={handleOpenProject} />
          <Testimonials />
          <Support onNavigate={handleNavigate} />
          <Studio />
          <Feedback />
        </>
      )}

      {view === 'project' && (
        <ProjectDetail project={activeProject} onBack={() => handleNavigate('home')} />
      )}

      {view === 'status' && (
        <DevStatus onBack={() => handleNavigate('home')} />
      )}

      {view === 'donate' && (
        <Donations onBack={() => handleNavigate('home')} />
      )}
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
