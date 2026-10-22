import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react';
import { playSound } from './sound';

const EMAIL = 'satyakiran296@gmail.com';
export default function ContactExperience({ page = false }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef(null);
  useEffect(() => () => clearTimeout(resetTimer.current), []);
  const move = (event) => {
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--contact-x', `${((event.clientX - rect.left) / rect.width - 0.5) * 22}px`);
    event.currentTarget.style.setProperty('--contact-y', `${((event.clientY - rect.top) / rect.height - 0.5) * 22}px`);
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); clearTimeout(resetTimer.current); resetTimer.current = setTimeout(() => setCopied(false), 2500); playSound('tap'); } catch { setOpen(true); }
  };
  const Heading = page ? 'h1' : 'h2';
  return <section className={`contact-experience ${page ? 'contact-experience--page' : ''}`} onPointerMove={move} onPointerLeave={(event) => { event.currentTarget.style.setProperty('--contact-x','0px'); event.currentTarget.style.setProperty('--contact-y','0px'); }}>
    <div className="contact-experience__top"><span><i /> GOOD CONVERSATIONS START GOOD THINGS.</span><span>LET’S CONNECT THE DOTS.</span></div>
    <div className="contact-experience__body"><div><Heading>{page ? <>Let’s make<br />something <em>matter.</em></> : <>Have a spark?<br /><em>Let’s talk.</em></>}</Heading><p>Apps, websites, or that idea<br />you can’t stop thinking about.</p>{page ? <a className="studio-button studio-button--lime" href="#inquiry">Tell me about it <ArrowUpRight size={20} /></a> : <NavLink className="studio-button studio-button--lime" to="/freelance">Start a conversation <ArrowUpRight size={20} /></NavLink>}</div><div className="contact-universe"><div className="contact-universe__rings" aria-hidden="true"><i /><i /><i /><b /><b /></div><button className="contact-universe__core" type="button" aria-expanded={open} aria-controls={page ? 'contact-page-methods' : 'footer-contact-methods'} onClick={() => { setOpen((value) => !value); playSound('shift'); }} data-cursor="Hello"><span>{open ? 'NICE TO MEET YOU' : 'SAY HELLO'}</span><ArrowUpRight size={60} /><span>{open ? 'PICK YOUR WAY BELOW' : 'A LITTLE CLICK. A BIG POSSIBILITY.'}</span></button></div></div>
    <div className={`contact-methods ${open ? 'is-open' : ''}`} id={page ? 'contact-page-methods' : 'footer-contact-methods'} inert={!open}><a href={`mailto:${EMAIL}`}><Mail size={18} /><span>Email me<small>{EMAIL}</small></span><ArrowUpRight size={18} /></a><a href="https://t.me/skdev1" target="_blank" rel="noreferrer"><Send size={18} /><span>Find me on Telegram<small>Say hello to @skdev1</small></span><ArrowUpRight size={18} /></a><button type="button" onClick={copy}>{copied ? <Check size={18} /> : <Copy size={18} />}<span>{copied ? 'Email copied' : 'Copy email address'}<small>{copied ? 'Ready when you are.' : 'Keep it for later.'}</small></span></button></div>
    <div className="contact-experience__baseline"><span>SMALL STUDIO. DIRECT CONVERSATION.</span><span>LET’S MAKE SOMETHING WORTH EXPLORING.</span></div>
  </section>;
}
