const aboutImg1 = 'assets/img/landing/saas-4/about/01.png';
const aboutImg2 = 'assets/img/landing/saas-4/about/02.png';
const aboutImg3 = 'assets/img/landing/saas-4/about/03.png';

const industryImg1 = 'assets/img/landing/software-agency-3/industries/01.jpg';
const industryImg2 = 'assets/img/landing/software-agency-3/industries/02.jpg';
const industryImg3 = 'assets/img/landing/software-agency-3/industries/03.jpg';

const integration01Light = 'assets/img/landing/saas-4/integrations/01-light.png';
const integration01Dark = 'assets/img/landing/saas-4/integrations/01-dark.png';

const integration02Light = 'assets/img/landing/saas-4/integrations/02-light.png';
const integration02Dark = 'assets/img/landing/saas-4/integrations/02-dark.png';

const integration03Light = 'assets/img/landing/saas-4/integrations/03-light.png';
const integration03Dark = 'assets/img/landing/saas-4/integrations/03-dark.png';

const integration04Light = 'assets/img/landing/saas-4/integrations/04-light.png';
const integration04Dark = 'assets/img/landing/saas-4/integrations/04-dark.png';

const integration05Light = 'assets/img/landing/saas-4/integrations/05-light.png';
const integration05Dark = 'assets/img/landing/saas-4/integrations/05-dark.png';

const avatar03 = 'assets/img/avatar/03.jpg';
const avatar09 = 'assets/img/avatar/09.jpg';
export type FinanceType = {
  title: string;
  icon: string;
}

export const financeData: FinanceType[] = [
  {
    title: 'Public economy',
    icon: 'tabler:circle-check',
  },
  {
    title: 'Corporate finance',
    icon: 'tabler:circle-check',
  },
  {
    title: 'Financial planning',
    icon: 'tabler:circle-check',
  },
  {
    title: 'Project finance',
    icon: 'tabler:circle-check',
  },
];

export type FeaturePoint = {
  text: string;
  icon: string;
}

export type TabItemType = {
  id: string;
  tabId: string;
  title: string;
  tabIcon: string;
  image: string;
  imageClass: string;
  description?: string;
  splitDescriptions?: string[];
  features?: FeaturePoint[];
  active?: boolean;
}

export const tabItemsData: TabItemType[] = [
  {
    id: 'project-management',
    tabId: 'project-management-tab',
    title: 'Economic Analysis',
    tabIcon: 'tabler:star',
    image: aboutImg1,
    imageClass: 'block md:ms-auto lg:w-148.5',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    active: true,
  },
  {
    id: 'remote-work',
    tabId: 'remote-work-tab',
    title: 'Investments',
    tabIcon: 'tabler:briefcase',
    image: aboutImg2,
    imageClass: 'block md:mt-8 md:ms-auto lg:w-125.5 w-84',
    splitDescriptions: [
      'It is a long established fact that a reader will be distracted by the readable content.',
      'Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio',
    ],
  },
  {
    id: 'product-release',
    tabId: 'product-release-tab',
    title: 'Corporate Finance',
    tabIcon: 'tabler:rocket',
    image: aboutImg3,
    imageClass: 'block md:mt-4 md:ms-auto lg:w-140',
    features: [
      {
        text: 'Transparent work management',
        icon: 'tabler:circle-check',
      },
      {
        text: 'Track your progress with interactive charts',
        icon: 'tabler:circle-check',
      },
      {
        text: 'Easiest way to track time spent on tasks',
        icon: 'tabler:circle-check',
      },
    ],
  },
];

