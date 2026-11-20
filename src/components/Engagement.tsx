import { useState } from 'react';
import { pricing, whatsappLink } from '../data/content';
import { CheckIcon } from './Icons';
import { LinkButton, MonoBar, Sheet, TwoTone } from './ui';

export function Engagement() {
  const [tab, setTab] = useState<(typeof pricing)[number]['id']>('commerce');
  const current = pricing.find((p) => p.id === tab) ?? pricing[0];

  return (
    <Sheet id="planos" labelledBy="planos-title" next="#calculadora">
      <div className="container">
        <MonoBar left="Planos" center="Investimento" right="Valores de referência" />

        <div className="section-intro reveal">
          <TwoTone id="planos-title" lines={['Preço publicado.', 'Escopo claro.']} className="display-md" />
          <p>
            Valores alinhados ao mercado. A proposta final considera número de canais, tamanho do catálogo e complexidade
            do projeto.
          </p>
          <div className="pills pills--light" role="tablist" aria-label="Unidade">
            {pricing.map((p) => (
              <button
                key={p.id}
                id={`tab-${p.id}`}
                type="button"
                role="tab"
                aria-selected={tab === p.id}
                aria-controls={`panel-${p.id}`}
                className={`pill ${tab === p.id ? 'is-active' : ''}`}
                onClick={() => setTab(p.id)}
              >
                VLR {p.label}
              </button>
            ))}
          </div>
        </div>

        <div id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} key={current.id}>
          <div className="plans">
            {current.plans.map((plan, i) => (
              <article
                key={plan.name}
                className={`plan ${plan.featured ? 'is-featured' : ''}`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="plan-top">
                  <span className="mono">{String(i + 1).padStart(3, '0')}</span>
                  {plan.featured && <span className="plan-flag">Recomendado</span>}
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-for">{plan.forWho}</p>

                <div className="plan-price">
                  <span className="mono plan-prefix">{plan.prefix ?? ' '}</span>
                  <p>
                    <span className="plan-currency">R$</span>
                    <strong>{plan.price}</strong>
                    <span className="plan-period">{plan.period}</span>
                  </p>
                  {plan.extra && <span className="mono plan-extra">{plan.extra}</span>}
                </div>

                <ul className="check-list">
                  {plan.includes.map((item) => (
                    <li key={item}>
                      <CheckIcon size={14} />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mono plan-sla">{plan.sla}</p>

                <LinkButton
                  href={whatsappLink(plan.message)}
                  variant={plan.featured ? 'solid' : 'dark'}
                  className="btn--block"
                >
                  {plan.cta}
                </LinkButton>
              </article>
            ))}
          </div>
          <p className="plans-note">{current.note}</p>
        </div>
      </div>
    </Sheet>
  );
}
