import { NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return <section className="not-found"><SEO title="Page not found" description="This page has wandered off. Find your way back to SKDev’s apps and creative work." noindex /><span>404 / A SMALL WRONG TURN</span><h1>Lost in curiosity?</h1><p>That page isn’t here. There’s plenty more to explore.</p><div><NavLink to="/" className="studio-button studio-button--dark">Back home <ArrowUpRight size={17} /></NavLink><NavLink to="/apps" className="studio-button">Explore the apps <ArrowUpRight size={17} /></NavLink></div></section>;
}
