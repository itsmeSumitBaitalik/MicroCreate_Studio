export type NavLink = {
  label: string;
  to: string;
};

export const navLinks: NavLink[] = [
{ label: 'Home', to: '/' },
{ label: 'About Us', to: '/about' },
{ label: 'Services', to: '/services' },
{ label: 'Work', to: '/work' },
{ label: 'Contact Us', to: '/contact' }];


export const LOGO_SRC = "/Company_logo.webp";