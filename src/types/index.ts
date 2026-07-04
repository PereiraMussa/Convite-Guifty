export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
}

export interface CeremonyDetail {
  id: string;
  icon: "calendar" | "clock" | "pin" | "suit" | "food";
  label: string;
  value: string;
}

export interface RSVPFormData {
  name: string;
  phone: string;
  guests: number;
  message: string;
}

export interface RSVPFormErrors {
  name?: string;
  phone?: string;
  guests?: string;
}

export type IntroPhase =
  | "dark"
  | "envelope-idle"
  | "envelope-opening"
  | "letter-out"
  | "couple-reveal"
  | "done";
