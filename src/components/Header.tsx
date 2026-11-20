import { useEffect, useState } from 'react';
import { company, nav } from '../data/content';
import { lenis } from '../hooks/useSmoothScroll';
import { SplitText } from './ui';

export function Logo() {
  return (
    <span className="logo">
      <svg className="logo-mark" viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="currentColor" />
        <path d="M8 9h3.6l4.4 11.2L20.4 9H24l-6.3 15h-3.4L8 9Z" fill="var(--g900)" />
      </svg>
      <span className="logo-text">{company.short}</span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Esconde o menu ao rolar para baixo e mostra ao rolar para cima.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 240 && y > last + 4);
      if (y < last - 4 || y < 240) setHidden(false);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.classList.toggle('menu-open', open);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className={`nav ${hidden && !open ? 'is-hidden' : ''}`}>
        <a href="#inicio" className="nav-pill nav-logo" aria-label={`${company.name}, início`}>
          <Logo />
        </a>
        <nav className="nav-pill nav-links" aria-label="Seções do site">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-pill nav-cta" href="#contato">
          <span className="roll">
            <span className="roll-a">Fale conosco</span>
            <span className="roll-b" aria-hidden="true">
              Fale conosco
            </span>
          </span>
        </a>
        <button
          type="button"
          className="nav-pill nav-toggle"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <div id="menu" className={`menu ${open ? 'is-open' : ''}`} aria-hidden={!open} data-lenis-prevent>
        <nav aria-label="Menu">
          {[...nav, { href: '#contato', label: 'Contato' }].map((item, i) => (
            <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              <span className="menu-num">{String(i + 1).padStart(3, '0')}</span>
              <SplitText text={item.label} delay={i * 2} />
            </a>
          ))}
        </nav>
        <div className="menu-foot">
          <a href={`mailto:${company.email}`} tabIndex={open ? 0 : -1}>
            {company.email}
          </a>
          <span>{company.city}</span>
        </div>
      </div>
    </>
  );
}
