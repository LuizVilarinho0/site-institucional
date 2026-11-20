import { useId, useState } from 'react';
import { faq } from '../data/content';
import { PlusIcon } from './Icons';
import { Section } from './Section';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Section id="duvidas" index="06" eyebrow="Dúvidas frequentes" title="Antes de contratar.">
      <div className="faq">
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
                  <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
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
    </Section>
  );
}
