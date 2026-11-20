import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';
import { cases, type Case } from '../data/content';
import { lenis } from '../hooks/useSmoothScroll';
import { CaseCover } from './CaseCover';
import { ArrowIcon, CheckIcon, ChevronIcon, CloseIcon } from './Icons';
import { MonoBar, TwoTone } from './ui';

type Filter = 'all' | 'commerce' | 'tech';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'commerce', label: 'Commerce' },
  { id: 'tech', label: 'Tech' },
];

const unitLabel = { commerce: 'Commerce', tech: 'Tech' } as const;

function CaseModal({ item, onClose }: { item: Case | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) {
      d.showModal();
      lenis?.stop();
    } else if (!item && d.open) {
      d.close();
    }
  }, [item]);

  return (
    <dialog
      ref={ref}
      className="case-modal"
      aria-labelledby="case-modal-title"
      data-lenis-prevent
      onClose={() => {
        lenis?.start();
        onClose();
      }}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
    >
      {item && (
        <article className="cm">
          <button type="button" className="cm-close" onClick={() => ref.current?.close()} aria-label="Fechar">
            <CloseIcon />
          </button>
          <div className="cm-cover">
            <CaseCover cover={item.cover} />
          </div>
          <div className="cm-body">
            <div className="cm-meta mono">
              <span>{item.client}</span>
              <span>{item.period}</span>
            </div>
            <h3 id="case-modal-title" className="cm-title">
              {item.title}
            </h3>
            <p className="mono cm-role">
              {unitLabel[item.unit]} · {item.role}
            </p>
            {item.metric && (
              <p className="cm-metric">
                <strong>{item.metric.value}</strong>
                <span>{item.metric.label}</span>
              </p>
            )}
            <p className="cm-summary">{item.summary}</p>
            <h4 className="mono cm-h">Entregas</h4>
            <ul className="check-list">
              {item.delivered.map((d) => (
                <li key={d}>
                  <CheckIcon size={14} />
                  {d}
                </li>
              ))}
            </ul>
            <h4 className="mono cm-h">Stack e canais</h4>
            <ul className="chips">
              {item.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {item.link && (
              <a className="cm-link" href={item.link.href} target="_blank" rel="noopener noreferrer">
                {item.link.label} <ArrowIcon size={14} />
              </a>
            )}
          </div>
        </article>
      )}
    </dialog>
  );
}

export function Results() {
  const [filter, setFilter] = useState<Filter>('all');
  const [open, setOpen] = useState<Case | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });

  const visible = cases.filter((c) => filter === 'all' || c.unit === filter);

  // Abre o modal a partir de outras seções (lista de clientes).
  useEffect(() => {
    const onOpen = (e: Event) => {
      const slug = (e as CustomEvent<string>).detail;
      const found = cases.find((c) => c.slug === slug);
      if (found) setOpen(found);
    };
    window.addEventListener('vlr:open-case', onOpen);
    return () => window.removeEventListener('vlr:open-case', onOpen);
  }, []);

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  }, [filter]);

  const step = useCallback((dir: 1 | -1) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.querySelector<HTMLElement>('.pcard');
    const w = card ? card.offsetWidth + 20 : t.clientWidth * 0.8;
    t.scrollBy({ left: dir * w, behavior: 'smooth' });
  }, []);

  // Arrastar com o mouse (no toque, a rolagem nativa já funciona).
  const onDown = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || !trackRef.current) return;
    drag.current = { down: true, x: e.clientX, left: trackRef.current.scrollLeft, moved: false };
  };
  const onMove = (e: PointerEvent) => {
    const d = drag.current;
    if (!d.down || !trackRef.current) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 5) d.moved = true;
    trackRef.current.scrollLeft = d.left - dx;
  };
  const onUp = () => {
    drag.current.down = false;
  };

  return (
    <section id="cases" className="cases" aria-labelledby="cases-title">
      <div className="container">
        <MonoBar left="Portfólio" center={`${cases.length} projetos`} right="2023 — 2026" />
        <div className="cases-head reveal">
          <TwoTone id="cases-title" lines={['Trabalho entregue.', 'Com escopo e stack.']} className="display-md" />
          <div className="cases-controls">
            <div className="pills" role="group" aria-label="Filtrar cases">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`pill ${filter === f.id ? 'is-active' : ''}`}
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                  <span>{f.id === 'all' ? cases.length : cases.filter((c) => c.unit === f.id).length}</span>
                </button>
              ))}
            </div>
            <div className="arrows">
              <button type="button" className="round-btn" onClick={() => step(-1)} aria-label="Anterior">
                <ChevronIcon dir="left" />
              </button>
              <button type="button" className="round-btn" onClick={() => step(1)} aria-label="Próximo">
                <ChevronIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="track"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
      >
        {visible.map((c) => (
          <article key={c.slug} className="pcard">
            <button
              type="button"
              className="pcard-btn"
              onClick={() => !drag.current.moved && setOpen(c)}
              aria-label={`Ver detalhes: ${c.title}, ${c.client}`}
            >
              <div className="pcard-frame">
                <div className="pcard-cover">
                  <CaseCover cover={c.cover} />
                </div>
                <span className={`unit-tag unit-tag--${c.unit}`}>{unitLabel[c.unit]}</span>
                {c.metric && (
                  <span className="pcard-metric">
                    <strong>{c.metric.value}</strong> {c.metric.label}
                  </span>
                )}
              </div>
              <div className="pcard-meta">
                <span className="pcard-title">{c.title}</span>
                <span className="pcard-client">{c.client}</span>
                <span className="mono pcard-period">{c.period}</span>
              </div>
            </button>
          </article>
        ))}
        <div className="track-end" aria-hidden="true" />
      </div>

      <CaseModal item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
