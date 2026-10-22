import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

const GITHUB_URL = 'https://github.com/Qbitarman';
const TELEGRAM_URL = 'https://t.me/Arman_0G';

function GitHubIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function CreatorCredit() {
  const credit = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.3 });
    observer.observe(credit.current);
    return () => observer.disconnect();
  }, []);

  return <div className={`creator-credit ${visible ? 'is-visible' : ''}`} ref={credit}>
    <div className="creator-credit__signature">
      <p>WEBSITE CREATED BY</p>
      <a className="creator-credit__name" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="Arman, website creator on GitHub" data-cursor="Hello">
        <span className="creator-credit__letters" aria-hidden="true">{[...'Arman'].map((letter, index) => <span className="creator-credit__letter" key={index} style={{ '--letter-index': index }}><span>{letter}</span></span>)}</span>
      </a>
    </div>
    <div className="creator-credit__details">
      <div className="creator-credit__links">
        <a className="creator-credit__link" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="Arman on GitHub, Qbitarman">
          <span className="creator-credit__link-icon"><GitHubIcon size={10} /></span>
          <span>GitHub</span>
          <ArrowUpRight className="creator-credit__link-arrow" size={11} aria-hidden="true" />
        </a>
        <a className="creator-credit__link" href={TELEGRAM_URL} target="_blank" rel="noreferrer" aria-label="Message Arman on Telegram, @Arman_0G">
          <span className="creator-credit__link-icon"><Send size={9} aria-hidden="true" /></span>
          <span>@Arman_0G</span>
          <ArrowUpRight className="creator-credit__link-arrow" size={11} aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>;
}
