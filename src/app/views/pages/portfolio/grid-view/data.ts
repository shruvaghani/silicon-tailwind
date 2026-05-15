const portfolio1 = 'assets/img/portfolio/grid/01.jpg';
const portfolio2 = 'assets/img/portfolio/grid/02.jpg';
const portfolio3 = 'assets/img/portfolio/grid/03.jpg';
const portfolio4 = 'assets/img/portfolio/grid/04.jpg';
const portfolio5 = 'assets/img/portfolio/grid/05.jpg';
const portfolio6 = 'assets/img/portfolio/grid/06.jpg';

export type portfolioType = {
  id: string;
  target: string;
  title: string;
  selected: boolean;
};

export const portfolioTabs: portfolioType[] = [
  {
    id: 'grid-1',
    target: 'portfolio-1',
    title: 'All Works',
    selected: true,
  },
  {
    id: 'grid-2',
    target: 'portfolio-2',
    title: 'Web Design',
    selected: false,
  },
  {
    id: 'grid-3',
    target: 'portfolio-3',
    title: 'Graphic Design',
    selected: false,
  },
  {
    id: 'grid-4',
    target: 'portfolio-4',
    title: 'Branding',
    selected: false,
  },
  {
    id: 'grid-5',
    target: 'portfolio-5',
    title: 'UI / UX',
    selected: false,
  },
  {
    id: 'grid-6',
    target: 'portfolio-6',
    title: 'Motion Design',
    selected: false,
  },
];

export type PortfolioItem = {
  image: string;
  title: string;
  category: string;
  colSpan: string;
};

export const portfoliosData: PortfolioItem[] = [
  {
    image: portfolio1,
    title: 'Astronaut & Flashing Neon Lights',
    category: '3D Render / Graphic Design / Motion Design',
    colSpan: 'md:col-span-5',
  },
  {
    image: portfolio2,
    title: 'Scene of Sunglasses & Headphone on Human Head',
    category: 'NFT / Graphic Design / Art / Identity / Motion Design',
    colSpan: 'md:col-span-7',
  },
  {
    image: portfolio3,
    title: 'Plaster Antique Sculpture in a Pop Art Style',
    category: 'NFT / Graphic Design / Art / 3D',
    colSpan: 'md:col-span-7',
  },
  {
    image: portfolio4,
    title: 'Big Blue Whale Shape',
    category: '3D Pollygonal Shape / Graphic Design / Art',
    colSpan: 'md:col-span-5',
  },
  {
    image: portfolio5,
    title: '3D Shape Illustration',
    category: '3D Design / Illustration / Art',
    colSpan: 'md:col-span-5',
  },
  {
    image: portfolio6,
    title: 'Mannequin Hands Holding Phone',
    category: 'NFT / Graphic Design / Art / 3D',
    colSpan: 'md:col-span-7',
  },
];
