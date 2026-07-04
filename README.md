# Convite Digital — Amélia & Nelson

Landing page de convite de casamento interativo, construída com React 19 + Vite + TypeScript + Tailwind CSS v4 + Framer Motion.

## Como executar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/     # Todos os blocos visuais (Intro, Hero, Countdown, Timeline, Gallery...)
  data/content.ts # Único ficheiro que precisa de editar para trocar nomes, data, fotos e textos
  hooks/          # useCountdown (contagem regressiva) e useAudio (música de fundo)
  types/          # Tipos TypeScript partilhados
public/
  audio/          # Coloque aqui a música instrumental (romantic-instrumental.mp3)
```

## O que personalizar

1. **`src/data/content.ts`** — nomes do casal, data e hora do casamento, número de WhatsApp
   para o RSVP, história do casal (timeline), fotos da galeria e detalhes da cerimónia.
2. **Fotos** — troque os links do Unsplash pelas fotos reais do casal. Pode usar URLs
   externas ou importar imagens locais de `src/assets/`.
3. **Música** — adicione um ficheiro `romantic-instrumental.mp3` em `public/audio/`.
   Sem o ficheiro, o botão de música simplesmente fica silencioso (não quebra a página).
4. **Localização no mapa** — atualize `MAP_EMBED_URL` e `MAP_DIRECTIONS_URL` em
   `content.ts` com o endereço real da cerimónia.
5. **RSVP** — as confirmações são enviadas via WhatsApp (`wa.me`) para o número definido
   em `WHATSAPP_NUMBER`. Troque pelo número real antes de publicar.

## Fluxo da experiência

1. Tela escura → luz suave → envelope elegante com selo dourado.
2. Clique em "Abrir Convite" → o selo quebra, a aba abre, a carta desliza para fora.
3. Transição cinematográfica para a foto do casal em tela cheia.
4. Clique em "Ver Convite" → entra na landing page com scroll (Hero, Contagem Regressiva,
   Nossa História, Galeria, Cerimónia, Localização, RSVP e Rodapé).

## Publicar online

O projeto está pronto para deploy em Vercel, Netlify ou GitHub Pages: basta rodar
`npm run build` e publicar a pasta `dist/`.
