// Todo o texto do site fica aqui. Edite este arquivo para mudar conteúdo sem mexer nos componentes.

/* ------------------------------------------------------------------ */
/* Empresa e contato                                                   */
/* ------------------------------------------------------------------ */

export const company = {
  name: 'VLR Commerce & Tech',
  short: 'VLR',
  suffix: 'Commerce & Tech',
  tagline: 'Operação de e-commerce e engenharia de software',
  founder: 'Luiz Vilarinho',
  city: 'Ribeirão Preto · SP',
  coverage: 'Atendimento remoto para todo o Brasil',
  email: 'luizvilarinho948@gmail.com',
  // Preencha quando o CNPJ estiver ativo. Vazio = não aparece no rodapé.
  cnpj: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/luiz-vilarinho-b0b5272b6/',
    github: 'https://github.com/LuizVilarinho0',
    instagram: 'https://www.instagram.com/luizvilarinhoo/',
  },
};

export const WHATSAPP_NUMBER = '5516994157389';
export const WHATSAPP_DISPLAY = '+55 16 99415-7389';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  geral: 'Olá! Vim pelo site da VLR Commerce & Tech e gostaria de conversar.',
  diagnostico: 'Olá! Quero agendar um diagnóstico da minha operação de e-commerce.',
  calculadora: 'Olá! Usei a calculadora do site e quero analisar a margem real do meu catálogo por canal.',
  tecnologia: 'Olá! Tenho um projeto de site, sistema ou automação e gostaria de um orçamento.',
};

export const nav = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#cases', label: 'Cases' },
  { href: '#planos', label: 'Planos' },
  { href: '#metodo', label: 'Método' },
  { href: '#sobre', label: 'Sobre' },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: 'E-commerce · Software · Dados',
  // ‑ = hífen que não quebra linha ("e‑commerce" nunca é partido).
  title: ['Operação de e‑commerce', 'e engenharia de software.', 'Um único contrato.'],
  lead:
    'A VLR gere seus marketplaces (catálogo, precificação, Ads e logística) e desenvolve os sites, CRMs e automações que sustentam o crescimento. Cada decisão parte da margem de contribuição por SKU e por canal.',
};

export const metrics = [
  { value: 'R$ 2M+', label: 'faturados no 1º ano de operação reativada', source: 'Tec Print' },
  { value: '< 90 dias', label: 'da abertura da loja à liberação do Full', source: 'MLJ Store' },
  { value: '3+ anos', label: 'operando marketplaces no dia a dia', source: 'Mercado Livre, Shopee, Amazon, Magalu' },
  { value: '2 frentes', label: 'operação e tecnologia sob a mesma gestão', source: 'Commerce + Tech' },
];

export const channels = [
  'Mercado Livre',
  'Shopee',
  'Amazon',
  'Magalu',
  'Americanas',
  'Loja própria',
  'Bling ERP',
  'Mercado Ads',
  'Meta Ads',
  'Google Ads',
  'React',
  'TypeScript',
  'Python',
  'SQL',
];

export const clients = ['Nobre Brasil', 'Tec Print', 'MLJ Store', 'Rô Vilari', 'Nova Singular'];

/* ------------------------------------------------------------------ */
/* Unidades de negócio                                                 */
/* ------------------------------------------------------------------ */

export type Unit = {
  id: 'commerce' | 'tech';
  code: string;
  name: string;
  headline: string;
  intro: string;
  scope: { title: string; items: string[] }[];
  kpis: string[];
  cta: string;
  message: string;
};

