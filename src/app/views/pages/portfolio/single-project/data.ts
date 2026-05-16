const related01 = 'assets/img/portfolio/single/related01.jpg'
const related02 = 'assets/img/portfolio/single/related02.jpg'
const related03 = 'assets/img/portfolio/single/related03.jpg'

export type statsType = {
  count: string;
  title: string;
  subtitle: string;
};

export const statsData: statsType[] = [
  {
    count: '+1,200',
    title: 'Requests',
    subtitle: 'per Week',
  },
  {
    count: '+760',
    title: 'New Clients',
    subtitle: 'per Month',
  },
  {
    count: '+480',
    title: 'Remote',
    subtitle: 'Sales Experts',
  },
];

export type PortfolioType = {
  image: string
  title: string
  category: string
  link: string
}

export const portfolioData: PortfolioType[] = [
  {
    image: related01,
    title: '3D Shape Illustration',
    category: '3D Design / Illustratio / Art',
    link: '/portfolio/single-project',
  },
  {
    image: related02,
    title: 'Mobile Banking App',
    category: 'Mobile App Desig / UI / UX',
    link: '/portfolio/single-project',
  },
  {
    image: related03,
    title: 'Big Blue Whale Shape',
    category: '3D Pollygonal Shape / Graphic Design / Art',
    link: '/portfolio/single-project',
  },
]

export type FooterLink = {
  text: string;
  cssClass?: string;
};

export const usefulLinks: string[] = ['Home', 'Features', 'Integrations', 'Our Clients', 'Blog'];

export const legalLinks: FooterLink[] = [
  { text: 'Terms & Conditions', cssClass: 'text-nowrap' },
  { text: 'Privacy Policy' },
];

export const socialLinks: string[] = ['Facebook', 'LinkedIn', 'Twitter', 'Instagram'];
