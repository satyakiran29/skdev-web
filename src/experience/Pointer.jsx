import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { playSound } from './sound';

export default function Pointer() {
  const cursor = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const element = cursor.current;
    if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let x = -200, y = -200, currentX = -200, currentY = -200, frame;
    const move = (event) => {
      x = event.clientX; y = event.clientY;
      element.classList.add('is-visible');
    };
    const over = (event) => {
      const target = event.target.closest('[data-cursor]');
      element.classList.toggle('is-active', Boolean(target));
      element.textContent = target?.dataset.cursor || '';
      if (event.target.closest('a, button, [data-cursor]')) playSound('hover');
    };
    const leave = () => element.classList.remove('is-visible');
    const tick = () => {
      currentX += (x - currentX) * 0.23;
      currentY += (y - currentY) * 0.23;
      element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', over, { passive: true });
    document.addEventListener('pointerleave', leave);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      document.removeEventListener('pointerleave', leave);
    };
  }, [location.pathname]);
  return <div className="studio-pointer" ref={cursor} aria-hidden="true" />;
}
