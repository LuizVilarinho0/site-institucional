import { useEffect, useState } from 'react';
import { company, nav } from '../data/content';

export function Logo() {
  return (
    <span className="logo">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="28" height="28">
          <rect width="32" height="32" rx="7" fill="currentColor" />
          <path d="M8 9h3.6l4.4 11.2L20.4 9H24l-6.3 15h-3.4L8 9Z" fill="#050505" />
        </svg>
      </span>
      <span className="logo-text">
        <strong>{company.short}</strong>
        <span>{company.suffix}</span>
      </span>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header-inner">
        <a href="#inicio" className="brand" aria-label={`${company.name}, voltar ao início`} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav id="menu" className="header-nav" aria-label="Seções do site">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-neon header-cta-mobile" href="#contato" onClick={() => setOpen(false)}>
            Fale com a VLR
          </a>
        </nav>

        <div className="header-actions">
          <a className="btn btn-neon btn-sm header-cta" href="#contato">
            Fale com a VLR
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
