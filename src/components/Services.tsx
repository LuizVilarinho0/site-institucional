import { services, servicesIntro, whatsappLink } from '../data/content';
import { CaseCover } from './CaseCover';
import { ArrowIcon } from './Icons';
import { LinkButton, MonoBar, Sheet, TwoTone } from './ui';

export function Services() {
  return (
    <Sheet id="servicos" labelledBy="servicos-title" next="#cases">
      <div className="container">
        <MonoBar left="Serviços" center="001 — 003" right="VLR Commerce & Tech" />

        <div className="section-intro reveal">
          <TwoTone id="servicos-title" lines={servicesIntro.title} className="display-md" />
          <p>{servicesIntro.text}</p>
        </div>

        <ol className="services">
          {services.map((s, i) => (
            <li key={s.title} className="service reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="service-top">
                <span className="mono">{String(i + 1).padStart(3, '0')}</span>
                <span className="mono service-unit">{s.unit}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
              <div className="service-media">
                <CaseCover cover={{ kind: 'mock', mock: s.mock }} />
              </div>
              <ul className="service-items">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <LinkButton href={whatsappLink(s.message)} variant="outline" icon={<ArrowIcon />}>
                {s.cta}
              </LinkButton>
            </li>
          ))}
        </ol>
      </div>
    </Sheet>
  );
}
