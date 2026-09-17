export type MoneyCOP = number;

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: MoneyCOP;
  duration: string;
  level: string;
  featured: boolean;
  accent: string;
  outcomes: string[];
  syllabus: { title: string; lessons: string[] }[];
  includes: string[];
  faq: { q: string; a: string }[];
  ejemplo?: boolean;
}

export interface AdvisoryTier {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: MoneyCOP;
  duration: string;
  featured: boolean;
  includes: string[];
  idealFor: string;
  ctaLabel: string;
  ejemplo?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: MoneyCOP;
  category: string;
  featured: boolean;
  accent: string;
  features: string[];
  specs: { label: string; value: string }[];
  ejemplo?: boolean;
}

export interface CartItem {
  id: string;
  type: "course" | "product";
  slug: string;
  name: string;
  price: MoneyCOP;
  quantity: number;
}
