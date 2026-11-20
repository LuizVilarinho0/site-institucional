import { about, company } from '../data/content';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { Section } from './Section';

export function About() {
  return (
    <Section id="sobre" index="05" eyebrow="Sobre a VLR" title="Operação e engenharia na mesma cabeça.">
      <div className="about">
        <figure className="about-photo reveal">
          <img
            src={about.photo}
            alt={`${company.founder}, fundador da ${company.name}`}
            width={960}
            height={1200}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <strong>{company.founder}</strong>
            <span>{about.role}</span>
          </figcaption>
        </figure>

        <div className="about-text reveal">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <dl className="facts">
            {about.facts.map((f) => (
              <div key={f.term} className="fact">
                <dt className="mono-label">{f.term}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="timeline">
            <h3 className="mono-label">Trajetória</h3>
            <ol>
              {about.timeline.map((t) => (
                <li key={t.org}>
                  <span className="tl-period">{t.period}</span>
                  <span className="tl-org">{t.org}</span>
                  <span className="tl-what">{t.what}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="stack">
            {Object.entries(about.stack).map(([group, items]) => (
              <div key={group} className="stack-group">
                <h3 className="mono-label">{group}</h3>
                <ul className="chips chips-sm">
                  {items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="about-links">
            <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a href={company.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
              <GitHubIcon size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
