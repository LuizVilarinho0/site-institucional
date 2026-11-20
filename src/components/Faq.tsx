import { useId, useState } from 'react';
import { faq, testimonials } from '../data/content';
import { ChevronIcon, PlusIcon } from './Icons';
import { MonoBar, Sheet, TwoTone } from './ui';

/** Só aparece quando houver depoimentos em content.ts. */
function Testimonials() {
  const [i, setI] = useState(0);
  if (testimonials.length === 0) return null;
  const t = testimonials[i];
  const go = (d: number) => setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <div className="testimonials reveal" aria-roledescription="carrossel" aria-label="Depoimentos">
      <div className="t-card">
        <blockquote key={i} className="t-quote">
          <p>“{t.quote}”</p>
          <footer>
            <strong>{t.name}</strong>
            <span>
              {t.role} · {t.company}
            </span>
          </footer>
        </blockquote>
        {testimonials.length > 1 && (
          <div className="t-nav">
            <button type="button" onClick={() => go(-1)}>
              <ChevronIcon dir="left" size={16} /> anterior
            </button>
            <button type="button" onClick={() => go(1)}>
              próximo <ChevronIcon size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Sheet id="duvidas" labelledBy="duvidas-title" next="#contato">
      <div className="container">
        <Testimonials />

        <MonoBar left="Perguntas" center={`${String(faq.length).padStart(3, '0')} respostas`} right="Antes de contratar" />
        <div className="section-intro reveal">
          <TwoTone id="duvidas-title" lines={['Dúvidas frequentes.', 'Respostas diretas.']} className="display-md" />
        </div>

        <div className="faq reveal">
          {faq.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;
            return (
              <div key={item.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <h3 className="faq-q">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="mono faq-num">{String(i + 1).padStart(3, '0')}</span>
                    <span className="faq-text">{item.q}</span>
                    <span className="faq-icon">
                      <PlusIcon />
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} className="faq-panel" aria-hidden={!isOpen}>
                  <div className="faq-panel-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Sheet>
  );
}
