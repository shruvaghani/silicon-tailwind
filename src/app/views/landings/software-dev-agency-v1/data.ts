const cmsIcon = 'assets/img/services/icons/cms.svg';
const rocketIcon = 'assets/img/services/icons/rocket.svg';
const mobileAppIcon = 'assets/img/services/icons/mobile-app.svg';
const analyticsIcon = 'assets/img/services/icons/analytics.svg';
const webSearchIcon = 'assets/img/services/icons/web-search.svg';
const timerIcon = 'assets/img/services/icons/timer.svg';

const caseStudyBg01 = 'assets/img/landing/software-agency-1/case-study01.jpg';
const caseStudyBg02 = 'assets/img/landing/software-agency-1/case-study02.jpg';

const caseStudyLogo01 = 'assets/img/landing/software-agency-1/case-study-logo01.png';
const caseStudyLogo02 = 'assets/img/landing/software-agency-1/case-study-logo02.png';

const feature01 = 'assets/img/landing/software-agency-1/features/01.svg';
const feature02 = 'assets/img/landing/software-agency-1/features/02.svg';
const feature03 = 'assets/img/landing/software-agency-1/features/03.svg';
const feature04 = 'assets/img/landing/software-agency-1/features/04.svg';

const avatar01 = 'assets/img/avatar/01.jpg';
const avatar05 = 'assets/img/avatar/05.jpg';
const avatar06 = 'assets/img/avatar/06.jpg';

const brand1 = 'assets/img/brands/01.svg';
const brand2 = 'assets/img/brands/02.svg';
const brand3 = 'assets/img/brands/03.svg';
const brand4 = 'assets/img/brands/04.svg';
const brand5 = 'assets/img/brands/05.svg';
const brand6 = 'assets/img/brands/06.svg';

export type HeroSlideType = {
  title: string;
  description: string;
  buttonText: string;
};

export const heroSlidesData: HeroSlideType[] = [
  {
    title: 'The Best IT Solutions for Your Business',
    description:
      'We provide the wide range of high quality IT services and best practices solutions to our customers making their business better.',
    buttonText: 'Start your project',
  },
  {
    title: 'Award-Winning Software Development',
    description:
      'We build complex web, desktop and mobile applications. With us you get quality software and perfect service every time.',
    buttonText: 'View case studies',
  },
  {
    title: '24/7 Tech & Business Support',
    description:
      "We ensure lifetime support of all applications we've built. Our support department is a team of professionals who will assist you 24/7.",
    buttonText: 'Work with us',
  },
];

export type SocialLinkType = {
  icon: string;
  hoverClass: string;
  ariaLabel: string;
};

export const socialLinksData: SocialLinkType[] = [
  {
    icon: 'tabler:brand-linkedin-filled',
    hoverClass: 'hover:bg-sky-600',
    ariaLabel: 'LinkedIn',
  },
  {
    icon: 'tabler:brand-facebook-filled',
    hoverClass: 'hover:bg-blue-400',
    ariaLabel: 'Facebook',
  },
  {
    icon: 'tabler:brand-twitter-filled',
    hoverClass: 'hover:bg-sky-400',
    ariaLabel: 'Twitter',
  },
  {
    icon: 'tabler:brand-youtube-filled',
    hoverClass: 'hover:bg-red-600',
    ariaLabel: 'YouTube',
  },
];

export type ServiceType = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const servicesData: ServiceType[] = [
  {
    title: 'Custom Software Development',
    description:
      'Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa. Aliquam, feugiat ut cum tellus, sit. Quis consectetur gravida ac ac lectus cursus egestas.',
    image: cmsIcon,
    link: '/services/single/v1',
  },
  {
    title: 'Software Integration',
    description:
      'Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget. Sit neque adipiscing malesuada blandit justo, quam.',
    image: rocketIcon,
    link: '/services/single/v1',
  },
  {
    title: 'Mobile App Development',
    description:
      'Nunc, justo, diam orci, dictum purus convallis risus. Suscipit hendrerit at egestas id id blandit interdum est. Integer fames placerat turpis pretium quis hac leo lacus. Orci, dictum nunc mus quis semper eu bibendum enim, morbi.',
    image: mobileAppIcon,
    link: '/services/single/v1',
  },
  {
    title: 'Business Analytics',
    description:
      'Gravida eget euismod tempus diam dignissim quam. Dignissim magnis blandit faucibus convallis augue nisl, etiam. Feugiat ut molestie non arcu senectus sed. Diam pellentesque sit mattis nec amet varius nunc a sed.',
    image: analyticsIcon,
    link: '/services/single/v1',
  },
  {
    title: 'Software Testing',
    description:
      'Quis rhoncus quam venenatis facilisi. Risus dis libero nisl condimentum quis. Tincidunt ultricies vulputate ornare nunc rhoncus in. Ultrices dolor eu natoque volutpat praesent curabitur ultricies.',
    image: webSearchIcon,
    link: '/services/single/v1',
  },
  {
    title: 'Project Management',
    description:
      'Massa dis morbi sagittis, tellus sit gravida. Id ut non ut in faucibus eu, ac. Tempus feugiat enim id pellentesque a sagittis vitae, convallis. Nunc, arcu enim orci ullamcorper aenean. Scelerisque eget a nibh bibendum commodo.',
    image: timerIcon,
    link: '/services/single/v1',
  },
];

