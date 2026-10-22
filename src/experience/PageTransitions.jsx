import { cloneElement, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigationType } from 'react-router-dom';
import ScrollMotion from '../components/ScrollMotion';
import { appsData } from '../data/appsData';
import { playSound } from './sound';

function pageName(path) {
  if (path.startsWith('/apps/')) return appsData.find((app) => path.endsWith(`/${app.id}`))?.name.replace(/\s*\(.+\)/, '') || 'The details.';
  return { '/': 'Stay curious.', '/apps': 'The work.', '/roadmap': 'Taking shape.', '/freelance': 'Let’s talk.', '/faq': 'Good questions.', '/donate': 'A little support.', '/privacy': 'Your privacy.' }[path] || 'Discover.';
}

export default function PageTransitions({ children }) {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [displayNavigation, setDisplayNavigation] = useState(navigationType);
  const [phase, setPhase] = useState('idle');
  const displayed = useRef(location);
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (displayed.current.pathname === location.pathname || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      displayed.current = location;
      setDisplayLocation(location);
      setDisplayNavigation(navigationType);
      setPhase('idle');
      return;
    }
    setTitle(pageName(location.pathname));
    setPhase('covering');
    playSound('navigate');
    const cover = setTimeout(() => {
      displayed.current = location;
      setDisplayLocation(location);
      setDisplayNavigation(navigationType);
      setPhase('revealing');
    }, 620);
    const reveal = setTimeout(() => setPhase('idle'), 1420);
    return () => { clearTimeout(cover); clearTimeout(reveal); };
  }, [location, navigationType]);
  useEffect(() => {
    if (phase === 'revealing' && !document.querySelector('.startup')) {
      document.getElementById('main-content')?.focus({ preventScroll: true });
    }
  }, [displayLocation, phase]);
  return <>
    <ScrollMotion locationOverride={displayLocation} navigationOverride={displayNavigation} />
    <div className={`page-stage ${displayLocation.hash ? 'page-stage--anchored' : ''}`} key={displayLocation.pathname}>{cloneElement(children, { location: displayLocation })}</div>
    {phase !== 'idle' && createPortal(<div className={`page-curtain is-${phase}`} aria-hidden="true"><span>SKDEV® / A LITTLE CHANGE OF SCENE</span><div><i />{title}</div><small>INDEPENDENT BY DESIGN.</small></div>, document.body)}
  </>;
}
