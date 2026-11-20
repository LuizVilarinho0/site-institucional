import { about, company } from '../data/content';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { LinkButton, MonoBar, TwoTone } from './ui';

export function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="sobre-title">
      <div className="container">
        <MonoBar left="Fundador" center={company.name} right={company.founder} />

        <div className="about-statement reveal">
          <TwoTone id="sobre-title" lines={['Operação e engenharia', 'na mesma cabeça.']} className="display-lg" />
        </div>

        <div className="about-grid">
          <figure className="about-photo reveal">
            <div className="about-photo-inner" data-speed="-0.06">
              <img
                src={about.photo}
                alt={`${company.founder}, fundador da ${company.name}`}
                width={960}
                height={1200}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>
              <strong>{company.founder}</strong>
              <span className="mono">{about.role}</span>
            </figcaption>
          </figure>

          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={p} className={`reveal ${i === 0 ? 'about-lead' : ''}`}>
                {p}
              </p>
            ))}

            <dl className="facts reveal">
              {about.facts.map((f) => (
                <div key={f.term} className="fact">
                  <dt className="mono">{f.term}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="timeline reveal">
              <h3 className="mono">Trajetória</h3>
              <ol>
                {about.timeline.map((t) => (
                  <li key={t.org}>
                    <span className="mono tl-period">{t.period}</span>
                    <span className="tl-org">{t.org}</span>
                    <span className="tl-what">{t.what}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="stack reveal">
              {Object.entries(about.stack).map(([group, items]) => (
                <div key={group} className="stack-group">
                  <h3 className="mono">{group}</h3>
                  <ul className="chips">
                    {items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="about-links reveal">
              <LinkButton href={company.social.linkedin} variant="outline" icon={<LinkedInIcon size={16} />}>
                LinkedIn
              </LinkButton>
              <LinkButton href={company.social.github} variant="outline" icon={<GitHubIcon size={16} />}>
                GitHub
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
