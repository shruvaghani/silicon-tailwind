const ecommerceImage = 'assets/img/landing/saas-5/categories/ecommerce.jpg';
const transportationImage = 'assets/img/landing/saas-5/categories/transportation.jpg';
const marketingImage = 'assets/img/landing/saas-5/categories/marketing.jpg';
const roboticsImage = 'assets/img/landing/saas-5/categories/robotics.jpg';
const programmingImage = 'assets/img/landing/saas-5/categories/programming.jpg';
const envatoColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/envato-color-light.svg';
const envatoColorDarkImage = 'assets/img/landing/app-showcase-3/integrations/envato-color-dark.svg';

const woocommerceColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/woocommerce-color-light.svg';
const woocommerceColorDarkImage =
  'assets/img/landing/app-showcase-3/integrations/woocommerce-color-dark.svg';

const laravelColorLightImage = 'assets/img/landing/app-showcase-3/integrations/laravel-color.svg';
const pingdomColorDarkImage =
  'assets/img/landing/app-showcase-3/integrations/pingdom-color-dark.svg';

const firefoxColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/firefox-color-light.svg';
const firefoxColorDarkImage =
  'assets/img/landing/app-showcase-3/integrations/firefox-color-dark.svg';

const pingdomColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/pingdom-color-light.svg';

const viteColorLightImage = 'assets/img/landing/app-showcase-3/integrations/vite-color-light.svg';
const viteColorDarkImage = 'assets/img/landing/app-showcase-3/integrations/vite-color-dark.svg';

const magentoColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/magento-color-light.svg';
const magentoColorDarkImage =
  'assets/img/landing/app-showcase-3/integrations/magento-color-dark.svg';

const shopifyColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/shopify-color-light.svg';
const shopifyColorDarkImage =
  'assets/img/landing/app-showcase-3/integrations/shopify-color-dark.svg';

const angularColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/angular-color-light.svg';
const angularColorDarkImage =
  'assets/img/landing/app-showcase-3/integrations/angular-color-dark.svg';

const emmaJohnsonAvatarImage = 'assets/img/avatar/54.jpg';
const samanthaGraceAvatarImage = 'assets/img/avatar/56.jpg';
const christopherDavisAvatarImage = 'assets/img/avatar/55.jpg';

const circleOneImage = 'assets/img/landing/saas-5/use-cases/task-automation/circle-1.png';
const circleTwoImage = 'assets/img/landing/saas-5/use-cases/task-automation/circle-2.png';
const circleThreeImage = 'assets/img/landing/saas-5/use-cases/task-automation/circle-3.png';


export type CategoryCardType = {
  title: string;
  description: string;
  image: string;
};

export const categoryCardData: CategoryCardType[] = [
  {
    title: 'E-commerce',
    description: 'Order processing, price suggestions, user research',
    image: ecommerceImage,
  },
  {
    title: 'Transportation',
    description: 'Itinerary planning, freight pricing calculations, etc.',
    image: transportationImage,
  },
  {
    title: 'Marketing',
    description: 'Market research, data visualization, user testing',
    image: marketingImage,
  },
  {
    title: 'Robotics',
    description: 'Enhancing robot learning, improve robotic precision',
    image: roboticsImage,
  },
  {
    title: 'Programming',
    description: 'Code generation, code debugging and optimization',
    image: programmingImage,
  },
];

export type ParallaxLayerType = {
  depth?: number;
  image?: string;
  imageAlt?: string;
  wrapperClass?: string;
  imageClass?: string;
  contentType?: 'image' | 'ai' | 'svg';
  svgContent?: string;
};

export type TaskAutomationContentType = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
};

