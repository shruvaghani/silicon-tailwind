const brandLogoOneImage = 'assets/img/brands/07.svg';
const brandLogoTwoImage = 'assets/img/brands/04.svg';
const brandLogoThreeImage = 'assets/img/brands/02.svg';
const brandLogoFourImage = 'assets/img/brands/05.svg';

const heroLayerOneImage = 'assets/img/landing/saas-1/hero/layer01.png';
const heroLayerTwoImage = 'assets/img/landing/saas-1/hero/layer02.png';
const heroLayerThreeImage = 'assets/img/landing/saas-1/hero/layer03.png';
const heroLayerFourImage = 'assets/img/landing/saas-1/hero/layer04.png';
const heroLayerFiveImage = 'assets/img/landing/saas-1/hero/layer05.png';
const heroLayerSixImage = 'assets/img/landing/saas-1/hero/layer06.png';
const heroLayerSevenImage = 'assets/img/landing/saas-1/hero/layer07.png';

const taskCommentsImage = 'assets/img/landing/saas-1/features/chat.svg';
const tasksAnalyticsImage = 'assets/img/landing/saas-1/features/analytics.svg';
const notificationsImage = 'assets/img/landing/saas-1/features/bell.svg';
const sectionsSubtasksImage = 'assets/img/landing/saas-1/features/tasks.svg';
const progressTrackingImage = 'assets/img/landing/saas-1/features/calendar.svg';
const multipleAssigneesImage = 'assets/img/landing/saas-1/features/add-group.svg';
const supportImage = 'assets/img/landing/saas-1/features/headset.svg';
const dataSecurityImage = 'assets/img/landing/saas-1/features/tasks.svg';

const projectManagementImage = 'assets/img/landing/saas-1/use-cases/01.png';
const remoteWorkImage = 'assets/img/landing/saas-1/use-cases/02.png';
const productReleaseImage = 'assets/img/landing/saas-1/use-cases/03.png';
const campaignPlanningImage = 'assets/img/landing/saas-1/use-cases/04.png';

const basicImage = 'assets/img/landing/saas-1/pricing/basic.png';
const standardImage = 'assets/img/landing/saas-1/pricing/standard.png';
const ultimateImage = 'assets/img/landing/saas-1/pricing/ultimate.png';

const annetteBlackImage = 'assets/img/avatar/14.jpg';
const ralphEdwardsImage = 'assets/img/avatar/13.jpg';
const darrellStewardImage = 'assets/img/avatar/11.jpg';

const googleLogo = 'assets/img/brands/google.svg';
const zoomLogo = 'assets/img/brands/zoom.svg';
const slackLogo = 'assets/img/brands/slack.svg';
const gmailLogo = 'assets/img/brands/gmail.svg';
const trelloLogo = 'assets/img/brands/trello.svg';
const mailchimpLogo = 'assets/img/brands/mailchimp.svg';
const dropboxLogo = 'assets/img/brands/dropbox.svg';
const evernoteLogo = 'assets/img/brands/evernote.svg';

export const companyLogoData: string[] = [
  brandLogoOneImage,
  brandLogoTwoImage,
  brandLogoThreeImage,
  brandLogoFourImage,
];

export type HeroParallaxLayerType = {
  image: string;
  depth: number;
};

export const heroParallaxLayerData: HeroParallaxLayerType[] = [
  {
    image: heroLayerOneImage,
    depth: 0.1,
  },
  {
    image: heroLayerTwoImage,
    depth: 0.15,
  },
  {
    image: heroLayerThreeImage,
    depth: 0.35,
  },
  {
    image: heroLayerFourImage,
    depth: 0.25,
  },
  {
    image: heroLayerFiveImage,
    depth: 0.4,
  },
  {
    image: heroLayerSixImage,
    depth: 0.28,
  },
  {
    image: heroLayerSevenImage,
    depth: 0.35,
  },
];

export type FeatureType = {
  image: string;
  title: string;
  description: string;
};

