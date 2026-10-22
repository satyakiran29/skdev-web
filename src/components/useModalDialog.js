import { useEffect, useRef } from 'react';

export default function useModalDialog(open, dialog, onClose) {
  const close = useRef(onClose);
  useEffect(() => { close.current = onClose; }, [onClose]);
  useEffect(() => {
    if (!open || !dialog.current) return;
    const previousFocus = document.activeElement;
    const root = document.getElementById('root');
    const previousInert = root.inert;
    const previousOverflow = document.body.style.overflow;
    root.inert = true;
    document.body.style.overflow = 'hidden';
    const element = dialog.current;
    const controls = () => [...element.querySelectorAll('button:not(:disabled), a[href], [tabindex="0"]')];
    (controls()[0] || element).focus({ preventScroll: true });
    const keyDown = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); close.current(); }
      if (event.key !== 'Tab') return;
      const items = controls();
      if (!items.length) { event.preventDefault(); element.focus(); return; }
      if (event.shiftKey && (document.activeElement === items[0] || document.activeElement === element)) { event.preventDefault(); items.at(-1).focus(); }
      else if (!event.shiftKey && document.activeElement === items.at(-1)) { event.preventDefault(); items[0].focus(); }
    };
    document.addEventListener('keydown', keyDown);
    return () => {
      document.removeEventListener('keydown', keyDown);
      root.inert = previousInert;
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [open, dialog]);
}