export const parallaxLayersData: ParallaxLayerType[] = [
  {
    depth: 0.05,
    image: circleOneImage,
    imageAlt: 'Circle 1',
    contentType: 'image',
  },
  {
    depth: 0.1,
    image: circleTwoImage,
    imageAlt: 'Circle 2',
    contentType: 'image',
  },
  {
    depth: 0.15,
    image: circleThreeImage,
    imageAlt: 'Circle 3',
    contentType: 'image',
  },
  {
    depth: 0.2,
    contentType: 'ai',
    wrapperClass:
      'absolute lg:top-60 lg:start-63 top-33 start-34 bg-primary rounded-full shadow-lg lg:size-30 size-20 flex items-center justify-center',
  },
  {
    contentType: 'svg',
    wrapperClass:
      'absolute lg:top-0 lg:start-90 top-0 start-50 z-40 lg:size-22 md:size-12 size-12 bg-body-bg dark:bg-white/7 rounded-full shadow-[0_0.275rem_0.75rem_-0.0625rem_rgba(11,15,25,0.06),0_0.125rem_0.4rem_-0.0625rem_rgba(11,15,25,0.03)] flex justify-center items-center',
    svgContent: `
      <svg class="z-20 lg:size-22 md:size-15 size-12 text-dark dark:text-white" viewBox="0 0 92 91" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.4935 24.9077C34.8988 24.9077 25.4961 34.3472 25.4961 45.9917C25.4961 55.3052 31.5126 63.2065 39.8601 65.9968C40.9101 66.1911 41.2933 65.5401 41.2933 64.981C41.2933 64.4796 41.275 63.154 41.2645 61.3952C35.4238 62.6683 34.1901 58.5681 34.1901 58.5681C33.2372 56.1321 31.8591 55.4837 31.8591 55.4837C29.9507 54.1765 32.0008 54.2027 32.0008 54.2027C34.1087 54.3523 35.2165 56.3762 35.2165 56.3762C37.0907 59.5971 40.1331 58.6678 41.3301 58.1271C41.5191 56.7647 42.0625 55.8355 42.6636 55.3078C38.0016 54.775 33.0981 52.9663 33.0981 44.8892C33.0981 42.5871 33.9171 40.705 35.2611 39.2297C35.0432 38.6968 34.324 36.5522 35.4658 33.6516C35.4658 33.6516 37.2298 33.0846 41.2408 35.812C42.9156 35.3447 44.7111 35.1111 46.4987 35.1032C48.2811 35.1137 50.0792 35.3447 51.7566 35.8146C55.765 33.0872 57.5263 33.6542 57.5263 33.6542C58.6708 36.5575 57.9516 38.6995 57.7363 39.2323C59.083 40.7076 59.8941 42.5897 59.8941 44.8918C59.8941 52.99 54.9853 54.7723 50.3076 55.2947C51.061 55.9457 51.733 57.232 51.733 59.1981C51.733 62.0173 51.7067 64.2906 51.7067 64.981C51.7067 65.5453 52.0847 66.2016 53.1505 65.9942C61.4848 63.2012 67.4961 55.3026 67.4961 45.9917C67.4961 34.3472 58.0933 24.9077 46.4935 24.9077Z"/>
      </svg>
    `,
  },
];

export const taskAutomationContentData: TaskAutomationContentType = {
  title: 'Tasks automation',
  description:
    'Integrate our smart AI with the tools you already know and use. 10x times increase your productivity and efficiency of your team.',
  buttonLabel: 'Learn more',
  buttonUrl: '#',
};

export type TestimonialCardType = {
  lightLogo: string;
  darkLogo: string;
  logoAlt: string;
  description: string;
  avatar?: string;
  authorName: string;
  authorRole: string;
  cardClass?: string;
  darkLogoClass?: string;
};

export type TestimonialColumnType = {
  cards: TestimonialCardType[];
  columnClass?: string;
};