export type IndustrySlideType ={
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const industrySlidesData: IndustrySlideType[] = [
  {
    id: 'industry-1',
    title: 'Finance and insurance',
    description:
      'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta lacus diam. Et enim ultrices nunc, nunc. In iaculis venenatis at sit.',
    icon: 'tabler:arrow-right',
    link: '/',
  },
  {
    id: 'industry-2',
    title: 'Startup and technology',
    description:
      'Nunc, amet et, et at habitant. Eget quis justo, metus at metus sapien. Urna quisque rutrum pharetra pulvinar vitae quam blandit non. Orci tempor cursus egestas quis orci at nisi maecenas. Enim in ultrices tortor, nibh quis sollicitudin tellus non maecenas. In libero ut semper nunc magna tortor.',
    icon: 'tabler:arrow-right',
    link: '/',
  },
  {
    id: 'industry-3',
    title: 'E-commerce',
    description:
      'Vivamus nisl sit volutpat laoreet ligula et. Nunc, duis est justo, cras ipsum vulputate eget tellus augue. Amet, sagittis ut enim nisl commodo, pharetra. Sapien imperdiet tristique interdum aliquet varius vitae facilisis vel. Erat convallis eget elit eget iaculis. Morbi id facilisis ligula odio sed amet suspendisse duis aliquet. Justo quam convallis id sed.',
    icon: 'tabler:arrow-right',
    link: '/',
  },
];
export type IndustryTabsType = {
  image: string;
  active?: boolean;
}

export const industryTabsData: IndustryTabsType[] = [
  {
    image: industryImg1,
    active: true,
  },
  {
    image: industryImg2
  },
  {
    image: industryImg3
  },
];

export type IntegrationItem = {
  lightImg: string;
  darkImg: string;
  widthClass: string;
}

export const integrationsData: IntegrationItem[] = [
    {
      lightImg: integration01Light,
      darkImg: integration01Dark,
      widthClass: 'w-38',
    },
    {
      lightImg: integration02Light,
      darkImg: integration02Dark,
      widthClass: 'w-30',
    },
    {
      lightImg: integration03Light,
      darkImg: integration03Dark,
      widthClass: 'w-34',
    },
    {
      lightImg: integration04Light,
      darkImg: integration04Dark,
      widthClass: 'w-34',
    },
    {
      lightImg: integration05Light,
      darkImg: integration05Dark,
      widthClass: 'w-38',
    },
  ];

  export type BlogStats= {
  likes: number;
  comments: number;
  shares: number;
}

export type BlogItem= {
  date: string;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  stats: BlogStats;
}

export const blogData: BlogItem[] = [
    {
      date: 'Sep 10, 2023',
      title: `A Study on Smartwatch Design Qualities and People's Preferences`,
      description:
        'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque, eget nisi, faucibus. Habitasse dui dui nibh ipsum sem amet sed fusce ipsum donec amet.',
      author: 'Esther Howard',
      authorImage: avatar03,
      stats: {
        likes: 8,
        comments: 7,
        shares: 4,
      },
    },
    {
      date: 'Sep 10, 2023',
      title: `A Study on Smartwatch Design Qualities and People's Preferences`,
      description:
        'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque, eget nisi, faucibus. Habitasse dui dui nibh ipsum sem amet sed fusce ipsum donec amet.',
      author: 'Esther Howard',
      authorImage: avatar09,
      stats: {
        likes: 8,
        comments: 7,
        shares: 4,
      },
    },
  ];

  export type PricingPlanType = {
  title: string;
  description: string;
  minPrice: number;
  maxPrice: number;
  currentPrice: number;
  isFeatured: boolean;
  outerClass: string;
  innerClass?: string;
  titleClass: string;
  priceClass: string;
  buttonClass: string;
}

export const pricingPlansData: PricingPlanType[] = [
    {
      title: 'Team',
      description: 'Best for small teams',
      minPrice: 15,
      maxPrice: 12,
      currentPrice: 15,
      isFeatured: false,
      outerClass:
        'bg-white border border-default-200 dark:border-white/14 dark:bg-white/4 lg:py-12 md:py-6 py-4 rounded-tl-md rounded-bl-md min-w-72',
      titleClass: 'text-default-900',
      priceClass: 'text-default-950',
      buttonClass:
        'inline-flex text-center border font-semibold rounded-md border-primary/40 text-primary py-3 px-8 hover:bg-primary hover:text-white transition-all',
    },
    {
      title: 'Company',
      description: 'Best for growing teams',
      minPrice: 25,
      maxPrice: 20,
      currentPrice: 25,
      isFeatured: true,
      outerClass: 'bg-primary rounded-lg p-6 min-w-72 h-full',
      innerClass:
        'bg-transparent border border-white/14 lg:py-12 md:py-6 py-4 rounded-lg',
      titleClass: 'text-white',
      priceClass: 'text-white',
      buttonClass:
        'inline-flex text-center font-semibold rounded-md bg-light text-dark py-3 px-8 hover:bg-light-hover transition-all',
    },
    {
      title: 'Enterprise',
      description: 'Best for large teams',
      minPrice: 50,
      maxPrice: 40,
      currentPrice: 50,
      isFeatured: false,
      outerClass:
        'bg-white border border-default-200 dark:border-white/14 dark:bg-white/4 lg:py-12 md:py-6 py-4 min-w-72 rounded-tr-md rounded-br-md',
      titleClass: 'text-default-900',
      priceClass: 'text-default-950',
      buttonClass:
        'inline-flex text-center border font-semibold rounded-md border-primary/40 text-primary py-3 px-8 hover:bg-primary hover:text-white transition-all',
    },
  ];

export type SocialLinkType = {
  icon: string;
  hoverClass: string;
}

export const socialLinksData: SocialLinkType[] = [
  {
    icon: 'tabler:brand-facebook-filled',
    hoverClass: 'hover:bg-blue-500',
  },
  {
    icon: 'tabler:brand-linkedin',
    hoverClass: 'hover:bg-sky-700',
  },
  {
    icon: 'tabler:brand-telegram',
    hoverClass: 'hover:bg-sky-700',
  },
  {
    icon: 'tabler:brand-youtube-filled',
    hoverClass: 'hover:bg-danger',
  },
];

export type ContactItem = {
  icon: string;
  link: string;
  text: string;
}

export const contactInfo: ContactItem[] = [
  {
    icon: 'lucide:phone-call',
    link: 'tel:4065550120',
    text: '(406) 555-0120',
  },
  {
    icon: 'lucide:mail',
    link: 'mailto:email@example.com',
    text: 'email@example.com',
  },
];