export const units: Unit[] = [
  {
    id: 'commerce',
    code: 'U-01',
    name: 'VLR Commerce',
    headline: 'Gestão de operação multicanal',
    intro:
      'Assumimos a rotina dos seus canais de venda com processos documentados, metas mensais e reporte de indicadores. Você mantém a propriedade das contas; nós operamos.',
    scope: [
      {
        title: 'Catálogo e conversão',
        items: [
          'Cadastro e otimização de anúncios: título, ficha técnica, variações, imagens e atributos por categoria',
          'Ganho de qualidade de anúncio e posicionamento no catálogo do Mercado Livre',
          'Curva ABC, giro, ruptura e saneamento de SKUs sem venda',
        ],
      },
      {
        title: 'Preço e mídia',
        items: [
          'Precificação por margem de contribuição: comissão, tarifa fixa, frete, imposto e Ads',
          'Gestão de Mercado Ads, Shopee Ads e Amazon Ads com metas de ACOS e TACOS',
          'Monitoramento de concorrência e Buy Box',
        ],
      },
      {
        title: 'Logística e reputação',
        items: [
          'Full, FBA, Mercado Envios Flex e planejamento de reposição',
          'Gestão de reputação, prazos de postagem, reclamações e mediações',
          'Integração com ERP (Bling) e emissão de NF-e',
        ],
      },
    ],
    kpis: ['GMV', 'Margem de contribuição', 'ACOS / TACOS', 'Taxa de conversão', 'Ruptura', 'Reputação'],
    cta: 'Agendar diagnóstico',
    message: messages.diagnostico,
  },
  {
    id: 'tech',
    code: 'U-02',
    name: 'VLR Tech',
    headline: 'Desenvolvimento de software sob medida',
    intro:
      'Sites, sistemas internos e integrações construídos com stack moderna, código versionado e entrega por etapas. O código-fonte é do cliente.',
    scope: [
      {
        title: 'Web',
        items: [
          'Sites institucionais e landing pages em React, TypeScript e Vite',
          'SEO técnico: HTML pré-renderizado, Core Web Vitals, Open Graph, dados estruturados',
          'GA4 e eventos de conversão configurados desde a publicação',
        ],
      },
      {
        title: 'Sistemas',
        items: [
          'CRMs e sistemas internos: cadastro, funil, orçamentos e relatórios',
          'Controle de acesso por perfil, trilha de auditoria e senhas com hash',
          'Bancos relacionais (PostgreSQL, MySQL) e dashboards gerenciais',
        ],
      },
      {
        title: 'Automação e dados',
        items: [
          'Integrações via API com Mercado Livre, Shopee, Amazon, Google e Telegram',
          'Rotinas em Python para precificação, alertas de estoque e relatórios',
          'Visão computacional aplicada (OpenCV, YOLO, reconhecimento facial)',
        ],
      },
    ],
    kpis: ['Lighthouse 90+', 'LCP < 2,5 s', 'Código no seu repositório', 'Deploy contínuo', 'Testes automatizados'],
    cta: 'Solicitar orçamento',
    message: messages.tecnologia,
  },
];

/* ------------------------------------------------------------------ */
/* Cases                                                               */
/* ------------------------------------------------------------------ */

export type CoverMock = 'crm' | 'site' | 'hub' | 'funnel' | 'vision' | 'alert' | 'terminal' | 'ads';

export type Case = {
  slug: string;
  unit: 'commerce' | 'tech';
  client: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  delivered: string[];
  stack: string[];
  metric?: { value: string; label: string };
  link?: { href: string; label: string };
  cover: { kind: 'image'; src: string; alt: string } | { kind: 'mock'; mock: CoverMock };
  featured?: boolean;
};