export const testimonialColumnsData: TestimonialColumnType[] = [
  {
    cards: [
      {
        lightLogo: envatoColorLightImage,
        darkLogo: envatoColorDarkImage,
        logoAlt: 'Envato',
        description:
          "Streamline your workflow and save valuable time with this SaaS platform's powerful AI models, which takes care of the heavy lifting and delivers top-notch results.",
        avatar: emmaJohnsonAvatarImage,
        authorName: 'Emma Johnson',
        authorRole: 'CEO, Co-Founder',
      },
      {
        lightLogo: woocommerceColorLightImage,
        darkLogo: woocommerceColorDarkImage,
        logoAlt: 'Envato',
        description:
          'This SaaS platform offers an API for integrating AI models into your app with ease, delivering impressive results and enabling you to take your business to the next level.',
        authorName: 'William Matthews',
        authorRole: 'Software Developer',
      },
      {
        lightLogo: laravelColorLightImage,
        darkLogo: pingdomColorDarkImage,
        logoAlt: 'Envato',
        description:
          "Implementing AI models has never been easier or more reliable, thanks to this SaaS platform's seamless API integration and accurate, dependable results.",
        authorName: 'Abigail Collins',
        authorRole: 'Chief Technology Officer',
      },
    ],
  },
  {
    cards: [
      {
        lightLogo: firefoxColorLightImage,
        darkLogo: firefoxColorDarkImage,
        logoAlt: 'Envato',
        description:
          "Transform your business with this SaaS platform's outstanding AI models API, which delivers unparalleled efficiency, great service, and outstanding results.",
        authorName: 'Robert Thompson',
        authorRole: 'Chief Information Officer',
      },
      {
        lightLogo: pingdomColorLightImage,
        darkLogo: pingdomColorDarkImage,
        logoAlt: 'Envato',
        description:
          'Experience game-changing AI models that are accessible and user-friendly, thanks to this exceptional SaaS platform that offers an API for seamless integration.',
        avatar: samanthaGraceAvatarImage,
        authorName: 'Samantha Grace',
        authorRole: 'Data Analyst',
      },
      {
        lightLogo: viteColorLightImage,
        darkLogo: viteColorDarkImage,
        logoAlt: 'Envato',
        description:
          "Implementing AI models has never been easier or more reliable, thanks to this SaaS platform's seamless API integration and accurate, dependable results.",
        authorName: 'Benjamin Smith',
        authorRole: 'Project Manager',
      },
    ],
  },
  {
    cards: [
      {
        lightLogo: magentoColorLightImage,
        darkLogo: magentoColorDarkImage,
        logoAlt: 'Envato',
        description:
          "Differentiate your app from the competition with this SaaS platform's outstanding performance and exceptional API for implementing AI models into your application.",
        avatar: christopherDavisAvatarImage,
        authorName: 'Christopher Davis',
        authorRole: 'Network Administrator',
      },
      {
        lightLogo: shopifyColorLightImage,
        darkLogo: shopifyColorDarkImage,
        logoAlt: 'Envato',
        description:
          "Get ahead of the competition with this SaaS platform's AI models API, which effortlessly automates processes and delivers exceptional service to ensure your success.",
        authorName: 'Olivia Rodriguez',
        authorRole: 'Human Resources',
        cardClass: 'lg:block hidden',
      },
      {
        lightLogo: angularColorLightImage,
        darkLogo: angularColorDarkImage,
        logoAlt: 'angular',
        description:
          'Efficiently harness the power of AI models with this reliable and easy-to-use SaaS platform, featuring an API that provides excellent support and streamlines your processes.',
        authorName: 'Elijah Brown',
        authorRole: 'Project Manager',
        cardClass: 'lg:block hidden',
      },
    ],
  },
  {
    columnClass: 'lg:hidden',
    cards: [
      {
        lightLogo: shopifyColorLightImage,
        darkLogo: shopifyColorDarkImage,
        logoAlt: 'Envato',
        description:
          "Get ahead of the competition with this SaaS platform's AI models API, which effortlessly automates processes and delivers exceptional service to ensure your success.",
        authorName: 'Olivia Rodriguez',
        authorRole: 'Human Resources',
        cardClass: 'lg:block hidden',
        darkLogoClass: 'mx-auto w-41.25',
      },
      {
        lightLogo: angularColorLightImage,
        darkLogo: angularColorDarkImage,
        logoAlt: 'Envato',
        description:
          'Efficiently harness the power of AI models with this reliable and easy-to-use SaaS platform, featuring an API that provides excellent support and streamlines your processes.',
        authorName: 'Elijah Brown',
        authorRole: 'Project Manager',
        cardClass: 'lg:block hidden',
        darkLogoClass: 'mx-auto w-41.25',
      },
    ],
  },
];

