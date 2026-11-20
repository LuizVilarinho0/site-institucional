import { useEffect, useId, useState, type FormEvent } from 'react';
import { company, contactForm, messages, nav, whatsappLink, WHATSAPP_DISPLAY } from '../data/content';
import { Logo } from './Header';
import { ArrowIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from './Icons';

export function Contact() {
  const id = useId();
  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    servico: contactForm.services[0],
    faturamento: contactForm.revenue[1],
    mensagem: '',
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Olá! Sou ${form.nome.trim()}${form.empresa.trim() ? `, da ${form.empresa.trim()}` : ''}.`,
      `Interesse: ${form.servico}`,
      `Faturamento mensal: ${form.faturamento}`,
      form.mensagem.trim() && `\n${form.mensagem.trim()}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="contact" aria-labelledby="contato-title">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">
            <span className="eyebrow-index">[07]</span> Contato
          </p>
          <h2 id="contato-title" className="contact-title">
            Conte como está sua operação. <span className="text-neon">Respondemos em até 1 dia útil.</span>
          </h2>
          <p className="contact-lead">
            A primeira conversa é gratuita e sem compromisso. Saímos dela com um diagnóstico preliminar e o formato de
            contratação mais adequado.
          </p>

          <ul className="contact-channels">
            <li>
              <a href={whatsappLink(messages.geral)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} />
                <span>
                  <span className="mono-label">WhatsApp</span>
                  {WHATSAPP_DISPLAY}
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>
                <MailIcon size={18} />
                <span>
                  <span className="mono-label">E-mail</span>
                  {company.email}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor={`${id}-nome`}>Nome</label>
              <input id={`${id}-nome`} required autoComplete="name" value={form.nome} onChange={set('nome')} />
            </div>
            <div className="form-field">
              <label htmlFor={`${id}-empresa`}>Empresa</label>
              <input id={`${id}-empresa`} autoComplete="organization" value={form.empresa} onChange={set('empresa')} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor={`${id}-servico`}>Serviço de interesse</label>
              <select id={`${id}-servico`} value={form.servico} onChange={set('servico')}>
                {contactForm.services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor={`${id}-fat`}>Faturamento mensal</label>
              <select id={`${id}-fat`} value={form.faturamento} onChange={set('faturamento')}>
                {contactForm.revenue.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor={`${id}-msg`}>
              Contexto <span className="field-hint">opcional</span>
            </label>
            <textarea
              id={`${id}-msg`}
              rows={4}
              placeholder="Canais em que vende, principal desafio, prazo do projeto…"
              value={form.mensagem}
              onChange={set('mensagem')}
            />
          </div>
          <button type="submit" className="btn btn-neon btn-lg btn-block">
            <WhatsAppIcon size={18} /> Enviar pelo WhatsApp
          </button>
          <p className="form-note">A mensagem abre pronta no WhatsApp. Nenhum dado é armazenado neste site.</p>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>{company.tagline}.</p>
          </div>
          <nav className="footer-nav" aria-label="Rodapé">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a href="#contato">Contato</a>
          </nav>
          <div className="footer-social">
            <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={company.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {year} {company.name}
            {company.cnpj && ` · CNPJ ${company.cnpj}`}
          </p>
          <p>
            {company.city} · {company.coverage}
          </p>
          <a href="#inicio" className="footer-top-link">
            Voltar ao topo <ArrowIcon size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/** Botão que aparece depois que o visitante passa da primeira dobra. */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      className={`wa-float ${visible ? 'is-visible' : ''}`}
      href={whatsappLink(messages.geral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      tabIndex={visible ? 0 : -1}
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
