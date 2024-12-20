export interface InitiativeLink {
  text: string;
  url: string;
  primary?: boolean;
}

export interface Initiative {
  title: string;
  description: string;
  features: string[];
  links?: InitiativeLink[];
}