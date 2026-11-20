import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { ArrowDownIcon } from './Icons';

type Variant = 'solid' | 'outline' | 'ghost' | 'dark';

/** Texto duplicado que rola para cima no hover. */
function Roll({ children }: { children: ReactNode }) {
  return (
    <span className="roll">
      <span className="roll-a">{children}</span>
      <span className="roll-b" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

type LinkBtnProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; icon?: ReactNode; size?: 'md' | 'lg' };

export function LinkButton({ variant = 'solid', icon, size = 'md', className = '', children, ...rest }: LinkBtnProps) {
  const external = rest.href?.startsWith('http');
  return (
    <a
      className={`btn btn--${variant} btn--${size} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {icon}
      <Roll>{children}</Roll>
    </a>
  );
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; icon?: ReactNode; size?: 'md' | 'lg' };

export function Button({ variant = 'solid', icon, size = 'md', className = '', children, ...rest }: BtnProps) {
  return (
    <button className={`btn btn--${variant} btn--${size} ${className}`} {...rest}>
      {icon}
      <Roll>{children}</Roll>
    </button>
  );
}

/** Divide o texto em letras para a animação de entrada. Leitores de tela recebem o texto inteiro. */
export function SplitText({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={`split ${className}`}>
      <span className="sr-only">{text}</span>
      {Array.from(text).map((ch, i) => (
        <span key={i} className="ch-mask" aria-hidden="true">
          <span className="ch" style={{ '--i': i + delay } as CSSProperties}>
            {ch === ' ' ? ' ' : ch}
          </span>
        </span>
      ))}
    </span>
  );
}

/** Título em dois tons: primeira linha forte, segunda suave. */
export function TwoTone({
  lines,
  as: Tag = 'h2',
  id,
  className = '',
}: {
  lines: string[];
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
  className?: string;
}) {
  return (
    <Tag id={id} className={`two-tone ${className}`}>
      {lines.map((l, i) => (
        <span key={l} className={i === 0 ? 'tt-strong' : 'tt-soft'}>
          {l}
          {i < lines.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}

/** Linha de rótulos em mono: esquerda · centro · direita. */
export function MonoBar({ left, center, right }: { left: string; center?: string; right?: string }) {
  return (
    <div className="mono-bar">
      <span>{left}</span>
      {center && <span className="mono-bar-center">{center}</span>}
      {right && <span className="mono-bar-right">{right}</span>}
    </div>
  );
}

/** Bloco claro com cantos arredondados e entalhe com seta no topo. */
export function Sheet({
  id,
  labelledBy,
  next,
  className = '',
  children,
}: {
  id: string;
  labelledBy: string;
  next?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`sheet ${className}`} aria-labelledby={labelledBy}>
      <div className="notch" aria-hidden={!next}>
        <svg viewBox="0 0 280 44" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 44 C 64 44 86 2 140 2 C 194 2 216 44 280 44 Z" />
        </svg>
        {next && (
          <a className="notch-btn" href={next} aria-label="Ir para a próxima seção">
            <ArrowDownIcon />
          </a>
        )}
      </div>
      {children}
    </section>
  );
}
