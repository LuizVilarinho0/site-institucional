import { About } from './components/About';
import { Calculator } from './components/Calculator';
import { Clients } from './components/Clients';
import { Contact, Footer, WhatsAppFloat } from './components/Contact';
import { Engagement } from './components/Engagement';
import { Faq } from './components/Faq';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { Services } from './components/Services';
import { useScrollFx } from './hooks/useScrollFx';
import { useSmoothScroll } from './hooks/useSmoothScroll';

// Ritmo das seções: escuro (fundo) e claro (blocos arredondados) se alternam.
export default function App() {
  useSmoothScroll();
  useScrollFx();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Intro />
        <Clients />
        <Services />
        <Results />
        <Engagement />
        <Calculator />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
