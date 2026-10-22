import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import BrandMark from './BrandMark';
import SoundToggle from '../experience/SoundToggle';
import { playSound } from '../experience/sound';

const links = [['/apps', 'Work'], ['/roadmap', 'Process'], ['/freelance', 'Let’s talk']];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const location = useLocation();
  const menu = useRef(null);
  const trigger = useRef(null);
  const clicks = useRef({ count: 0, time: 0 });
  useEffect(() => {
    setHeaderHidden(false);
  }, [location.pathname]);
  useEffect(() => {
    let previousY = window.scrollY;
    let frame = 0;
    setHeaderHidden(!open && previousY > 80);
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const headerHasFocus = document.querySelector('.studio-header')?.contains(document.activeElement);
        if (open || currentY < 60 || headerHasFocus) setHeaderHidden(false);
        else if (currentY > previousY + 4) setHeaderHidden(true);
        else if (currentY < previousY - 4) setHeaderHidden(false);
        previousY = currentY;
        frame = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); }
      if (event.key === 'Tab') {
        const items = [...menu.current.querySelectorAll('a, button')];
        const first = trigger.current;
        const last = items.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKey); };
  }, [open]);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('popstate', close);
    return () => window.removeEventListener('popstate', close);
  }, []);
  const logoClick = (event) => {
    setOpen(false);
    const now = Date.now();
    clicks.current.count = now - clicks.current.time < 1500 ? clicks.current.count + 1 : 1;
    clicks.current.time = now;
    if (clicks.current.count >= 5) { event.preventDefault(); window.dispatchEvent(new CustomEvent('waku-waku-trigger')); clicks.current.count = 0; }
  };
  const close = () => { setOpen(false); playSound('tap'); };
  return <>
    <a className="studio-skip" href="#main-content">Skip to content</a>
      <header className={`studio-header ${location.pathname === '/' ? 'studio-header--home' : ''} ${headerHidden && !open ? 'is-hidden' : ''}`} inert={headerHidden && !open}>
      <NavLink className="studio-brand" to="/" onClick={logoClick} aria-label="SKDev home"><BrandMark className="studio-brand__logo" />skdev<span className="studio-brand__registered">®</span></NavLink>
      <span className="studio-header__note">INDEPENDENT BY DESIGN.</span>
      <nav className="studio-header__nav" aria-label="Main navigation">{links.map(([to, name]) => <NavLink key={to} to={to} onClick={close} className={({ isActive }) => isActive ? 'is-active' : ''}>{name}{to === '/freelance' && <ArrowUpRight size={16} />}</NavLink>)}</nav>
      <SoundToggle />
      <button ref={trigger} className="studio-menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="studio-menu" onClick={() => { setOpen((value) => !value); playSound('tap'); }}>{open ? <X size={21} /> : <Menu size={21} />}</button>
    </header>
    {open && <nav id="studio-menu" className="studio-menu" aria-label="Additional navigation" ref={menu}><p>TAKE A LOOK AROUND</p>{[['/', 'Home'], ...links, ['/faq', 'Questions'], ['/donate', 'Support']].map(([to, name], index) => <NavLink key={to} to={to} onClick={close}><span>0{index + 1}</span>{name}<ArrowUpRight size={26} /></NavLink>)}<a className="studio-menu__email" href="mailto:satyakiran296@gmail.com" onClick={close}>satyakiran296@gmail.com</a></nav>}
  </>;
}