export const cases: Case[] = [
  {
    slug: 'nobre-crm',
    unit: 'tech',
    client: 'Nobre Brasil',
    title: 'CRM comercial sob medida',
    period: '2026',
    role: 'Levantamento, arquitetura e desenvolvimento',
    // CONFIRA: ajuste módulos e tecnologias para refletir exatamente o que foi entregue.
    summary:
      'Sistema web que centraliza clientes, oportunidades e orçamentos do time comercial de uma indústria de aquecimento e automação com mais de 12 mil itens em catálogo.',
    delivered: [
      'Base única de clientes e contatos, com histórico de interações por conta',
      'Pipeline de vendas por etapa, com responsável, valor e previsão de fechamento',
      'Orçamentos vinculados ao catálogo de produtos',
      'Perfis de acesso para vendas, gestão e administração',
      'Painéis de funil, conversão e carteira por vendedor',
    ],
    stack: ['Aplicação web', 'Banco relacional', 'Controle de acesso', 'Dashboards'],
    cover: { kind: 'mock', mock: 'crm' },
    featured: true,
  },
  {
    slug: 'nobre-site',
    unit: 'tech',
    client: 'Nobre Brasil',
    title: 'Site institucional industrial',
    period: '2026',
    role: 'Design e desenvolvimento',
    summary:
      'Novo site da Nobre Brasil, fabricante de resistências elétricas, sensores e controladores de temperatura desde 2004, com foco em apresentar o portfólio técnico e gerar contatos comerciais.',
    delivered: [
      'Estrutura por linhas de solução: resistências, controladores, sensores e automação',
      'HTML pré-renderizado: conteúdo indexável sem depender de JavaScript',
      'SEO técnico com canonical, Open Graph e Twitter Cards',
      'GA4 para medir contatos; WhatsApp e loja virtual integrados',
      'Build com Vite e preload de fontes para carregamento rápido',
    ],
    stack: ['Vite', 'Pré-renderização', 'SEO técnico', 'GA4'],
    link: { href: 'https://gruponobrebrasil.com/', label: 'gruponobrebrasil.com' },
    cover: { kind: 'mock', mock: 'site' },
    featured: true,
  },
  {
    slug: 'tec-print',
    unit: 'commerce',
    client: 'Tec Print',
    title: 'Reativação de quatro marketplaces',
    period: '2023 – 2025',
    role: 'Operação de e-commerce',
    summary:
      'Shopee, Amazon, Magalu e B2W estavam parados. Reestruturamos catálogo, preços e campanhas, com a operação integrada ao ERP Bling.',
    delivered: [
      'Recadastro e otimização do catálogo nos quatro canais',
      'Política de preço por canal e atualização contínua',
      'Integração de pedidos, estoque e NF-e via Bling',
      'Atendimento e acompanhamento diário de vendas',
    ],
    stack: ['Shopee', 'Amazon', 'Magalu', 'B2W', 'Bling', 'NF-e'],
    metric: { value: 'R$ 2M+', label: 'faturados no primeiro ano' },
    cover: { kind: 'mock', mock: 'hub' },
    featured: true,
  },
  {
    slug: 'mlj-store',
    unit: 'commerce',
    client: 'MLJ Store',
    title: 'Operação própria, do zero ao Full',
    period: '2025 – atual',
    role: 'Operação própria',
    summary:
      'E-commerce próprio usado como laboratório: todo processo que oferecemos a clientes é testado aqui primeiro, com capital próprio em jogo.',
    delivered: [
      'Estruturação da loja para atingir reputação, volume e giro exigidos pelo Mercado Livre',
      'Fluxo de caixa, precificação e controle de margem por SKU',
      'Negociação com fornecedores e gestão de estoque',
      'Campanhas, pós-venda e automação de rotinas',
    ],
    stack: ['Mercado Livre', 'Full', 'Precificação', 'Fluxo de caixa'],
    metric: { value: '< 90 dias', label: 'até a liberação do Full' },
    cover: { kind: 'mock', mock: 'funnel' },
    featured: true,
  },
  {
    slug: 'ro-vilari',
    unit: 'tech',
    client: 'Rô Vilari',
    title: 'Site com agenda de shows integrada',
    period: '2026',
    role: 'Design e desenvolvimento',
    summary:
      'Site para cantora que permite ao contratante consultar datas livres e fazer a pré-reserva sozinho, direto da agenda do Google.',
    delivered: [
      'Agenda conectada à Google Calendar API com conta de serviço',
      'Back-end em PHP sem dependências, com cache e limite de tentativas',
      'Mesa de ritmos tocável, com áudio gerado pela Web Audio API',
      'Formulário com envio SMTP e proteção contra robôs',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'PHP', 'Google Calendar API'],
    cover: { kind: 'image', src: '/img/cases/rovilari.webp', alt: 'Página inicial do site da cantora Rô Vilari' },
  },
  {
    slug: 'safebus',
    unit: 'tech',
    client: 'SafeBus · UNIP',
    title: 'Embarque escolar por reconhecimento facial',
    period: '2026',
    role: 'Desenvolvimento (projeto em grupo)',
    summary:
      'Câmera na porta do ônibus identifica o aluno e registra o embarque, evitando que um aluno siga no veículo errado.',
    delivered: [
      'Pipeline YOLOv8 → CLAHE → ArcFace com distância de cosseno (limiar 0,68)',
      'Regras de embarque, recusa e transferência com histórico',
      'MySQL em nuvem com SSL; senhas com PBKDF2',
      'App desktop PySide6 e executável Windows via PyInstaller',
    ],
    stack: ['Python', 'OpenCV', 'YOLOv8', 'DeepFace', 'MySQL', 'PySide6'],
    link: { href: 'https://www.youtube.com/watch?v=lbcazQpTB08', label: 'Ver demonstração' },
    cover: { kind: 'mock', mock: 'vision' },
  },
  {
    slug: 'safehome',
    unit: 'tech',
    client: 'SafeHome',
    title: 'Monitoramento com alerta no Telegram',
    period: '2026',
    role: 'Desenvolvimento',
    summary:
      'Câmeras residenciais com reconhecimento facial que enviam alerta com foto quando um rosto desconhecido é confirmado.',
    delivered: [
      'Webcam ou câmera IP via RTSP, com reconexão automática',
      'Confirmação em análises consecutivas para evitar falso positivo',
      'API local com vídeo MJPEG ao vivo e recarga de cadastro sem reinício',
      'Persistência em PostgreSQL e painel em CustomTkinter',
    ],
    stack: ['Python', 'OpenCV', 'PostgreSQL', 'Telegram Bot API', 'RTSP'],
    link: { href: 'https://github.com/LuizVilarinho0/safehome', label: 'Código no GitHub' },
    cover: { kind: 'mock', mock: 'alert' },
  },
  {
    slug: 'nova-singular',
    unit: 'commerce',
    client: 'Nova Singular',
    title: 'Mídia paga para clientes de agência',
    period: '2025 – 2026',
    role: 'Assistente de tráfego pago',
    summary:
      'Acompanhamento diário de campanhas de Meta Ads e Google Ads, ligando métricas de mídia ao resultado comercial.',
    delivered: [
      'Monitoramento diário de CTR, CPC, CPA e ROAS',
      'Apoio a otimizações de público, criativo e orçamento',
      'Análise de desempenho e reporte ao cliente',
    ],
    stack: ['Meta Ads', 'Google Ads', 'Análise de desempenho'],
    cover: { kind: 'mock', mock: 'ads' },
  },
  {
    slug: 'file-organizer',
    unit: 'tech',
    client: 'Open source',
    title: 'Automação de organização de arquivos',
    period: '2026',
    role: 'Desenvolvimento',
    summary: 'CLI em Python que classifica arquivos de um diretório em subpastas por tipo, com simulação antes de mover.',
    delivered: [
      'Tipagem completa com mypy --strict',
      'Testes com pytest para lógica, CLI e casos de borda',
      'Modo --dry-run e tratamento de nomes duplicados',
    ],
    stack: ['Python', 'pytest', 'mypy', 'argparse'],
    link: { href: 'https://github.com/LuizVilarinho0/File-Organizer-Automa-o-de-Arquivos', label: 'Código no GitHub' },
    cover: { kind: 'mock', mock: 'terminal' },
  },
];

