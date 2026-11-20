import { channels, clients, hero, messages, metrics, whatsappLink } from '../data/content';
import { ArrowIcon } from './Icons';
import { MarginCalculator } from './MarginCalculator';

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className="hero-title">
            {hero.title.slice(0, -1).join(' ')}{' '}
            <span className="hero-title-accent">{hero.title[hero.title.length - 1]}</span>
          </h1>
          <p className="hero-lead">{hero.lead}</p>

          <div className="hero-actions">
            <a className="btn btn-neon btn-lg" href="#contato">
              Agendar diagnóstico
              <ArrowIcon />
            </a>
            <a className="btn btn-ghost btn-lg" href="#cases">
              Ver cases
            </a>
          </div>

          <div className="hero-clients">
            <span className="mono-label">Clientes e projetos</span>
            <ul>
              {clients.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-tool">
          <MarginCalculator ctaHref={whatsappLink(messages.calculadora)} />
        </div>
      </div>

      <div className="container">
        <dl className="metrics">
          {metrics.map((m) => (
            <div key={m.value} className="metric">
              <dt className="metric-value">{m.value}</dt>
              <dd>
                <span className="metric-label">{m.label}</span>
                <span className="metric-source">{m.source}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="marquee" aria-label="Canais e tecnologias">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <ul key={dup} aria-hidden={dup === 1}>
              {channels.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
