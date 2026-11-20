# VLR Commerce & Tech · site institucional

React + TypeScript (Vite), com Lenis para a rolagem suave.

Paleta: `#051F20` `#0B2B26` `#163832` `#235347` `#8EB69B` `#DAF1DE`.
Fontes: Archivo expandida (títulos grandes), Satoshi (texto, via Fontshare) e Geist Mono (rótulos).

Efeitos: nome gigante com a foto sobreposta que se abre ao rolar, blocos claros com entalhe,
letras que entram uma a uma, botões com texto que rola, lista de clientes com prévia que segue o
cursor, carrossel de cases arrastável com modal de detalhes e parallax. Tudo é desligado
automaticamente para quem usa "reduzir movimento" no sistema.

## Rodar no seu computador

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Gerar a versão de produção

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`.

## Onde editar

| O que mudar | Arquivo |
| --- | --- |
| Nome da empresa, CNPJ, e-mail, redes, WhatsApp | `src/data/content.ts` (bloco `company`) |
| Textos, clientes, serviços, cases, planos e preços, método, FAQ | `src/data/content.ts` |
| Depoimentos (a seção só aparece quando houver pelo menos um) | `testimonials` em `src/data/content.ts` |
| Cores, fontes, espaçamentos | `src/styles.css` (bloco `:root` no topo) |
| Efeitos de rolagem | `src/hooks/useScrollFx.ts` e `src/hooks/useSmoothScroll.ts` |
| Capas ilustrativas dos cases | `src/components/CaseCover.tsx` |
| Calculadora de margem | `src/components/MarginCalculator.tsx` |
| Ordem das seções | `src/App.tsx` |
| Título da aba, descrição para o Google, dados estruturados | `index.html` |

## Antes de publicar

- [ ] Conferir a descrição do **CRM da Nobre Brasil** em `content.ts` (módulos e tecnologias).
- [ ] Preencher `company.cnpj` quando o CNPJ estiver ativo.
- [ ] Revisar os preços dos planos (`pricing` em `content.ts`).
- [ ] Adicionar depoimentos reais, com autorização dos clientes (`testimonials`).
- [ ] Trocar a foto pela versão de terno, se gerar uma (veja abaixo).

## Foto

A foto em uso (`public/img/luiz-vilarinho-duotone.webp`) é a original com o fundo removido
e duotone na paleta verde. O rosto não foi alterado. Também há versões em preto e branco
(`luiz-vilarinho.webp`) e colorida (`luiz-vilarinho-cor.webp`) na mesma pasta.

Para a versão de terno com braços cruzados, use um editor de imagem com IA
(por exemplo, Gemini ou ChatGPT), envie a foto original e use este prompt:

> Use a foto enviada como referência exata do rosto. Mantenha 100% o rosto, a pele, o cabelo
> cacheado, a barba e a cor dos olhos, sem suavizar, sem retocar e sem alterar traços.
> Retrato profissional de meio corpo, homem de braços cruzados, vestindo terno preto slim
> de corte moderno e camisa preta sem gravata. Fundo preto liso. Iluminação de estúdio
> lateral suave a 45 graus, com leve luz de recorte nos ombros. Alto contraste, estilo
> retrato corporativo editorial. Enquadramento vertical 4:5, cabeça no terço superior,
> olhando para a câmera, expressão séria e confiante. Fotorrealista.

Salve o resultado em `public/img/` (proporção 4:5, por exemplo 960 x 1200 px)
e ajuste `about.photo` em `src/data/content.ts`.

## Publicar

Funciona em qualquer hospedagem de site estático:

- **Render** (Static Site): comando de build `npm run build`, pasta de publicação `dist`.
- **Vercel** ou **Netlify**: importe o repositório. Elas detectam o Vite sozinhas.

Depois, aponte o seu domínio nas configurações da hospedagem.