/* ------------------------------------------------------------------ */
/* Planos e preços                                                     */
/* Referência de mercado (2026): assessorias de marketplace entre      */
/* R$ 2 mil e R$ 6 mil/mês; sites institucionais entre R$ 2,5 mil e    */
/* R$ 15 mil; landing pages entre R$ 1,5 mil e R$ 5 mil.               */
/* ------------------------------------------------------------------ */

export type Plan = {
  name: string;
  forWho: string;
  price: string;
  prefix?: string;
  period: string;
  extra?: string;
  includes: string[];
  sla: string;
  cta: string;
  message: string;
  featured?: boolean;
};

export const pricing: { id: 'commerce' | 'tech'; label: string; note: string; plans: Plan[] }[] = [
  {
    id: 'commerce',
    label: 'Commerce',
    note:
      'Valores de referência. Não incluem verba de mídia, tarifas dos marketplaces nem custos de frete. Contrato mensal com aviso prévio de 30 dias, sem multa de fidelidade.',
    plans: [
      {
        name: 'Diagnóstico',
        forWho: 'Para entender onde a operação perde margem antes de contratar a gestão.',
        price: '1.490',
        period: 'pagamento único',
        includes: [
          'Auditoria de até 2 canais e 200 SKUs',
          'Margem de contribuição por SKU e por canal',
          'Análise de anúncios, Ads e reputação',
          'Plano de ação de 90 dias priorizado por impacto',
          'Reunião de apresentação de 1 h',
        ],
        sla: 'Entrega em 7 dias úteis',
        cta: 'Agendar diagnóstico',
        message: 'Olá! Tenho interesse no Diagnóstico de operação (R$ 1.490).',
      },
      {
        name: 'Gestão Essencial',
        forWho: 'Para operações em um marketplace que precisam de rotina e método.',
        price: '2.490',
        period: '/mês',
        includes: [
          '1 marketplace, até 150 SKUs ativos',
          'Cadastro, otimização e precificação',
          'Gestão de Ads com meta de TACOS',
          'Reputação e atendimento pós-venda',
          'Relatório mensal de indicadores',
        ],
        sla: 'Reunião mensal · resposta em até 1 dia útil',
        cta: 'Contratar Essencial',
        message: 'Olá! Tenho interesse no plano Gestão Essencial (R$ 2.490/mês).',
      },
      {
        name: 'Gestão Multicanal',
        forWho: 'Para quem vende em vários canais e quer um único responsável pela operação.',
        price: '4.490',
        period: '/mês',
        includes: [
          'Até 3 marketplaces, até 500 SKUs ativos',
          'Tudo do Essencial, em todos os canais',
          'Full / FBA e planejamento de reposição',
          'Dashboard de vendas, margem e Ads atualizado',
          'Automações de preço e alertas de estoque',
        ],
        sla: 'Reunião quinzenal · resposta no mesmo dia útil',
        cta: 'Contratar Multicanal',
        message: 'Olá! Tenho interesse no plano Gestão Multicanal (R$ 4.490/mês).',
        featured: true,
      },
      {
        name: 'Performance',
        forWho: 'Para operações acima de R$ 150 mil/mês que preferem remuneração ligada ao resultado.',
        prefix: 'a partir de',
        price: '1.990',
        period: '/mês',
        extra: '+ 3% sobre o faturamento gerido',
        includes: [
          'Escopo do Multicanal, canais ilimitados',
          'Metas trimestrais definidas em contrato',
          'Revisão do percentual a cada 6 meses',
          'Acesso direto ao fundador',
        ],
        sla: 'Reunião semanal · canal dedicado',
        cta: 'Falar sobre Performance',
        message: 'Olá! Quero entender o modelo Performance (fee + percentual sobre vendas).',
      },
    ],
  },
  {
    id: 'tech',
    label: 'Tech',
    note:
      'Valores de referência. Pagamento em 50% na aprovação e 50% na entrega, ou parcelado em até 6x. Domínio e hospedagem de terceiros são contratados em nome do cliente.',
    plans: [
      {
        name: 'Landing Page',
        forWho: 'Para campanhas, lançamentos e captação de leads.',
        prefix: 'a partir de',
        price: '2.490',
        period: 'projeto',
        includes: [
          '1 página com até 7 seções, layout sob medida',
          'Responsiva, Lighthouse 90+',
          'Formulário ou WhatsApp com eventos GA4',
          'SEO on-page e Open Graph',
          '2 rodadas de ajustes',
        ],
        sla: 'Entrega em 10 a 15 dias úteis',
        cta: 'Orçar landing page',
        message: 'Olá! Quero orçar uma Landing Page.',
      },
      {
        name: 'Site Institucional',
        forWho: 'Para empresas que precisam de presença digital profissional e indexável.',
        prefix: 'a partir de',
        price: '5.900',
        period: 'projeto',
        includes: [
          'Até 8 páginas ou seções, design exclusivo',
          'HTML pré-renderizado e dados estruturados',
          'Core Web Vitals no verde',
          'GA4, Search Console e pixel configurados',
          'Treinamento e 30 dias de suporte',
        ],
        sla: 'Entrega em 20 a 30 dias úteis',
        cta: 'Orçar site institucional',
        message: 'Olá! Quero orçar um Site Institucional.',
        featured: true,
      },
      {
        name: 'Sistema / CRM',
        forWho: 'Para processos que já não cabem em planilha: vendas, pedidos, cadastro.',
        prefix: 'a partir de',
        price: '18.000',
        period: 'projeto',
        includes: [
          'Levantamento de requisitos e protótipo navegável',
          'Módulos sob medida com perfis de acesso',
          'Banco relacional, backups e trilha de auditoria',
          'Dashboards gerenciais',
          'Entrega por sprints de 2 semanas',
        ],
        sla: 'Projetos de 6 a 12 semanas',
        cta: 'Orçar sistema',
        message: 'Olá! Quero orçar um Sistema / CRM sob medida.',
      },
      {
        name: 'Sustentação',
        forWho: 'Para manter site ou sistema seguro, atualizado e evoluindo.',
        prefix: 'a partir de',
        price: '390',
        period: '/mês',
        includes: [
          'Monitoramento de disponibilidade',
          'Atualizações de segurança e dependências',
          'Até 4 h de ajustes por mês',
          'Backups verificados',
        ],
        sla: 'Correções críticas em até 24 h',
        cta: 'Contratar sustentação',
        message: 'Olá! Tenho interesse no plano de Sustentação.',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Método                                                              */
/* ------------------------------------------------------------------ */

export const steps = [
  {
    code: 'D+0',
    title: 'Imersão',
    text: 'Acesso às contas, ERP e planilhas. Entrevista com o responsável pelo negócio e mapeamento do processo atual.',
  },
  {
    code: 'D+7',
    title: 'Diagnóstico',
    text: 'Margem de contribuição por SKU e canal, qualidade de anúncios, eficiência de Ads e gargalos operacionais.',
  },
  {
    code: 'D+10',
    title: 'Plano de 90 dias',
    text: 'Ações priorizadas por impacto em receita e margem, com metas mensuráveis e responsáveis definidos.',
  },
  {
    code: 'D+30',
    title: 'Execução e automação',
    text: 'Operação diária em andamento. Tarefas repetitivas viram rotinas automáticas e os dados chegam a um painel único.',
  },
  {
    code: 'Mensal',
    title: 'Reporte e revisão',
    text: 'Relatório de indicadores, comparação com as metas e ajuste do plano para o ciclo seguinte.',
  },
];

/* ------------------------------------------------------------------ */
/* Sobre                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  // Para trocar a foto, salve o arquivo em public/img/ (proporção 4:5, ex.: 960 x 1200 px) e ajuste o caminho.
  photo: '/img/luiz-vilarinho.webp',
  role: 'Fundador · Head de Operações e Engenharia',
  paragraphs: [
    'A VLR Commerce & Tech nasceu de uma constatação prática: a maioria das operações de e-commerce perde margem em processos manuais que poderiam ser automatizados, e a maioria das software houses não conhece a rotina de um marketplace.',
    'Luiz Vilarinho atua há mais de três anos em operações de marketplace, da assistência em e-commerce à gestão da própria loja, e cursa Ciência da Computação. Essa combinação define o método da empresa: decisões baseadas em dados e todo processo repetitivo tratado como candidato a automação.',
  ],
  facts: [
    { term: 'Experiência', value: '3+ anos em operação de marketplaces' },
    { term: 'Formação', value: 'Ciência da Computação (UNIP, em curso)' },
    { term: 'Base', value: 'Ribeirão Preto, SP · atendimento remoto' },
  ],
  timeline: [
    { period: '2026 – atual', org: 'Nobre Brasil', what: 'E-commerce, CRM e site institucional' },
    { period: '2025 – atual', org: 'MLJ Store', what: 'Operação própria em marketplaces' },
    { period: '2025 – 2026', org: 'Nova Singular', what: 'Tráfego pago: Meta Ads e Google Ads' },
    { period: '2023 – 2025', org: 'Tec Print', what: 'Operação de Shopee, Amazon, Magalu e B2W' },
  ],
  stack: {
    Commerce: ['Mercado Livre', 'Shopee', 'Amazon', 'Magalu', 'Bling', 'Mercado Ads', 'Meta Ads', 'Google Ads'],
    Engenharia: ['TypeScript', 'React', 'Vite', 'Python', 'PHP', 'SQL', 'PostgreSQL', 'MySQL', 'OpenCV', 'REST APIs'],
  },
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faq = [
  {
    q: 'Com quais canais vocês trabalham?',
    a: 'Mercado Livre, Shopee, Amazon, Magalu, Americanas e lojas próprias. A operação pode ser em um canal ou em vários simultaneamente, integrada ao seu ERP.',
  },
  {
    q: 'Existe fidelidade ou multa de cancelamento?',
    a: 'Não. Os planos de gestão são mensais, com aviso prévio de 30 dias. O plano Performance tem metas trimestrais, mas também pode ser encerrado com aviso prévio.',
  },
  {
    q: 'As contas e o código continuam sendo meus?',
    a: 'Sim. As contas dos marketplaces permanecem no CNPJ do cliente, com acesso via usuário de colaborador. Em projetos de tecnologia, o código-fonte é entregue no repositório do cliente.',
  },
  {
    q: 'Minha loja está parada. Ainda faz sentido?',
    a: 'Sim. Reativação é uma das frentes em que mais atuamos. Na Tec Print, quatro marketplaces parados passaram de R$ 2 milhões em faturamento no primeiro ano.',
  },
  {
    q: 'A verba de Ads está incluída no valor?',
    a: 'Não. A gestão das campanhas está incluída; o investimento em mídia é pago pelo cliente diretamente à plataforma e definido em conjunto no plano de ação.',
  },
  {
    q: 'Vocês desenvolvem para empresas que não são e-commerce?',
    a: 'Sim. Sites institucionais, CRMs e sistemas internos atendem qualquer segmento. A Nobre Brasil, indústria de aquecimento e automação, é um exemplo.',
  },
  {
    q: 'Em quanto tempo aparecem resultados?',
    a: 'Ajustes de preço e anúncio costumam mostrar efeito nas primeiras semanas. Ganhos estruturais, como reputação, Full e escala de Ads, aparecem entre 60 e 90 dias. O plano de ação define metas para cada horizonte.',
  },
  {
    q: 'Como é a forma de pagamento?',
    a: 'Gestão: boleto ou PIX mensal. Projetos de tecnologia: 50% na aprovação e 50% na entrega, ou parcelado em até 6x. Emitimos nota fiscal.',
  },
];

/* ------------------------------------------------------------------ */
/* Formulário de contato                                               */
/* ------------------------------------------------------------------ */

export const contactForm = {
  services: [
    'Diagnóstico de operação',
    'Gestão de marketplaces',
    'Landing page',
    'Site institucional',
    'Sistema / CRM sob medida',
    'Automação ou integração',
    'Outro',
  ],
  revenue: ['Ainda não vendo', 'Até R$ 30 mil/mês', 'R$ 30 a 100 mil/mês', 'R$ 100 a 500 mil/mês', 'Acima de R$ 500 mil/mês'],
};
