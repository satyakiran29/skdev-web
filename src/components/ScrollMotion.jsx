import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollMotion({ locationOverride, navigationOverride }) {
  const routerLocation = useLocation();
  const location = locationOverride || routerLocation;
  const routerNavigationType = useNavigationType();
  const navigationType = navigationOverride || routerNavigationType;
  const positions = useRef(new Map());

  useLayoutEffect(() => {
    const key = location.key;
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    const savedPosition = positions.current.get(key);
    const restoringPosition = navigationType === 'POP' && savedPosition !== undefined;
    const top = restoringPosition ? savedPosition : 0;
    window.scrollTo({ top, behavior: 'instant' });
    const anchorFrame = location.hash && !restoringPosition ? requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: 'instant' });
    }) : null;
    document.documentElement.style.scrollBehavior = previousBehavior;
    const record = () => positions.current.set(key, window.scrollY);
    window.addEventListener('scroll', record, { passive: true });
    return () => {
      if (anchorFrame !== null) cancelAnimationFrame(anchorFrame);
      window.removeEventListener('scroll', record);
      window.history.scrollRestoration = previousRestoration;
    };
  }, [location.key, location.hash, navigationType]);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll('.main-content [data-reveal]')
    );

    targets.forEach((element) => {
      element.classList.add('scroll-reveal');
    });

    const revealAll = () => targets.forEach((element) => element.classList.add('is-visible'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealAll();
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}