export const featureData: FeatureType[] = [
  {
    image: taskCommentsImage,
    title: 'Task Comments',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
  },
  {
    image: tasksAnalyticsImage,
    title: 'Tasks Analytics',
    description: 'Augue pulvinar justo, fermentum fames aliquamant accumsan vestibulum.',
  },
  {
    image: notificationsImage,
    title: 'Notifications',
    description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
  },
  {
    image: sectionsSubtasksImage,
    title: 'Sections & Subtasks',
    description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.',
  },
  {
    image: progressTrackingImage,
    title: 'Progress Tracking',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.',
  },
  {
    image: multipleAssigneesImage,
    title: 'Multiple Assignees',
    description:
      'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.',
  },
  {
    image: supportImage,
    title: 'Support 24/7',
    description: 'Sapien sed massa sit erat pellentesque pellentesque nisl, elementum.',
  },
  {
    image: dataSecurityImage,
    title: 'Data Security',
    description: 'Aliquet felis facilisi sem nunc. Sapien fermentum, fringilla molestie lorem nec.',
  },
];

export const workManagementFeatureData: string[] = [
  'Powerful project management',
  'Transparent work management',
  'Manage work & focus on the most important tasks',
  'Track your progress with interactive charts',
  'Easiest way to track time spent on tasks',
];

export type TabFeatureType = {
  id: string;
  tabTarget: string;
  ariaControls: string;
  ariaSelected: boolean;
  icon: string;
  title: string;
  isActive?: boolean;
};

export const tabFeatureData: TabFeatureType[] = [
  {
    id: 'project-management-tab',
    tabTarget: '#project-management',
    ariaControls: 'project-management',
    ariaSelected: true,
    icon: 'tabler:star',
    title: 'Project Management',
    isActive: true,
  },
  {
    id: 'remote-work-tab',
    tabTarget: '#remote-work',
    ariaControls: 'remote-work',
    ariaSelected: false,
    icon: 'tabler:briefcase',
    title: 'Remote Work',
  },
  {
    id: 'product-release-tab',
    tabTarget: '#product-release',
    ariaControls: 'product-release',
    ariaSelected: false,
    icon: 'tabler:rocket',
    title: 'Product Release',
  },
  {
    id: 'campaign-planning-tab',
    tabTarget: '#campaign-planning',
    ariaControls: '#campaign-planning',
    ariaSelected: false,
    icon: 'tabler:chart-bar',
    title: 'Campaign Planning',
  },
];

export type UseCaseType = {
  id: string;
  ariaLabelledby: string;
  title: string;
  description: string;
  image: string;
  imageWidthClass: string;
  imageMarginTopClass: string;
  isHidden?: boolean;
};

export const useCaseData: UseCaseType[] = [
  {
    id: 'project-management',
    ariaLabelledby: 'project-management-tab',
    title: 'Project management',
    description:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
    image: projectManagementImage,
    imageWidthClass: 'lg:w-148.5',
    imageMarginTopClass: 'mt-8',
  },
  {
    id: 'remote-work',
    ariaLabelledby: 'remote-work-tab',
    title: 'Remote work',
    description:
      'Ut ornare quisque blandit condimentum nec viverra habitant non. Consequat id leo bibendum enim, fringilla pulvinar volutpat fames. Ut fames ut sed lobortis nulla. In dui enim et pharetra gravida diam semper lectus tellus. Faucibus mi convallis.',
    image: remoteWorkImage,
    imageWidthClass: 'lg:w-125.5',
    imageMarginTopClass: 'mt-8',
    isHidden: true,
  },
  {
    id: 'product-release',
    ariaLabelledby: 'product-release-tab',
    title: 'Product release',
    description:
      'Fames netus pretium massa lobortis sit metus et. Sit risus odio fermentum hac fames enim, ac, in. Neque lacus, consequat hendrerit potenti in tristique dictum. Tortor nec lorem et venenatis facilisis risus viverra nunc, eu. Eget suscipit vel amet.',
    image: productReleaseImage,
    imageWidthClass: 'lg:w-125.5',
    imageMarginTopClass: 'mt-4',
    isHidden: true,
  },
  {
    id: 'campaign-planning',
    ariaLabelledby: 'campaign-planning-tab',
    title: 'Campaign planning',
    description:
      'Diam bibendum scelerisque vel mauris magna. Iaculis interdum tincidunt eget nibh purus. Aliquet at sit morbi nisi volutpat fermentum scelerisque. Enim tincidunt eros sodales integer sapien. Eu ullamcorper egestas odio nunc faucibus. Sapien eu nunc sed facilisi luctus ac.',
    image: campaignPlanningImage,
    imageWidthClass: 'lg:w-136.5',
    imageMarginTopClass: 'mt-4',
    isHidden: true,
  },
];

