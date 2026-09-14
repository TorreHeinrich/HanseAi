export interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export type ModalViewType = 'contact' | 'impressum' | 'datenschutz' | null;

export interface SectionContent {
  id?: string;
  label?: string;
  headingLg?: string;
  headingXl: string;
  description: string;
  buttonText?: string;
  buttonTopic?: string;
  imageUrl: string;
  imageAlt: string;
  isHero?: boolean;
  promises?: string[];
  isContact?: boolean;
}
