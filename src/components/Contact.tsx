import { useEffect, useId, useState, type FormEvent } from 'react';
import { company, contactForm, messages, nav, whatsappLink, WHATSAPP_DISPLAY } from '../data/content';
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from './Icons';
import { Button, LinkButton, SplitText } from './ui';

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
      <div className="container">
        <div className="contact-head reveal">
          <h2 id="contato-title" className="contact-title">
            <SplitText text="VAMOS" />
            <SplitText text="CONVERSAR" delay={5} />
          </h2>
          <p className="lead-center">
            Conte como está sua operação ou o seu projeto. A primeira conversa é gratuita e respondemos em até 1 dia útil.
          </p>
          <div className="contact-actions">
            <LinkButton href={whatsappLink(messages.geral)} icon={<WhatsAppIcon size={18} />} size="lg">
              {WHATSAPP_DISPLAY}
            </LinkButton>
            <LinkButton href={`mailto:${company.email}`} variant="outline" icon={<MailIcon size={18} />} size="lg">
              E-mail
            </LinkButton>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={onSubmit}>
          <p className="mono contact-form-label">Ou envie os detalhes</p>
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
              Contexto <span className="mono field-hint">opcional</span>
            </label>
            <textarea
              id={`${id}-msg`}
              rows={4}
              placeholder="Canais em que vende, principal desafio, prazo do projeto…"
              value={form.mensagem}
              onChange={set('mensagem')}
            />
          </div>
          <Button type="submit" size="lg" className="btn--block" icon={<WhatsAppIcon size={18} />}>
            Enviar pelo WhatsApp
          </Button>
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
        <div className="footer-row">
          <p className="mono">
            © {year} {company.name}
            {company.cnpj && ` · CNPJ ${company.cnpj}`}
          </p>
          <nav className="footer-nav" aria-label="Rodapé">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="mono">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="footer-social">
            <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={16} />
            </a>
            <a href={company.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon size={16} />
            </a>
            <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-mark" data-progress="view" aria-hidden="true">
        <span>VLR</span>
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
      <WhatsAppIcon size={24} />
    </a>
  );
}