export type CaseStudyType = {
  id: string;
  bgImage: string;
  logo: string;
  title: string;
  company: string;
  description: string;
  buttonText: string;
};

export const caseStudiesData: CaseStudyType[] = [
  {
    id: 'image-1',
    bgImage: caseStudyBg01,
    logo: caseStudyLogo01,
    title: 'Cashless payment case study',
    company: 'Payment Service Provider Company',
    description:
      'Aenean dolor elit tempus tellus imperdiet. Elementum, ac convallis morbi sit est feugiat ultrices. Cras tortor maecenas pulvinar nec ac justo.',
    buttonText: 'View case study',
  },
  {
    id: 'image-2',
    bgImage: caseStudyBg02,
    logo: caseStudyLogo02,
    title: 'Smart tech case study',
    company: 'Data Analytics Company',
    description:
      'Adipiscing quis a at ligula. Gravida gravida diam rhoncus cursus in. Turpis sagittis tempor gravida phasellus sapien. Faucibus donec consectetur sed id sit nisl.',
    buttonText: 'View case study',
  },
];

export type FeatureType = {
  image: string;
  title: string;
};

export const featuresData: FeatureType[] = [
  {
    image: feature01,
    title: 'Build a functional prototype in 24 hrs',
  },
  {
    image: feature02,
    title: 'Create an MVP within two weeks',
  },
  {
    image: feature03,
    title: 'Kickstart software development',
  },
  {
    image: feature04,
    title: 'Get 24/7 tech & business support',
  },
];

export type TestimonialType = {
  description: string;
  image: string;
  name: string;
  designation: string;
};

export const testimonialsData: TestimonialType[] = [
  {
    description:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.',
    image: avatar05,
    name: 'Ralph Edwards',
    designation: 'Head of Marketing at Lorem Ltd.',
  },
  {
    description:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet.',
    image: avatar06,
    name: 'Annette Black',
    designation: 'Strategic Advisor at Company LLC',
  },
  {
    description:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar.',
    image: avatar01,
    name: 'Darrell Steward',
    designation: 'Project Manager at Ipsum Ltd.',
  },
];

export const brandItems: string[] = [brand1, brand2, brand3, brand4, brand5, brand6];

export type BlogStat = {
  icon: string;
  count: number;
}

export type BlogItem = {
  category: string;
  date: string;
  title: string;
  description: string;
  link: string;
  stats: BlogStat[];
}

export const blogItemsData: BlogItem[] = [
  {
    category: 'Tech',
    date: '1 day ago',
    title: 'How the Millennial Lifestyle Changes as Service Prices Rise',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.',
    link: 'blog-single.html',
    stats: [
      {
        icon: 'lucide:thumbs-up',
        count: 2,
      },
      {
        icon: 'lucide:message-square',
        count: 0,
      },
      {
        icon: 'lucide:share-2',
        count: 3,
      },
    ],
  },
  {
    category: 'Strategy',
    date: '12 hours ago',
    title: 'Mobile App Generates Data for the Energy Management',
    description:
      'Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in.',
    link: 'blog-single.html',
    stats: [
      {
        icon: 'lucide:thumbs-up',
        count: 8,
      },
      {
        icon: 'lucide:message-square',
        count: 4,
      },
      {
        icon: 'lucide:share-2',
        count: 2,
      },
    ],
  },
  {
    category: 'Software',
    date: 'May 24, 2023',
    title: 'What the Software Stock Slump Means for the Market',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    link: 'blog-single.html',
    stats: [
      {
        icon: 'lucide:thumbs-up',
        count: 6,
      },
      {
        icon: 'lucide:message-square',
        count: 1,
      },
      {
        icon: 'lucide:share-2',
        count: 5,
      },
    ],
  },
  {
    category: 'Startups',
    date: 'Sep 3, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    description:
      'Totam, soluta placeat hic adipisci reprehenderit iusto est nulla dolorum doloremque inventore suscipit consequuntur distinctio id.',
    link: 'blog-single.html',
    stats: [
      {
        icon: 'lucide:thumbs-up',
        count: 8,
      },
      {
        icon: 'lucide:message-square',
        count: 7,
      },
      {
        icon: 'lucide:share-2',
        count: 3,
      },
    ],
  },
  {
    category: 'Technology',
    date: 'Aug 19, 2023',
    title: 'Why UX Design Matters and How it Affects Ranking',
    description:
      'Quaerat quos assumenda numquam dolorem, repellendus est, itaque sint et odio perferendis laudantium laboriosam.',
    link: 'blog-single.html',
    stats: [
      {
        icon: 'lucide:thumbs-up',
        count: 5,
      },
      {
        icon: 'lucide:message-square',
        count: 3,
      },
      {
        icon: 'lucide:share-2',
        count: 9,
      },
    ],
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
