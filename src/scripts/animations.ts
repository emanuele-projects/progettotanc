import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Sistema di reveal attribute-driven ([data-reveal]) + contatori
 * ([data-countup]) — pattern "waypoint" del sito di riferimento.
 * Senza JS o con reduced-motion tutto resta visibile e statico.
 */
export function initAnimations(): void {
  // Stato "scrolled" dell'header (vanilla: economico e sempre attivo)
  const hdr = document.querySelector('[data-header]');
  const onScroll = () => hdr?.classList.toggle('scrolled', window.scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Con reduced-motion il CSS mostra già tutto: niente animazioni
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 86%',
    once: true,
    onEnter: (els) =>
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.08,
        overwrite: true,
      }),
  });

  // Contatori: i numeri dell'hero salgono fino al valore reale
  document.querySelectorAll<HTMLElement>('[data-countup]').forEach((el) => {
    const target = parseInt(el.dataset.countup ?? '0', 10);
    const suffix = el.dataset.suffix ?? '';
    const state = { v: 0 };
    gsap.to(state, {
      v: target,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => { el.textContent = `${Math.round(state.v)}${suffix}`; },
    });
  });

  // Gli elementi già in viewport al load (hero) entrano subito
  ScrollTrigger.refresh();
}
