import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  tone?: 'dark' | 'light';
  aside?: ReactNode;
  children: ReactNode;
};

/** Cabeçalho padrão de seção: índice técnico, título grande e introdução. */
export function Section({ id, index, eyebrow, title, intro, tone = 'dark', aside, children }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">
            <span className="eyebrow-index">[{index}]</span> {eyebrow}
          </p>
          <div className="section-head-row">
            <h2 id={`${id}-title`} className="section-title">
              {title}
            </h2>
            {(intro || aside) && (
              <div className="section-head-side">
                {intro && <p className="section-intro">{intro}</p>}
                {aside}
              </div>
            )}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
