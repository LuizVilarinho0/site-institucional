import { useId, useMemo, useState, type ChangeEvent } from 'react';
import { useAnimatedNumber } from '../hooks/useAnimatedNumber';
import { ArrowIcon } from './Icons';

type FieldKey = 'preco' | 'custo' | 'comissao' | 'frete' | 'imposto' | 'ads';

type Field = {
  key: FieldKey;
  label: string;
  unit: 'R$' | '%';
  hint?: string;
};

const FIELDS: Field[] = [
  { key: 'preco', label: 'Preço de venda', unit: 'R$' },
  { key: 'custo', label: 'Custo do produto', unit: 'R$' },
  { key: 'comissao', label: 'Comissão do canal', unit: '%' },
  { key: 'frete', label: 'Frete pago por você', unit: 'R$' },
  { key: 'imposto', label: 'Imposto sobre a venda', unit: '%' },
  { key: 'ads', label: 'Ads sobre a venda', unit: '%', hint: 'TACOS' },
];

// Valores de exemplo. Não representam a tabela oficial de nenhum marketplace.
const DEFAULTS: Record<FieldKey, string> = {
  preco: '129,90',
  custo: '52,00',
  comissao: '16',
  frete: '21,00',
  imposto: '6',
  ads: '8',
};

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const pct = new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 });

function parse(value: string): number {
  // Aceita "1.299,90" (padrão BR) e "1299.90".
  const normalized = value.includes(',') ? value.replace(/\./g, '').replace(',', '.').trim() : value.trim();
  const n = Number(normalized);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

type Segment = { key: string; label: string; value: number; className: string };

export function MarginCalculator({ ctaHref }: { ctaHref: string }) {
  const [values, setValues] = useState<Record<FieldKey, string>>(DEFAULTS);
  const baseId = useId();

  const result = useMemo(() => {
    const preco = parse(values.preco);
    const custo = parse(values.custo);
    const comissao = (preco * parse(values.comissao)) / 100;
    const frete = parse(values.frete);
    const imposto = (preco * parse(values.imposto)) / 100;
    const ads = (preco * parse(values.ads)) / 100;
    const custos = custo + comissao + frete + imposto + ads;
    const lucro = preco - custos;
    const margem = preco > 0 ? lucro / preco : 0;

    const segments: Segment[] = [
      { key: 'custo', label: 'Custo', value: custo, className: 'seg-1' },
      { key: 'comissao', label: 'Comissão', value: comissao, className: 'seg-2' },
      { key: 'frete', label: 'Frete', value: frete, className: 'seg-3' },
      { key: 'imposto', label: 'Imposto', value: imposto, className: 'seg-4' },
      { key: 'ads', label: 'Ads', value: ads, className: 'seg-5' },
      { key: 'lucro', label: 'Margem', value: Math.max(lucro, 0), className: 'seg-profit' },
    ];

    return { preco, lucro, margem, segments, base: Math.max(preco, custos) };
  }, [values]);

  const lucroAnimado = useAnimatedNumber(result.lucro);
  const margemAnimada = useAnimatedNumber(result.margem);
  const prejuizo = result.lucro < 0;

  const update = (key: FieldKey) => (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value.replace(/[^\d.,]/g, '');
    setValues((prev) => ({ ...prev, [key]: next }));
  };

  return (
    <section className="calc" aria-labelledby={`${baseId}-title`}>
      <header className="calc-head">
        <div className="calc-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span className="mono-label">margem_por_sku.calc</span>
      </header>

      <div className="calc-body">
        <h2 id={`${baseId}-title`} className="calc-title">
          Quanto sobra de cada venda?
        </h2>
        <p className="calc-sub">Substitua pelos números de um produto seu.</p>

        <div className="calc-fields">
          {FIELDS.map((field) => {
            const id = `${baseId}-${field.key}`;
            return (
              <div className="field" key={field.key}>
                <label htmlFor={id}>
                  {field.label}
                  {field.hint && <span className="field-hint">{field.hint}</span>}
                </label>
                <div className={`field-input ${field.unit === '%' ? 'is-suffix' : 'is-prefix'}`}>
                  <span className="field-unit" aria-hidden="true">
                    {field.unit}
                  </span>
                  <input
                    id={id}
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    value={values[field.key]}
                    onChange={update(field.key)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="calc-result" aria-live="polite">
          <div className="calc-numbers">
            <div>
              <span className="mono-label">{prejuizo ? 'Prejuízo / venda' : 'Lucro / venda'}</span>
              <strong className={`calc-big ${prejuizo ? 'is-negative' : ''}`}>{brl.format(lucroAnimado)}</strong>
            </div>
            <div>
              <span className="mono-label">Margem líquida</span>
              <strong className={`calc-big ${prejuizo ? 'is-negative' : ''}`}>{pct.format(margemAnimada)}</strong>
            </div>
          </div>

          <div className="bar" role="img" aria-label="Composição do preço de venda">
            {result.segments.map((s) => (
              <span
                key={s.key}
                className={`bar-seg ${s.className}`}
                style={{ width: `${result.base > 0 ? (s.value / result.base) * 100 : 0}%` }}
              />
            ))}
          </div>

          <ul className="legend">
            {result.segments.map((s) => (
              <li key={s.key}>
                <span className={`legend-swatch ${s.className}`} aria-hidden="true" />
                <span className="legend-label">{s.label}</span>
                <span className="legend-value">{brl.format(s.key === 'lucro' ? result.lucro : s.value)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="calc-foot">
        <p>
          {prejuizo
            ? 'Este produto perde dinheiro a cada venda. É mais comum do que parece.'
            : 'Agora multiplique essa conta por cada SKU, em cada canal, todo mês.'}
        </p>
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="calc-link">
          Analisar meu catálogo <ArrowIcon size={14} />
        </a>
      </footer>
    </section>
  );
}
