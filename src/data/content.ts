import type { TimelineEvent, GalleryImage, CeremonyDetail } from "../types";

/**
 * ------------------------------------------------------------------
 * TUDO NESTE FICHEIRO FOI PENSADO PARA SER EDITADO FACILMENTE.
 * Troque nomes, datas, textos e imagens sem tocar nos componentes.
 * ------------------------------------------------------------------
 */

export const COUPLE = {
  bride: "Amélia",
  groom: "Guifty",
  fullBride: "Amélia Guambe",
  fullGroom: "Guifty Muaqueia",
  heroImage:
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1887&auto=format&fit=crop",
  invitationMessage:
    "Depois de tantas histórias, chegou o momento de escrevermos o capítulo mais bonito das nossas vidas.",
};

// Data e hora do casamento (usada pela contagem regressiva)
export const WEDDING_DATE = new Date("2026-10-14T15:00:00");

export const WEDDING_DATE_LABEL = "14 de Outubro de 2026, às 15h00";
export const WEDDING_LOCATION_LABEL = "Nacala, Moçambique";

export const WHATSAPP_NUMBER = "258845664271"; // formato internacional sem "+"

export const TIMELINE: TimelineEvent[] = [
  {
    id: "encontro",
    date: "Março 2025",
    title: "Primeiro encontro",
    description:
      "Um café na Baixa que devia durar uma hora e durou a tarde inteira. Já não conseguimos parar de falar desde então.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1770&auto=format&fit=crop",
  },
  {
    id: "namoro",
    date: "Agosto 2025",
    title: "Primeiro namoro",
    description:
      "Entre pôr-do-sol na Costa do Sol e longas conversas ao telefone, decidimos que queríamos caminhar juntos.",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1770&auto=format&fit=crop",
  },
  {
    id: "pedido",
    date: "Junho 2025",
    title: "O pedido",
    description:
      "Debaixo das luzes da cidade, um joelho no chão e uma pergunta que já sabíamos a resposta há muito tempo.",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: "grande-dia",
    date: WEDDING_DATE_LABEL,
    title: "O grande dia",
    description:
      "O dia em que, rodeados de quem amamos, prometemos escrever cada capítulo seguinte um ao lado do outro.",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1780&auto=format&fit=crop",
  },
];

export const GALLERY: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1780&auto=format&fit=crop",
    alt: "Casal sorrindo ao entardecer",
    span: "tall",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1887&auto=format&fit=crop",
    alt: "Mãos entrelaçadas com anéis",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1887&auto=format&fit=crop",
    alt: "Detalhe do buquê de flores",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1887&auto=format&fit=crop",
    alt: "Retrato do casal",
  },
];

export const CEREMONY_DETAILS: CeremonyDetail[] = [
  { id: "date", icon: "calendar", label: "Data", value: WEDDING_DATE_LABEL },
  { id: "time", icon: "clock", label: "Hora", value: "15h00" },
  {
    id: "place",
    icon: "pin",
    label: "Local",
    value: "Jardim Vitória, Av. Julius Nyerere, Nacala",
  },
  { id: "reception", icon: "food", label: "Receção", value: "Logo após a cerimónia, no mesmo local" },
];

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Jardim+dos+Professores+Nacala&output=embed";

export const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Jardim+dos+Professores+Nacala";

export const MUSIC_TRACK_URL = "/audio/romantic-instrumental.mp3";
