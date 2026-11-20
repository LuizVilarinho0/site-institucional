import { useEffect } from 'react';

/**
 * Efeitos ligados à rolagem, num único laço de requestAnimationFrame:
 *
 * - [data-progress="pin"]  --p vai de 0 a 1 enquanto o conteúdo sticky do elemento fica preso na tela.
 * - [data-progress="view"] --p vai de 0 (entrando por baixo) a 1 (centro do elemento no centro da tela).
 * - [data-speed]           parallax vertical (ex.: data-speed="0.15").
 * - .reveal                ganha .is-visible ao entrar na tela (uma vez).
 */
export function useScrollFx(): void {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-visible'));
    }
    root.classList.add('fx');

    const io =
      'IntersectionObserver' in window && !reduce
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  io?.unobserve(entry.target);
                }
              }
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
          )
        : null;
    reveals.forEach((el) => io?.observe(el));

    if (reduce) return () => io?.disconnect();

    const clamp = (v: number) => Math.min(1, Math.max(0, v));
    let frame = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;

      document.querySelectorAll<HTMLElement>('[data-progress]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) return;
        // "pin": 0 → 1 durante a fase em que o conteúdo fixo (sticky) fica parado na tela.
        const p =
          el.dataset.progress === 'pin'
            ? clamp(-r.top / Math.max(1, r.height - vh))
            : clamp((vh - r.top) / (vh / 2 + r.height / 2));
        el.style.setProperty('--p', p.toFixed(4));
      });

      document.querySelectorAll<HTMLElement>('[data-speed]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) return;
        const speed = Number(el.dataset.speed) || 0;
        const offset = (r.top + r.height / 2 - vh / 2) * speed;
        el.style.setProperty('--py', `${(-offset).toFixed(1)}px`);
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      io?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}
