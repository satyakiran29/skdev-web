import { NavLink } from 'react-router-dom';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { playSound } from '../experience/sound';
import ContactExperience from '../experience/ContactExperience';
import CreatorCredit from '../experience/CreatorCredit';

export default function Footer() {
  return <footer className="studio-footer">
    <ContactExperience />
    <div className="studio-footer__links"><div><a href="https://t.me/skdev29" target="_blank" rel="noreferrer">Telegram <ArrowUpRight size={13} /></a><a href="https://www.instagram.com/skdev29/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a><a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer">Google Play <ArrowUpRight size={13} /></a></div><div><NavLink to="/faq">FAQ</NavLink><NavLink to="/donate">Support</NavLink><NavLink to="/privacy">Privacy</NavLink></div></div>
    <CreatorCredit />
    <div className="studio-footer__bottom"><span>© {new Date().getFullYear()} SKDEV</span><span>APPS & IDEAS BY SATYAKIRAN</span><button type="button" onClick={() => { window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); playSound('tap'); }}>BACK TO TOP <ArrowUp size={15} /></button></div>
  </footer>;
}
