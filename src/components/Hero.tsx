import { useEffect, useState } from 'react';
import { about, company, hero } from '../data/content';
import { ArrowDownIcon } from './Icons';
import { SplitText } from './ui';

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const [first, second] = hero.name;

  return (
    <section id="inicio" className={`hero ${ready ? 'is-in' : ''}`} data-progress="pin" aria-labelledby="hero-title">
      <div className="hero-stage">
        <h1 id="hero-title" className="hero-name">
          <span className="hero-line hero-line--a">
            <SplitText text={first} />
          </span>
          <span className="hero-line hero-line--b">
            <SplitText text={second} delay={first.length} />
          </span>
          <span className="sr-only"> · {company.name}</span>
        </h1>

        <figure className="hero-photo">
          <img
            src={about.photo}
            alt={`${company.founder}, fundador da ${company.name}`}
            width={960}
            height={1200}
            decoding="async"
          />
        </figure>
      </div>

      <div className="hero-foot">
        <p className="hero-meta">
          <span className="mono">{hero.role}</span>
          <span className="hero-lead">{hero.lead}</span>
        </p>
        <span className="mono hero-loc">{hero.location}</span>
      </div>

      <a href="#sobre-vlr" className="hero-scroll" aria-label="Rolar para o conteúdo">
        <ArrowDownIcon />
      </a>
    </section>
  );
}
