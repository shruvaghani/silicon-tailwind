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