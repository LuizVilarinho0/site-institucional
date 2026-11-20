import { company, intro, metrics } from '../data/content';
import { ArrowIcon } from './Icons';
import { LinkButton, MonoBar, Sheet, TwoTone } from './ui';

export function Intro() {
  return (
    <Sheet id="sobre-vlr" labelledBy="intro-title" next="#clientes" className="intro">
      <div className="container">
        <MonoBar left="Sobre" center={company.name} right={company.city} />

        <div className="intro-body reveal">
          <TwoTone id="intro-title" lines={intro.title} className="display-md" />
          <p className="intro-text">{intro.text}</p>
          <div className="intro-actions">
            <LinkButton href="#contato" icon={<ArrowIcon />} size="lg">
              Agendar diagnóstico
            </LinkButton>
            <LinkButton href="#cases" variant="outline" size="lg">
              Ver cases
            </LinkButton>
          </div>
        </div>

        <dl className="metrics">
          {metrics.map((m, i) => (
            <div key={m.value} className="metric reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <dt className="metric-value">{m.value}</dt>
              <dd>
                <span className="metric-label">{m.label}</span>
                <span className="mono metric-source">{m.source}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="since" data-progress="view" aria-hidden="true">
        <span className="since-text">{intro.since}</span>
      </div>
    </Sheet>
  );
}
