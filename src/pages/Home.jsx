import { Component, Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Gamepad2, MoveUpRight, Pause, Play } from 'lucide-react';
import { appsData } from '../data/appsData';
import SEO from '../components/SEO';
import Startup from '../experience/Startup';
import usePhoneDemo from '../experience/usePhoneDemo';
import PhoneControls, { DownloadLink } from '../experience/PhoneControls';
import SelectedWork from '../experience/SelectedWork';
import ProgressPlayground from '../experience/ProgressPlayground';
import { playSound, setSoundEnabled } from '../experience/sound';
import skdevbanner from '../assets/skdev-banner.webp';

const SnakeGame = lazy(() => import('../experience/SnakeGame'));
const PhoneScene = lazy(() => import('../experience/PhoneScene'));
const projects = appsData.filter((app) => app.id !== 'gwalls');
const projectNotes = {
  anify: { category: 'PERSONALIZATION / PRODUCTIVITY', copy: 'Your screen. Your little universe.', accent: '#d2e9ed' },
  'milky-launcher': { category: 'LAUNCHER / JETPACK COMPOSE', copy: 'Less noise. A little more space.', accent: '#dbd8ee' },
  aniset: { category: 'WIDGETS / VISUAL EXPRESSION', copy: 'A home screen with character.', accent: '#e1e6d4' },
};
function hasEntered() {
  try { return sessionStorage.getItem('skdev-experience-entered') === 'true'; } catch { return false; }
}
function SceneFallback({ onReady }) {
  useEffect(() => { onReady(); }, [onReady]);
  return <div className="scene-unavailable"><span>THE PREVIEW IS TAKING A BREAK.</span><p>You can still explore the app screens below.</p></div>;
}
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <SceneFallback onReady={this.props.onReady} /> : this.props.children; }
}

function Project({ app, index }) {
  const note = projectNotes[app.id];
  const move = (event) => {
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty('--work-rx', `${-y * 5}deg`);
    event.currentTarget.style.setProperty('--work-ry', `${x * 5}deg`);
    event.currentTarget.style.setProperty('--work-x', `${x * 14}px`);
    event.currentTarget.style.setProperty('--work-y', `${y * 14}px`);
  };
  const reset = (event) => {
    ['--work-rx', '--work-ry'].forEach((key) => event.currentTarget.style.setProperty(key, '0deg'));
    ['--work-x', '--work-y'].forEach((key) => event.currentTarget.style.setProperty(key, '0px'));
  };
  return (
    <NavLink to={`/apps/${app.id}`} className={`work-card work-card--${app.id}`} data-reveal data-cursor="View" onPointerMove={move} onPointerLeave={reset} onClick={() => playSound('tap')} style={{ '--work-color': note.accent }}>
      <div className="work-card__stage">
        <div className="work-card__topline"><span>0{index + 1} / SELECTED WORK</span><span>{app.status === 'upcoming' ? 'COMING NOV 19' : 'LIVE PROJECT'}</span></div>
        <div className="work-card__art"><img src={app.screenshot || app.banner} alt={`${app.name.replace(/\s*\(.+\)/, '')} project preview`} loading="lazy" decoding="async" /></div>
        <div className="work-card__floating-icon"><img src={app.icon} alt="" width="52" height="52" loading="lazy" /></div>
        <span className="work-card__open" aria-hidden="true"><ArrowUpRight size={24} /></span>
      </div>
      <div className="work-card__details"><div><p>{note.category}</p><h3>{app.name.replace(/\s*\(.+\)/, '')}<ArrowUpRight size={26} /></h3><span>{note.copy}</span></div><span className="work-card__year">2026</span></div>
    </NavLink>
  );
}

