import { steps } from '../data/content';
import { Section } from './Section';

export function Process() {
  return (
    <Section
      id="metodo"
      index="04"
      eyebrow="Método"
      tone="light"
      title="Do acesso às contas ao primeiro reporte em 30 dias."
      intro="Cada etapa tem prazo, entregável e responsável. Você sabe o que está sendo feito e quando."
    >
      <ol className="steps">
        {steps.map((step, i) => (
          <li key={step.title} className="step reveal" style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="step-top">
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="step-code">{step.code}</span>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-text">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
