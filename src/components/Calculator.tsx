import { messages, whatsappLink } from '../data/content';
import { ArrowIcon } from './Icons';
import { MarginCalculator } from './MarginCalculator';
import { LinkButton, MonoBar, TwoTone } from './ui';

export function Calculator() {
  return (
    <section id="calculadora" className="calc-section" aria-labelledby="calc-title">
      <div className="container">
        <MonoBar left="Ferramenta" center="Margem por SKU" right="Gratuita" />
        <div className="calc-layout">
          <div className="calc-copy reveal">
            <TwoTone id="calc-title" lines={['Quanto sobra de cada venda?', 'A conta que define o preço.']} className="display-md" />
            <p>
              Comissão, tarifa, frete, imposto e Ads consomem a margem antes de o produto sair do estoque. Coloque os números de
              um SKU seu e veja a composição real do preço.
            </p>
            <p className="calc-copy-note">
              No diagnóstico, fazemos essa conta para todo o catálogo, canal por canal.
            </p>
            <LinkButton href={whatsappLink(messages.calculadora)} icon={<ArrowIcon />} size="lg">
              Analisar meu catálogo
            </LinkButton>
          </div>
          <div className="calc-wrap reveal" data-speed="0.04" style={{ transitionDelay: '120ms' }}>
            <MarginCalculator ctaHref={whatsappLink(messages.calculadora)} />
          </div>
        </div>
      </div>
    </section>
  );
}
