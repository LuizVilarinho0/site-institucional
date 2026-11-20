import type { Case, CoverMock } from '../data/content';

/** Capas ilustrativas desenhadas em código, no estilo do site. */
function Mock({ mock }: { mock: CoverMock }) {
  switch (mock) {
    case 'crm':
      return (
        <div className="mock mock-crm">
          <div className="mock-bar">
            <span>CRM · Pipeline comercial</span>
            <i>12 oportunidades</i>
          </div>
          <div className="mock-kanban">
            {[
              ['Prospecção', 3],
              ['Orçamento', 4],
              ['Negociação', 2],
              ['Fechado', 3],
            ].map(([col, n], ci) => (
              <div key={col} className="mock-col">
                <b>{col}</b>
                {Array.from({ length: Number(n) }).map((_, i) => (
                  <span key={i} className={ci === 3 ? 'is-won' : undefined}>
                    <em />
                    <em />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    case 'site':
      return (
        <div className="mock mock-browser">
          <div className="mock-chrome">
            <i />
            <i />
            <i />
            <span>gruponobrebrasil.com</span>
          </div>
          <div className="mock-site">
            <div className="mock-site-copy">
              <strong>
                Aquecimento.
                <br />
                Controle.
                <br />
                Nobre Brasil.
              </strong>
              <span className="mock-line" />
              <span className="mock-line short" />
              <span className="mock-btn" />
            </div>
            <img src="/img/cases/nobre-fachada.webp" alt="" loading="lazy" decoding="async" width={400} height={400} />
          </div>
        </div>
      );
    case 'hub':
      return (
        <div className="mock mock-hub">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {[
              [18, 22],
              [82, 22],
              [86, 78],
              [14, 78],
              [50, 92],
            ].map(([x, y]) => (
              <line key={`${x}${y}`} x1="50" y1="50" x2={x} y2={y} />
            ))}
          </svg>
          <span className="hub-core">Bling</span>
          {[
            ['Shopee', 18, 22],
            ['Amazon', 82, 22],
            ['Magalu', 86, 78],
            ['B2W', 14, 78],
            ['NF-e', 50, 92],
          ].map(([t, x, y]) => (
            <span key={t as string} className="hub-node" style={{ left: `${x}%`, top: `${y}%` }}>
              {t}
            </span>
          ))}
        </div>
      );
    case 'funnel':
      return (
        <div className="mock mock-funnel">
          {[
            ['Anúncio', 100],
            ['Visita', 82],
            ['Carrinho', 64],
            ['Pedido', 48],
            ['Full', 34],
          ].map(([t, w], i) => (
            <span key={t as string} style={{ width: `${w}%` }} className={i === 4 ? 'is-hot' : undefined}>
              <b>{t}</b>
              <i>0{i + 1}</i>
            </span>
          ))}
        </div>
      );
    case 'vision':
      return (
        <div className="mock mock-vision">
          <div className="cam-top">
            <b>Porta do ônibus · CAM 01</b>
            <i>● REC</i>
          </div>
          <span className="person" style={{ left: '22%' }}>
            <span className="box ok">
              <em>Aluno reconhecido · 0,31</em>
            </span>
          </span>
          <span className="person small" style={{ left: '62%' }}>
            <span className="box no">
              <em>Não cadastrado</em>
            </span>
          </span>
          <code>YOLOv8 → CLAHE → ArcFace → cos &lt; 0,68</code>
        </div>
      );
    case 'alert':
      return (
        <div className="mock mock-alert">
          <div className="cams">
            {['Portão', 'Garagem', 'Sala', 'Quintal'].map((c, i) => (
              <span key={c} className={i === 0 ? 'is-alert' : undefined}>
                {c}
              </span>
            ))}
          </div>
          <div className="notif">
            <i />
            <span>
              <b>SafeHome · agora</b>
              Rosto não cadastrado em Portão
            </span>
          </div>
        </div>
      );
    case 'terminal':
      return (
        <div className="mock mock-term">
          <pre>
            <span className="t-p">$</span> python -m organizer ~/Downloads --dry-run{'\n'}
            <span className="t-d">  analisando 7 arquivos…</span>
            {'\n'}
            <span className="t-a">  → Imagens/</span>     foto.png, banner.jpg{'\n'}
            <span className="t-a">  → Documentos/</span>  contrato.pdf{'\n'}
            <span className="t-a">  → Código/</span>      script.py{'\n'}
            <span className="t-ok">  ✓ simulação concluída</span>
            {'\n'}
            <span className="t-p">$</span> <span className="caret" />
          </pre>
        </div>
      );
    case 'ads':
      return (
        <div className="mock mock-ads">
          <svg viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
            {[50, 100, 150].map((y) => (
              <line key={y} x1="0" x2="400" y1={y} y2={y} />
            ))}
            <path className="area" d="M0 170 L50 160 L100 165 L150 130 L200 138 L250 100 L300 86 L350 60 L400 40 L400 200 L0 200 Z" />
            <path className="line" d="M0 170 L50 160 L100 165 L150 130 L200 138 L250 100 L300 86 L350 60 L400 40" />
          </svg>
          <code>CTR · CPC · CPA · ROAS</code>
        </div>
      );
  }
}

export function CaseCover({ cover }: { cover: Case['cover'] }) {
  if (cover.kind === 'image') {
    return <img src={cover.src} alt={cover.alt} loading="lazy" decoding="async" width={1440} height={900} />;
  }
  return <Mock mock={cover.mock} />;
}
