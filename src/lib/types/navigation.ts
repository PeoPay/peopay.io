export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink extends NavItem {
  icon?: React.ReactNode;
  external?: boolean;
}

export interface NavigationProps {
  items: NavItem[];
  className?: string;
}