import { steps } from '../data/content';
import { MonoBar, Sheet, TwoTone } from './ui';

export function Process() {
  return (
    <Sheet id="metodo" labelledBy="metodo-title" next="#sobre">
      <div className="container">
        <MonoBar left="Método" center="5 etapas" right="Primeiro reporte em 30 dias" />

        <div className="section-intro reveal">
          <TwoTone id="metodo-title" lines={['Do acesso às contas', 'ao primeiro reporte.']} className="display-md" />
          <p>Cada etapa tem prazo, entregável e responsável. Você sabe o que está sendo feito e quando.</p>
        </div>

        <div className="steps-wrap" data-progress="view">
          <span className="steps-line" aria-hidden="true" />
          <ol className="steps">
          {steps.map((step, i) => (
            <li key={step.title} className="step reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="step-dot" aria-hidden="true" />
              <span className="mono step-code">{step.code}</span>
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.text}</p>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </Sheet>
  );
}