export type PricingFeatureType = {
  title: string;
  isAvailable: boolean;
};

export type PricingPlanType = {
  planName: string;
  price: number;
  yearlyPrice: number;
  icon: string;
  isHighlighted: boolean;
  features: PricingFeatureType[];
};

export const pricingPlanData: PricingPlanType[] = [
  {
    planName: 'Basic',
    price: 6.0,
    yearlyPrice: 5.4,
    icon: basicImage,
    isHighlighted: false,
    features: [
      {
        title: 'Aenean neque tortor, purus faucibus',
        isAvailable: true,
      },
      {
        title: 'Nullam augue vitae et volutpat sagittis',
        isAvailable: true,
      },
      {
        title: 'Mauris massa penatibus enim elit quam',
        isAvailable: false,
      },
      {
        title: 'Nec ac sagittis nunc bibendum',
        isAvailable: false,
      },
      {
        title: 'Odio ut orci volutpat ultricies eleifend',
        isAvailable: false,
      },
    ],
  },
  {
    planName: 'Ultimate',
    price: 12.0,
    yearlyPrice: 10.8,
    icon: standardImage,
    isHighlighted: true,
    features: [
      {
        title: 'Aenean neque tortor, purus faucibus',
        isAvailable: true,
      },
      {
        title: 'Nullam augue vitae et volutpat sagittis',
        isAvailable: true,
      },
      {
        title: 'Mauris massa penatibus enim elit quam',
        isAvailable: true,
      },
      {
        title: 'Nec ac sagittis nunc bibendum',
        isAvailable: true,
      },
      {
        title: 'Odio ut orci volutpat ultricies eleifend',
        isAvailable: false,
      },
    ],
  },
  {
    planName: 'Ultimate',
    price: 18.0,
    yearlyPrice: 16.2,
    icon: ultimateImage,
    isHighlighted: false,
    features: [
      {
        title: 'Aenean neque tortor, purus faucibus',
        isAvailable: true,
      },
      {
        title: 'Nullam augue vitae et volutpat sagittis',
        isAvailable: true,
      },
      {
        title: 'Mauris massa penatibus enim elit quam',
        isAvailable: true,
      },
      {
        title: 'Nec ac sagittis nunc bibendum',
        isAvailable: true,
      },
      {
        title: 'Odio ut orci volutpat ultricies eleifend',
        isAvailable: true,
      },
    ],
  },
];

export type TestimonialType = {
  description: string;
  authorName: string;
  authorDesignation: string;
  authorImage: string;
};

export const testimonialData: TestimonialType[] = [
  {
    description:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada.',
    authorName: 'Annette Black',
    authorDesignation: 'Strategic Advisor at Company LLC',
    authorImage: annetteBlackImage,
  },
  {
    description:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus.',
    authorName: 'Ralph Edwards',
    authorDesignation: 'Head of Marketing at Lorem Ltd.',
    authorImage: ralphEdwardsImage,
  },
  {
    description:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa.',
    authorName: 'Darrell Steward',
    authorDesignation: 'Project Manager at Ipsum Ltd.',
    authorImage: darrellStewardImage,
  },
];

export const brandData: string[] = [
  googleLogo,
  zoomLogo,
  slackLogo,
  gmailLogo,
  trelloLogo,
  mailchimpLogo,
  dropboxLogo,
  evernoteLogo,
];

export type FooterLinkGroupType = {
  links: string[];
};

export const footerLinkGroupData: FooterLinkGroupType[] = [
  {
    links: ['Home', 'Features', 'Integrations', 'Our Clients', 'Blog'],
  },
  {
    links: ['Terms & Conditions', 'Privacy Policy'],
  },
];

export const socialLinkData: string[] = [
  'Facebook',
  'LinkedIn',
  'Twitter',
  'Instagram',
];