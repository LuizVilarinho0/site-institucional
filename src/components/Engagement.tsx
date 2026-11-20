import { useState } from 'react';
import { pricing, whatsappLink } from '../data/content';
import { CheckIcon } from './Icons';
import { Section } from './Section';

export function Engagement() {
  const [tab, setTab] = useState<(typeof pricing)[number]['id']>('commerce');
  const current = pricing.find((p) => p.id === tab) ?? pricing[0];

  return (
    <Section
      id="planos"
      index="03"
      eyebrow="Planos e investimento"
      title="Preço publicado. Escopo claro."
      intro="Valores de referência alinhados ao mercado. A proposta final considera número de canais, tamanho do catálogo e complexidade do projeto."
      aside={
        <div className="tabs" role="tablist" aria-label="Unidade">
          {pricing.map((p) => (
            <button
              key={p.id}
              id={`tab-${p.id}`}
              type="button"
              role="tab"
              aria-selected={tab === p.id}
              aria-controls={`panel-${p.id}`}
              className={`tab ${tab === p.id ? 'is-active' : ''}`}
              onClick={() => setTab(p.id)}
            >
              VLR {p.label}
            </button>
          ))}
        </div>
      }
    >
      <div id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`}>
        <div className="plans">
          {current.plans.map((plan) => (
            <article key={plan.name} className={`plan ${plan.featured ? 'is-featured' : ''}`}>
              {plan.featured && <span className="plan-flag">Recomendado</span>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-for">{plan.forWho}</p>

              <div className="plan-price">
                {plan.prefix && <span className="plan-prefix">{plan.prefix}</span>}
                <p>
                  <span className="plan-currency">R$</span>
                  <strong>{plan.price}</strong>
                  <span className="plan-period">{plan.period}</span>
                </p>
                {plan.extra && <span className="plan-extra">{plan.extra}</span>}
              </div>

              <ul className="check-list">
                {plan.includes.map((item) => (
                  <li key={item}>
                    <CheckIcon size={14} />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="plan-sla mono-label">{plan.sla}</p>

              <a
                className={`btn btn-block ${plan.featured ? 'btn-neon' : 'btn-outline'}`}
                href={whatsappLink(plan.message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="plans-note">{current.note}</p>
      </div>
    </Section>
  );
}
