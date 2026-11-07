import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const FRAME_SIZE = 34;
const LOCK_PADDING = 7;
const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor]';

/* Decides what the context label says for a given element. */
const getLabel = (el) => {
  if (el.dataset && el.dataset.cursor) return el.dataset.cursor;

  const tag = el.tagName.toLowerCase();

  if (tag === 'input' || tag === 'textarea' || tag === 'select') return 'TYPE';

  if (tag === 'a') {
    const href = el.getAttribute('href') || '';
    if (el.hasAttribute('download')) return 'DOWNLOAD';
    if (href.startsWith('mailto:')) return 'EMAIL';
    if (href.startsWith('tel:')) return 'CALL';
    if (href.startsWith('#')) return 'GO';
    if (el.getAttribute('target') === '_blank') return 'OPEN';
    return 'VIEW';
  }

  if (tag === 'button' || el.getAttribute('role') === 'button') return 'CLICK';

  return 'VIEW';
};

const CustomCursor = () => {
  const dotRef = useRef(null);
  const frameRef = useRef(null);
  const labelRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  /* Only run on devices with a real mouse (not phones or tablets). */
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setEnabled(mq.matches);

    const onChange = (e) => setEnabled(e.matches);
    mq.addEventListener('change', onChange);

    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const frame = frameRef.current;
    const label = labelRef.current;

    if (!dot || !frame || !label) return;

    const corners = frame.querySelectorAll('.cursor-corner');
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const speed = reduceMotion ? 0 : 1;

    const accent =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-primary')
        .trim() || '#ff6a2b';
    const neutral = 'rgba(236, 231, 223, 0.75)';

    /* Start hidden and centered on their own origin. */
    gsap.set([dot, frame], {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });
    gsap.set(frame, { width: FRAME_SIZE, height: FRAME_SIZE });
    gsap.set(label, { opacity: 0 });

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.08 * speed, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.08 * speed, ease: 'power3.out' });
    const frameX = gsap.quickTo(frame, 'x', { duration: 0.35 * speed, ease: 'power3.out' });
    const frameY = gsap.quickTo(frame, 'y', { duration: 0.35 * speed, ease: 'power3.out' });
    const frameW = gsap.quickTo(frame, 'width', { duration: 0.35 * speed, ease: 'power3.out' });
    const frameH = gsap.quickTo(frame, 'height', { duration: 0.35 * speed, ease: 'power3.out' });

    let mouseX = 0;
    let mouseY = 0;
    let target = null;
    let shown = false;

    const show = () => {
      if (shown) return;
      shown = true;
      gsap.to([dot, frame], { opacity: 1, duration: 0.25 * speed });
    };

    const hide = () => {
      shown = false;
      gsap.to([dot, frame], { opacity: 0, duration: 0.25 * speed });
    };

    /* Wrap the frame around an element, leaning slightly toward the mouse. */
    const lockTo = (el) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const lean = 0.06;

      frameX(cx + (mouseX - cx) * lean);
      frameY(cy + (mouseY - cy) * lean);
      frameW(rect.width + LOCK_PADDING * 2);
      frameH(rect.height + LOCK_PADDING * 2);
    };

    const release = () => {
      frameW(FRAME_SIZE);
      frameH(FRAME_SIZE);
      frameX(mouseX);
      frameY(mouseY);
    };

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      show();

      dotX(mouseX);
      dotY(mouseY);

      if (target) {
        lockTo(target);
      } else {
        frameX(mouseX);
        frameY(mouseY);
      }
    };

    const handleOver = (e) => {
      const el = e.target.closest ? e.target.closest(INTERACTIVE) : null;

      if (el === target) return;

      target = el;

      if (el) {
        lockTo(el);
        label.textContent = getLabel(el);

        gsap.to(corners, { borderColor: accent, duration: 0.2 * speed });
        gsap.to(dot, { scale: 0.6, duration: 0.2 * speed });
        gsap.to(label, { opacity: 1, duration: 0.2 * speed });
      } else {
        release();

        gsap.to(corners, { borderColor: neutral, duration: 0.2 * speed });
        gsap.to(dot, { scale: 1, duration: 0.2 * speed });
        gsap.to(label, { opacity: 0, duration: 0.15 * speed });
      }
    };

    /* Keep the lock accurate while the page scrolls under a still mouse. */
    const handleScroll = () => {
      if (target) lockTo(target);
    };

    const handleDown = () => {
      gsap.to(frame, { scale: 0.86, duration: 0.12 * speed, ease: 'power2.out' });
    };

    const handleUp = () => {
      gsap.to(frame, { scale: 1, duration: 0.25 * speed, ease: 'back.out(2)' });
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);
    document.documentElement.addEventListener('mouseleave', hide);
    document.documentElement.addEventListener('mouseenter', show);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
      document.documentElement.removeEventListener('mouseleave', hide);
      document.documentElement.removeEventListener('mouseenter', show);

      gsap.killTweensOf([dot, frame, label, ...corners]);
    };
  }, [enabled]);

  if (!enabled) return null;

  const cornerBase = 'cursor-corner absolute w-2 h-2';
  const cornerColor = 'rgba(236, 231, 223, 0.75)';

  return (
    <>
      {/* Precise dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: 'var(--accent-primary, #ff6a2b)' }}
      />

      {/* Reticle frame: four corner brackets */}
      <div
        ref={frameRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <span
          className={`${cornerBase} top-0 left-0 border-t-[1.5px] border-l-[1.5px]`}
          style={{ borderColor: cornerColor }}
        />
        <span
          className={`${cornerBase} top-0 right-0 border-t-[1.5px] border-r-[1.5px]`}
          style={{ borderColor: cornerColor }}
        />
        <span
          className={`${cornerBase} bottom-0 left-0 border-b-[1.5px] border-l-[1.5px]`}
          style={{ borderColor: cornerColor }}
        />
        <span
          className={`${cornerBase} bottom-0 right-0 border-b-[1.5px] border-r-[1.5px]`}
          style={{ borderColor: cornerColor }}
        />

        {/* Context label */}
        <span
          ref={labelRef}
          className="absolute top-full left-full mt-1.5 ml-1.5 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] whitespace-nowrap"
          style={{
            backgroundColor: 'var(--accent-primary, #ff6a2b)',
            color: '#0b0a09',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;