export type FooterLinkType = {
  label: string;
  badge?: string;
  url: any[];
};

export type FooterModelType = {
  icon: string;
  iconClass: string;
  bgClass: string;
  title: string;
  description: string;
  url: any[];
};

export type FooterIntegrationType = {
  icon: string;
  title: string;
  description: string;
  url: any[];
};

export type FooterResourceType = {
  icon: string;
  title: string;
  description: string;
  url: any[];
};

export type FooterLanguageType = {
  label: string;
  value: string;
};

export const footerCompanyLinksData: FooterLinkType[] = [
  {
    label: 'About us',
    url: [],
  },
  {
    label: 'Careers',
    badge: 'Hiring',
    url: [],
  },
  {
    label: 'Contact us',
    url: [],
  },
  {
    label: 'Terms of services',
    url: [],
  },
];

export const footerSocialLinksData: FooterLinkType[] = [
  {
    label: 'Gitub',
    url: [],
  },
  {
    label: 'Twitter',
    url: [],
  },
  {
    label: 'Telegram',
    url: [],
  },
];

export const footerLanguagesData: FooterLanguageType[] = [
  {
    label: 'English',
    value: 'English',
  },
  {
    label: 'Français',
    value: 'Français',
  },
  {
    label: 'Deutsch',
    value: 'Deutsch',
  },
  {
    label: 'Italiano',
    value: 'Italiano',
  },
];

export const footerAiModelsData: FooterModelType[] = [
  {
    icon: 'lucide:sparkles',
    iconClass: 'text-primary',
    bgClass: 'bg-primary/10',
    title: 'Generative model',
    description: 'Generation of texts and images',
    url: [],
  },
  {
    icon: 'lucide:message-square',
    iconClass: 'text-warning',
    bgClass: 'bg-warning/10',
    title: 'Speech recognition',
    description: 'Transforms voice speech into text',
    url: [],
  },
  {
    icon: 'lucide:file',
    iconClass: 'text-primary',
    bgClass: 'bg-primary/10',
    title: 'Files transcription',
    description: 'Converts different types of files',
    url: [],
  },
  {
    icon: 'lucide:code',
    iconClass: 'text-info',
    bgClass: 'bg-info/10',
    title: 'Code generation',
    description: 'Autocompletion and generation',
    url: [],
  },
  {
    icon: 'lucide:search',
    iconClass: 'text-danger',
    bgClass: 'bg-danger/10',
    title: 'Smart search',
    description: 'Responds to search queries',
    url: [],
  },
];

export const footerIntegrationsData: FooterIntegrationType[] = [
  {
    icon: 'lucide:share-2',
    title: 'Social networks',
    description: 'Facebook, Instagram, Twitter…',
    url: [],
  },
  {
    icon: 'lucide:shopping-cart',
    title: 'E-commerce',
    description: 'Shopify, WordPress, Magento…',
    url: [],
  },
  {
    icon: 'lucide:calendar-check',
    title: 'Task / time management',
    description: 'Trello, Notion, Asana, Teams…',
    url: [],
  },
  {
    icon: 'lucide:mail',
    title: 'Email / Chat apps',
    description: 'Gmail, MailChimp, Telegram…',
    url: [],
  },
  {
    icon: 'lucide:code',
    title: 'Code editors',
    description: 'VS Code, Web Storm, Atom…',
    url: [],
  },
];

export const footerResourcesData: FooterResourceType[] = [
  {
    icon: 'lucide:file-text',
    title: 'Documentation',
    description: 'API, knowledge base, tutorials',
    url: [],
  },
  {
    icon: 'lucide:info',
    title: 'Help center',
    description: 'FAQs, articles, community forum',
    url: [],
  },
  {
    icon: 'lucide:edit-3',
    title: 'Blog articles',
    description: 'Recent news and updates',
    url: [],
  },
  {
    icon: 'tabler:brand-github-filled',
    title: 'GitHub projects',
    description: 'Use our open source projects',
    url: [],
  },
];