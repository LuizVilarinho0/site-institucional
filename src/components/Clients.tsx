import { useRef, useState, type MouseEvent } from 'react';
import { cases, channels, clients, clientsIntro } from '../data/content';
import { CaseCover } from './CaseCover';
import { ArrowIcon } from './Icons';
import { LinkButton } from './ui';

export function openCase(slug: string) {
  window.dispatchEvent(new CustomEvent('vlr:open-case', { detail: slug }));
}

export function Clients() {
  const listRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);

  // A prévia segue o cursor via variáveis CSS, sem re-renderizar.
  const onMove = (e: MouseEvent) => {
    const el = listRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const hovered = hover !== null ? cases.find((c) => c.slug === clients[hover].slug) : undefined;

  return (
    <section id="clientes" className="clients" aria-labelledby="clientes-title">
      <div className="container">
        <div className="clients-head reveal">
          <h2 id="clientes-title" className="sr-only">
            Clientes
          </h2>
          <p className="lead-center">{clientsIntro}</p>
          <LinkButton href="#cases" variant="outline">
            Ver portfólio completo
          </LinkButton>
        </div>

        <div
          ref={listRef}
          className={`client-list ${hover !== null ? 'has-hover' : ''}`}
          onMouseMove={onMove}
          onMouseLeave={() => setHover(null)}
        >
          {clients.map((c, i) => (
            <button
              key={c.name}
              type="button"
              className={`client-row reveal ${hover === i ? 'is-hover' : ''}`}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              onClick={() => openCase(c.slug)}
            >
              <span className="client-name">{c.name}</span>
              <span className="mono client-tags">{c.tags}</span>
              <span className="client-go" aria-hidden="true">
                <ArrowIcon size={20} />
              </span>
            </button>
          ))}

          <div className="client-preview" aria-hidden="true">
            {hovered && <CaseCover key={hovered.slug} cover={hovered.cover} />}
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <span key={dup} className="marquee-group">
              {channels.map((c) => (
                <span key={c} className="marquee-item">
                  {c}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
