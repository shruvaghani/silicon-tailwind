const icon1 = 'assets/img/landing/software-agency-3/icons/01.svg';
const icon2 = 'assets/img/landing/software-agency-3/icons/02.svg';
const icon3 = 'assets/img/landing/software-agency-3/icons/03.svg';
const icon4 = 'assets/img/landing/software-agency-3/icons/04.svg';

const industryImg1 = 'assets/img/landing/software-agency-3/industries/01.jpg';
const industryImg2 = 'assets/img/landing/software-agency-3/industries/02.jpg';
const industryImg3 = 'assets/img/landing/software-agency-3/industries/03.jpg';

const angulardark = 'assets/img/landing/software-agency-3/technologies/angular-dark.svg';
const angularlight = 'assets/img/landing/software-agency-3/technologies/angular-light.svg';
const jsdark = 'assets/img/landing/software-agency-3/technologies/js-dark.svg';
const jslight = 'assets/img/landing/software-agency-3/technologies/js-light.svg';
const nodedark = 'assets/img/landing/software-agency-3/technologies/node-dark.svg';
const nodelight = 'assets/img/landing/software-agency-3/technologies/node-light.svg';
const phpdark = 'assets/img/landing/software-agency-3/technologies/php-dark.svg';
const phplight = 'assets/img/landing/software-agency-3/technologies/php-light.svg';
const pythondark = 'assets/img/landing/software-agency-3/technologies/python-dark.svg';
const pythonlight = 'assets/img/landing/software-agency-3/technologies/python-light.svg';
const reactdark = 'assets/img/landing/software-agency-3/technologies/react-dark.svg';
const reactlight = 'assets/img/landing/software-agency-3/technologies/react-light.svg';

const projectImg1 = 'assets/img/landing/software-agency-3/projects/01.png';
const projectImg2 = 'assets/img/landing/software-agency-3/projects/02.png';
const projectImg3 = 'assets/img/landing/software-agency-3/projects/03.png';

const brandImg1 = 'assets/img/brands/01.svg';
const brandImg2 = 'assets/img/brands/02.svg';
const brandImg3 = 'assets/img/brands/03.svg';
const brandImg4 = 'assets/img/brands/04.svg';

const blogImg1 = 'assets/img/blog/05.jpg';
const blogImg2 = 'assets/img/blog/07.jpg';
const blogImg3 = 'assets/img/blog/08.jpg';

export type ServiceType = {
  icon: string;
  title: string;
  description: string;
};

export const servicesData: ServiceType[] = [
  {
    icon: icon1,
    title: 'Software Development',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida.',
  },
  {
    icon: icon2,
    title: 'App Development',
    description: 'Enim vehicula integer mattis morbi risus. Hendrerit pharetra arcu quam viverra.',
  },
  {
    icon: icon3,
    title: 'Support & Maintenance',
    description:
      'Turpis ultrices lacinia ut placerat dignissim morbi. Amet lectus sed tortor in elit adipiscing magnis.',
  },
  {
    icon: icon4,
    title: 'Software QA & Testing',
    description: 'Amet felis viverra proin feugiat. Eget metus metus lorem dolor pellentesque.',
  },
];

export type IndustryType = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const industriesData: IndustryType[] = [
  {
    id: 'industry-1',
    title: 'Finance and insurance',
    description:
      'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta lacus diam. Et enim ultrices nunc, nunc. In iaculis venenatis at sit.',
    image: industryImg1,
  },
  {
    id: 'industry-2',
    title: 'Startup and technology',
    description:
      'Interdum amet lobortis viverra et sapien aliquam nunc amet. Bibendum eu pellentesque sit risus leo commodo. Nibh dictum tellus lectus in risus eget cursus vitae nisi lacinia aliquam utuismod cras pellentesque.',
    image: industryImg2,
  },
  {
    id: 'industry-3',
    title: 'E-commerce',
    description:
      'Egestas nunc eleifend lacinia suspendisse bibendum ultrices risus. Facilisis neque eleifend diam orci id. Iaculis dignissim sed malesuada porttitor ac iaculis nullam donec sed volutpat quis vulputate sollicitudin tincidunt.',
    image: industryImg3,
  },
];

export type TechnologyType = {
  imgLight: string;
  imgDark: string;
  name: string;
  width: number;
};

export const technologiesData: TechnologyType[] = [
  {
    imgLight: jslight,
    imgDark: jsdark,
    name: 'Javascript',
    width: 12,
  },
  {
    imgLight: nodelight,
    imgDark: nodedark,
    name: 'Node.JS',
    width: 20,
  },
  {
    imgLight: reactlight,
    imgDark: reactdark,
    name: 'React',
    width: 25,
  },
  {
    imgLight: phplight,
    imgDark: phpdark,
    name: 'PHP',
    width: 14,
  },
  {
    imgLight: angularlight,
    imgDark: angulardark,
    name: 'Angular',
    width: 12,
  },
  {
    imgLight: pythonlight,
    imgDark: pythondark,
    name: 'Python',
    width: 12,
  },
];
export type ProjectType = {
  category: string;
  title: string;
  description: string;
  image: string;
  services: string[];
};

export const projectsData: ProjectType[] = [
  {
    category: 'Mobile App',
    title: 'Task management app',
    description:
      'Odio mus adipiscing nunc sed viverra massa aliquam sit vestibulum maecenas arcu adipiscing tincidunt at velit pharetra varius sit.',
    image: projectImg1,
    services: ['Product Strategy', 'Front end Development', 'Systems Design', 'Web Development'],
  },
  {
    category: 'Landing Page',
    title: 'Landing page for electric scooters',
    description:
      'Vitae non luctus rhoncus ipsum feugiat luctus ornare. Pretium nulla sed quis duis tristique orci. Odio in pellentesque urna sit facilisi convallis vel tempus.',
    image: projectImg2,
    services: ['Product Strategy', 'Front end Development', 'Systems Design', 'Web Development'],
  },
  {
    category: 'Web App',
    title: 'Сrypto market dashboard',
    description:
      'Donec donec ultricies feugiat imperdiet enim cras eget enim elementum eget ultrices praesent pretium morbi.',
    image: projectImg3,
    services: ['Front end Development', 'Systems Design', 'Web Development'],
  },
];

export type ProcessType = {
  title: string;
  description: string;
};

export const processData: ProcessType[] = [
  {
    title: 'Prototype in 24 hrs',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id. Imperdiet elit integer elit.',
  },
  {
    title: 'MVP within two weeks',
    description:
      'Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.',
  },
  {
    title: 'Kickstart development',
    description:
      'Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.',
  },
  {
    title: '24/7 Tech support',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id. Imperdiet elit integer elit.',
  },
];

export const brandData:string[] = [brandImg1, brandImg2, brandImg3, brandImg4];

export type BlogType= {
  image: string;
  category: string;
  time: string;
  title: string;  
}

export const blogsData: BlogType[] = [
  {
    image: blogImg1,
    category: 'Business',
    time: '12 hours ago',
    title: 'How to check the website before releasing?'
  },
  {
    image: blogImg2,
    category: 'Digital',
    time: '11 hours ago',
    title: 'Inclusive Marketing: Why and How Does it Work?'
  },
  {
    image: blogImg3,
    category: 'Development',
    time: '10 hours ago',
    title: 'Your Guide to Optimising A JavaScript-enabled Website'
  },
];

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
