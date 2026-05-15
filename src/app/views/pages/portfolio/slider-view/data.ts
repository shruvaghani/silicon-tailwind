const projectImg1 = 'assets/img/portfolio/slider/01.jpg';
const projectImg2 = 'assets/img/portfolio/slider/02.jpg';
const projectImg3 = 'assets/img/portfolio/slider/03.jpg';

export type PortfolioProjectType = {
  id: string;
  title: string;
  description: string;
  client: string;
  category: string;
  date: string;
  image: string;
  link: string;
};

export const portfolioProjectsData: PortfolioProjectType[] = [
  {
    id: 'project-1',
    title: '3D Shape Illustration',
    description:
      'Proin odio elit fringilla pellentesque erat sapien, cursus id. Sed mi semper amet fringilla. Eget morbi arcu ac vestibulum sodales. Montes, integer lacinia amet tristique tincidunt.',
    client: 'Coderthemes Inc.',
    category: 'Graphic Design',
    date: '29 November 2023',
    image: projectImg1,
    link: '/portfolio/single-project',
  },
  {
    id: 'project-2',
    title: 'Scene of Human Head',
    description:
      'Sed vehicula nibh quis ipsum gravida, sit amet convallis est sodales. Integer pulvinar suscipit ipsum, sed facilisis libero vehicula semper. Donec vitae dolor fermentum lorem pretium condimentum.',
    client: 'Lorem Ipsum Ltd.',
    category: 'Motion Design',
    date: '15 October 2023',
    image: projectImg2,
    link: '/portfolio/single-project',
  },
  {
    id: 'project-3',
    title: 'Blue Whale Shape',
    description:
      'Sed vehicula nibh quis ipsum gravida, sit amet convallis est sodales. Integer pulvinar suscipit ipsum, sed facilisis libero vehicula semper. Donec vitae dolor fermentum lorem pretium condimentum.',
    client: 'Great Company LLC',
    category: '3D Design',
    date: '18 September 2023',
    image: projectImg3,
    link: '/portfolio/single-project',
  },
];
