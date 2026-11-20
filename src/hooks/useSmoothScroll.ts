import Lenis from 'lenis';
import { useEffect } from 'react';

/** Instância global, usada para pausar a rolagem com o modal aberto e para navegar por âncoras. */
export let lenis: Lenis | null = null;

export function scrollToHash(hash: string): void {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;
  if (lenis) lenis.scrollTo(target, { offset: -24, duration: 1.4 });
  else target.scrollIntoView({ behavior: 'smooth' });
}

/** Rolagem suave (Lenis) e navegação por âncoras. Desligada com prefers-reduced-motion. */
export function useSmoothScroll(): void {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      let frame = 0;
      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      const onClick = (e: MouseEvent) => {
        const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
        if (!a) return;
        const hash = a.getAttribute('href');
        if (!hash || hash === '#') return;
        e.preventDefault();
        scrollToHash(hash);
        history.replaceState(null, '', hash);
      };
      document.addEventListener('click', onClick);

      return () => {
        cancelAnimationFrame(frame);
        document.removeEventListener('click', onClick);
        lenis?.destroy();
        lenis = null;
      };
    }
  }, []);
}
