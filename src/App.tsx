import { About } from './components/About';
import { Contact, Footer, WhatsAppFloat } from './components/Contact';
import { Engagement } from './components/Engagement';
import { Faq } from './components/Faq';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { Services } from './components/Services';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Results />
        <Engagement />
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