export default function Home() {
  const [entered, setEntered] = useState(hasEntered);
  const [showIntro, setShowIntro] = useState(() => !hasEntered());
  const [exiting, setExiting] = useState(false);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [heroMode, setHeroMode] = useState('phone');
  const phone = usePhoneDemo();
  const exitTimer = useRef(null);
  const onReady = useCallback(() => setReady(true), []);
  useEffect(() => () => clearTimeout(exitTimer.current), []);
  const enter = async (withSound) => {
    if (exiting) return;
    setExiting(true);
    await setSoundEnabled(withSound);
    if (withSound) playSound('enter');
    setEntered(true);
    try { sessionStorage.setItem('skdev-experience-entered', 'true'); } catch { /* Private storage is optional. */ }
    exitTimer.current = setTimeout(() => { setShowIntro(false); setExiting(false); }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 900);
  };
  const replay = () => { setEntered(false); setExiting(false); setShowIntro(true); };
  return (
    <div className="studio-home" data-entered={entered}>
      <SEO title="Independent by design" description="The independent creative world of Satyakiran. Explore thoughtfully crafted apps, digital products, and a little interactive curiosity." keywords="skdev, satyakiran, independent developer, creative portfolio, anify, milky launcher, aniset, digital experiences" canonical="/" image={skdevbanner} jsonLd={{ '@context': 'https://schema.org', '@type': 'Person', name: 'Satyakiran Pampana', alternateName: 'SKDev', url: 'https://skdev.psatyakiran.in', jobTitle: 'Independent App Developer' }} />
      {showIntro && <Startup ready={ready} exiting={exiting} onEnter={enter} />}
      <section className="studio-hero" aria-labelledby="hero-title">
        <div className="studio-hero__meta"><span><i /> INDEPENDENT DEVELOPER & CREATOR</span><span>DESIGN. CODE. A LITTLE CURIOSITY.</span></div>
        <div className="studio-hero__title"><h1 id="hero-title"><span><b>Built to</b></span><span><b>feel</b></span><span><b><em>different.</em><span className="hero-asterisk" aria-hidden="true">✳</span></b></span></h1></div>
        <div className="hero-playground">
          <div className="hero-playground__toolbar"><span>{heroMode === 'phone' ? 'A LITTLE PREVIEW.' : 'TAKE A PLAY BREAK.'}</span><div className="hero-scene-modes" role="group" aria-label="Hero playground"><button type="button" aria-pressed={heroMode === 'phone'} onClick={() => { setHeroMode('phone'); playSound('tap'); }}>App demo</button><button type="button" aria-pressed={heroMode === 'snake'} onClick={() => { setHeroMode('snake'); playSound('tap'); }}><Gamepad2 size={13} /> Play snake</button></div></div>
          <SceneBoundary key={heroMode} onReady={onReady}><Suspense fallback={<div className="scene-loading"><span />Opening the playground…</div>}>{heroMode === 'phone' ? <><div className="studio-hero__scene"><PhoneScene demo={phone.demo} onAction={phone.action} paused={paused || showIntro} onReady={onReady} /></div><div className="hero-playground__dock"><PhoneControls controller={phone} /><div className="hero-playground__utilities"><span>TAP TO EXPLORE · DRAG TO ROTATE</span><div className="scene-controls__tools"><button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Play phone animation' : 'Pause phone animation'} aria-pressed={paused}>{paused ? <Play size={14} /> : <Pause size={14} />}</button><button type="button" onClick={replay} className="replay-intro">Replay intro <ArrowUpRight size={13} /></button></div></div></div></> : <SnakeGame />}</Suspense></SceneBoundary>
        </div>
        <div className="studio-hero__bottom">
          <div className="studio-hero__intro"><p>I’m Satyakiran. I turn curious ideas into<br className="desktop-break" /> thoughtful apps & digital experiences.</p><div className="hero-primary-links">{heroMode === 'phone' ? <><DownloadLink app={phone.app} /><a href="#selected-work" className="studio-text-link">Explore the work <ArrowDownRight size={17} /></a></> : <a href="#selected-work" className="studio-button studio-button--dark" onClick={() => playSound('tap')}>Explore my work <ArrowDownRight size={21} /></a>}</div></div>
        </div>
        <div className="studio-hero__scroll"><span>SCROLL A LITTLE. DISCOVER A LOT.</span><ArrowDown size={15} /><span>PORTFOLIO — 2026</span></div>
      </section>
      <SelectedWork>
        <div className="studio-work__grid">{projects.map((app, index) => <Project app={app} index={index} key={app.id} />)}</div>
      </SelectedWork>
      <section className="studio-about" aria-labelledby="about-title">
        <div className="studio-about__top"><span className="studio-eyebrow">THE PERSON BEHIND THE PIXELS</span></div>
        <div className="studio-about__body"><h2 id="about-title" data-reveal>One developer.<br /><em>Endless curiosity.</em></h2><div data-reveal><p>I’m Satyakiran, the independent maker behind SKDev. I design and build personalization tools, useful apps, and digital experiences with a point of view.</p><p>From the first sketch to the final interaction, I care about the details that make something feel good to use.</p><NavLink className="studio-button studio-button--lime" to="/freelance">Let’s make something <ArrowUpRight size={20} /></NavLink></div></div>
        <div className="studio-about__disciplines"><span>DESIGN WITH INTENTION</span><span>BUILD WITH CARE</span><span>KEEP EXPLORING <MoveUpRight size={16} /></span></div>
      </section>
      <ProgressPlayground />
    </div>
  );
}
