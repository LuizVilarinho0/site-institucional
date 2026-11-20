import { units, whatsappLink } from '../data/content';
import { ArrowIcon } from './Icons';
import { Section } from './Section';

export function Services() {
  return (
    <Section
      id="solucoes"
      index="01"
      eyebrow="Soluções"
      title={
        <>
          Duas unidades.
          <br />
          <span className="text-muted">Uma operação.</span>
        </>
      }
      intro="Quem opera sua loja é quem escreve o código que a acelera. Contrate as unidades separadamente ou em conjunto."
    >
      <div className="units">
        {units.map((u) => (
          <article key={u.id} className={`unit unit--${u.id} reveal`}>
            <header className="unit-head">
              <span className="mono-label">{u.code}</span>
              <h3 className="unit-name">{u.name}</h3>
              <p className="unit-headline">{u.headline}</p>
              <p className="unit-intro">{u.intro}</p>
            </header>

            <div className="unit-scope">
              {u.scope.map((group) => (
                <div key={group.title} className="scope-group">
                  <h4 className="scope-title">{group.title}</h4>
                  <ul className="dash-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <footer className="unit-foot">
              <div className="unit-kpis">
                <span className="mono-label">{u.id === 'commerce' ? 'Indicadores acompanhados' : 'Padrão de entrega'}</span>
                <ul className="chips">
                  {u.kpis.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </div>
              <a className="btn btn-outline" href={whatsappLink(u.message)} target="_blank" rel="noopener noreferrer">
                {u.cta} <ArrowIcon />
              </a>
            </footer>
          </article>
        ))}
      </div>
    </Section>
  );
}
