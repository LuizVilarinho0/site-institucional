import { useState } from 'react';
import { cases } from '../data/content';
import { CaseCover } from './CaseCover';
import { ArrowIcon, CheckIcon } from './Icons';
import { Section } from './Section';

type Filter = 'all' | 'commerce' | 'tech';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'commerce', label: 'Commerce' },
  { id: 'tech', label: 'Tech' },
];

const unitLabel = { commerce: 'Commerce', tech: 'Tech' } as const;

export function Results() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = cases.filter((c) => filter === 'all' || c.unit === filter);

  return (
    <Section
      id="cases"
      index="02"
      eyebrow="Cases e portfólio"
      title="Trabalho entregue, com escopo e stack."
      intro="Operações de marketplace, sites e sistemas desenvolvidos para clientes e projetos próprios."
      aside={
        <div className="filters" role="group" aria-label="Filtrar cases">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter ${filter === f.id ? 'is-active' : ''}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
              <span>{f.id === 'all' ? cases.length : cases.filter((c) => c.unit === f.id).length}</span>
            </button>
          ))}
        </div>
      }
    >
      <ol className="cases">
        {visible.map((c) => (
          <li key={c.slug} className={`case ${c.featured ? 'is-featured' : ''}`}>
            <div className="case-cover">
              <CaseCover cover={c.cover} />
              <span className={`unit-tag unit-tag--${c.unit}`}>{unitLabel[c.unit]}</span>
            </div>

            <div className="case-body">
              <div className="case-meta">
                <span className="case-client">{c.client}</span>
                <span className="mono-label">{c.period}</span>
              </div>
              <h3 className="case-title">{c.title}</h3>
              <p className="case-role mono-label">{c.role}</p>

              {c.metric && (
                <p className="case-metric">
                  <strong>{c.metric.value}</strong>
                  <span>{c.metric.label}</span>
                </p>
              )}

              <p className="case-summary">{c.summary}</p>

              <ul className="check-list">
                {c.delivered.map((d) => (
                  <li key={d}>
                    <CheckIcon size={14} />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="case-foot">
                <ul className="chips chips-sm" aria-label="Tecnologias e canais">
                  {c.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {c.link && (
                  <a className="case-link" href={c.link.href} target="_blank" rel="noopener noreferrer">
                    {c.link.label} <ArrowIcon size={14} />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
