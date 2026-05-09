const envatoGrayImage = 'assets/img/landing/app-showcase-3/integrations/envato-gray.svg';
const envatoColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/envato-color-light.svg';
const envatoColorDarkImage = 'assets/img/landing/app-showcase-3/integrations/envato-color-dark.svg';

const laravelGrayImage = 'assets/img/landing/app-showcase-3/integrations/laravel-gray.svg';
const laravelColorImage = 'assets/img/landing/app-showcase-3/integrations/laravel-color.svg';

const magentoGrayImage = 'assets/img/landing/app-showcase-3/integrations/magento-gray.svg';
const magentoColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/magento-color-light.svg';
const magentoColorDarkImage =
  'assets/img/landing/app-showcase-3/integrations/magento-color-dark.svg';

const pingdomGrayImage = 'assets/img/landing/app-showcase-3/integrations/pingdom-gray.svg';
const pingdomColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/pingdom-color-light.svg';
const pingdomColorDarkImage =
  'assets/img/landing/app-showcase-3/integrations/pingdom-color-dark.svg';

const angularGrayImage = 'assets/img/landing/app-showcase-3/integrations/angular-gray.svg';
const angularColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/angular-color-light.svg';
const angularColorDarkImage =
  'assets/img/landing/app-showcase-3/integrations/angular-color-dark.svg';

const woocommerceGrayImage = 'assets/img/landing/app-showcase-3/integrations/woocommerce-gray.svg';
const woocommerceColorLightImage =
  'assets/img/landing/app-showcase-3/integrations/woocommerce-color-light.svg';
const woocommerceColorDarkImage =
  'assets/img/landing/app-showcase-3/integrations/woocommerce-color-dark.svg';

const paymentFeatureImage = 'assets/img/landing/app-showcase-3/features/payment.svg';
const securityFeatureImage = 'assets/img/landing/app-showcase-3/features/security.svg';
const statisticsFeatureImage = 'assets/img/landing/app-showcase-3/features/statistics.svg';
const supportFeatureImage = 'assets/img/landing/app-showcase-3/features/support.svg';
const usersImage = 'assets/img/landing/app-showcase-3/features/users.svg';
const cashbackImage = 'assets/img/landing/app-showcase-3/features/cashback.svg';

const businessCategoryImage = 'assets/img/landing/app-showcase-3/categories/business.png';
const startupsCategoryImage = 'assets/img/landing/app-showcase-3/categories/startups.png';
const studentsCategoryImage = 'assets/img/landing/app-showcase-3/categories/students.png';

const nadiaMilesAvatar = 'assets/img/avatar/51.jpg';
const wadeWarrenAvatar = 'assets/img/avatar/52.jpg';
const ralphEdwardsAvatar = 'assets/img/avatar/53.jpg';

export type IntegrationType = {
  grayImage: string;
  colorLightImage: string;
  colorDarkImage?: string;
  hasDarkModeImage: boolean;
};

export const integrationData: IntegrationType[] = [
  {
    grayImage: envatoGrayImage,
    colorLightImage: envatoColorLightImage,
    colorDarkImage: envatoColorDarkImage,
    hasDarkModeImage: true,
  },
  {
    grayImage: laravelGrayImage,
    colorLightImage: laravelColorImage,
    hasDarkModeImage: false,
  },
  {
    grayImage: magentoGrayImage,
    colorLightImage: magentoColorLightImage,
    colorDarkImage: magentoColorDarkImage,
    hasDarkModeImage: true,
  },
  {
    grayImage: pingdomGrayImage,
    colorLightImage: pingdomColorLightImage,
    colorDarkImage: pingdomColorDarkImage,
    hasDarkModeImage: true,
  },
  {
    grayImage: angularGrayImage,
    colorLightImage: angularColorLightImage,
    colorDarkImage: angularColorDarkImage,
    hasDarkModeImage: true,
  },
  {
    grayImage: woocommerceGrayImage,
    colorLightImage: woocommerceColorLightImage,
    colorDarkImage: woocommerceColorDarkImage,
    hasDarkModeImage: true,
  },
];

export type FeatureType = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};

export const featureData: FeatureType[] = [
  {
    image: paymentFeatureImage,
    imageAlt: 'Payment icon',
    title: 'Easy payments',
    description:
      'Users can easily make payments through the mobile app using various payment methods.',
  },
  {
    image: securityFeatureImage,
    imageAlt: 'Security icon',
    title: 'Data security',
    description:
      'The app employs various security measures to protect user data from unauthorized access or theft.',
  },
  {
    image: statisticsFeatureImage,
    imageAlt: 'Payment icon',
    title: 'Cost statistics',
    description:
      'Users can track their spending and view detailed cost statistics, such as expenses by category, time period...',
  },
  {
    image: supportFeatureImage,
    imageAlt: 'Payment icon',
    title: 'Support 24/7',
    description:
      "Users can get help or support from the app's customer service team at any time of day or night.",
  },
];

export type StepFeatureType = {
  stepNumber: string;
  title: string;
  features: string[];
  swiperTab: string;
};

export const stepFeatureData: StepFeatureType[] = [
  {
    stepNumber: 'Step 1',
    title: 'Create account',
    swiperTab: '#screen-1',
    features: [
      'Enter your email and create a password',
      'Check your inbox to find the confirmation email',
      'Follow the steps described in the email',
    ],
  },
  {
    stepNumber: 'Step 2',
    title: 'Connect account',
    swiperTab: '#screen-2',
    features: [
      'Authorize in the application',
      'Fill application forms',
      'Take a photo of your passport and TIN',
    ],
  },
  {
    stepNumber: 'Step 3',
    title: 'Get the card',
    swiperTab: '#screen-3',
    features: [
      'Specify the desired method of obtaining a card',
      'Receive the card within 1-2 business days',
      'Start managing your finances',
    ],
  },
];

export type StatisticsFeatureType = {
  image: string;
  imageAlt: string;
  value: string;
  suffix: string;
  description: string;
};

export const statisticsFeatureData: StatisticsFeatureType[] = [
  {
    image: paymentFeatureImage,
    imageAlt: 'Payment icon',
    value: '355',
    suffix: 'billions',
    description: 'Money spent',
  },
  {
    image: usersImage,
    imageAlt: 'Payment icon',
    value: '3.4',
    suffix: 'Millions',
    description: 'Application users',
  },
  {
    image: statisticsFeatureImage,
    imageAlt: 'Payment icon',
    value: '1.2',
    suffix: 'billions',
    description: 'Transactions a month',
  },
  {
    image: cashbackImage,
    imageAlt: 'Payment icon',
    value: '1.7',
    suffix: 'billions',
    description: 'Accrued cashback',
  },
];

export const benefitConditionData: string[] = [
  'Banking transactions are free for you',
  'No monthly cash commission',
  'Manage payments and transactions online',
  'Receive real-time alerts',
  'Receive payment from international banks',
];

export type BenefitCategoryType = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: 'start' | 'end';
  gridClass: string;
  imageColumnClass: string;
  contentColumnClass: string;
};

export const benefitCategoryData: BenefitCategoryType[] = [
  {
    title: 'For business services',
    description:
      "Our app simplifies the process of tracking your company's financial health. From cash flow analysis to expense tracking, our app offers a wide range of tools that help you make informed decisions about your business finances. Stay on top of your financial performance.",
    image: businessCategoryImage,
    imageAlt: 'Businessman',
    imagePosition: 'end',
    gridClass: 'grid md:grid-cols-12 grid-cols-1 items-center gap-y-8 py-16',
    imageColumnClass: 'md:col-span-7 md:order-2 order-1',
    contentColumnClass: 'md:col-span-5 md:order-1 order-2 md:text-start text-center',
  },
  {
    title: 'Offer for startups',
    description:
      'Starting a new business is a challenging venture, and managing your finances can be overwhelming. Our app offers a range of features designed specifically for startups, from budget tracking to financial planning. It helps you make informed decisions, and focus on growing your business.',
    image: startupsCategoryImage,
    imageAlt: 'Startupper',
    imagePosition: 'start',
    gridClass: 'grid md:grid-cols-2 grid-cols-1 items-center gap-x-14 gap-y-8 lg:py-16',
    imageColumnClass: '',
    contentColumnClass: 'md:text-start text-center',
  },
  {
    title: 'Benefits for students',
    description:
      'Managing your finances as a student can be difficult, but our app makes it easy. It offers a variety of features that help you track your expenses, set budgets, and save money. Easily monitor your spending habits and make informed decisions about your finances. Start managing your money like a pro!',
    image: studentsCategoryImage,
    imageAlt: 'Businessman',
    imagePosition: 'end',
    gridClass: 'grid md:grid-cols-12 grid-cols-1 items-center gap-y-8 py-16',
    imageColumnClass: 'md:col-span-7 md:order-2 order-1',
    contentColumnClass: 'md:col-span-5 md:order-1 order-2 md:text-start text-center',
  },
];

export type TestimonialType = {
  image: string;
  imageAlt: string;
  rating: number;
  description: string;
  name: string;
  positionClass: string;
};

export const testimonialData: TestimonialType[] = [
  {
    image: nadiaMilesAvatar,
    imageAlt: 'Avatar',
    rating: 5,
    description:
      "This app has completely transformed the way I approach my finances. It's packed with useful features and it's helped me stay on top of my finances and reach my financial goals.",
    name: 'Nadia Miles',
    positionClass: 'lg:self-end justify-end lg:w-xl lg:ms-auto',
  },
  {
    image: wadeWarrenAvatar,
    imageAlt: 'Avatar',
    rating: 4.5,
    description:
      "I absolutely love using this app! It's user-friendly interface makes it incredibly easy to track my spending and budget accordingly. I highly recommend it to anyone looking to improve their financial management skills.",
    name: 'Wade Warren',
    positionClass: 'lg:self-start lg:w-xl lg:-ms-20',
  },
  {
    image: ralphEdwardsAvatar,
    imageAlt: 'Avatar',
    rating: 5,
    description:
      "I've tried many different apps, but this one stands out as the best. Its intuitive interface, helpful tools, and insightful reports have made it an essential tool for managing my money.",
    name: 'Ralph Edwards',
    positionClass: 'lg:self-end justify-end lg:w-xl',
  },
];

export type AwardType = {
  platform: string;
  title: string;
  year: string;
};

export const awardData: AwardType[] = [
  {
    platform: 'Apple design',
    title: 'Award winner',
    year: '2022',
  },
  {
    platform: 'Google Play',
    title: "Editor's choice",
    year: '2023',
  },
  {
    platform: 'App Store',
    title: 'App of the week',
    year: '2024',
  },
];

export type SocialMediaType = {
  label: string;
  icon: string;
  hoverClass: string;
};

export const socialMediaData: SocialMediaType[] = [
  {
    label: 'Facebook',
    icon: 'tabler:brand-facebook-filled',
    hoverClass: 'hover:bg-blue-500',
  },
  {
    label: 'Instagram',
    icon: 'tabler:brand-instagram',
    hoverClass: 'hover:bg-indigo-500 hover:shadow-full',
  },
  {
    label: 'YouTube',
    icon: 'tabler:brand-youtube-filled',
    hoverClass: 'hover:bg-danger hover:shadow-full',
  },
  {
    label: 'Twitter',
    icon: 'tabler:brand-telegram',
    hoverClass: 'hover:bg-blue-400 hover:shadow-md',
  },
];

export const footerFeatureData: string[] = [
  'Bill payment tracker',
  'Budgeting goal tracker',
  'Budget alerts',
  'Categorize transactions',
  'Investment tracker',
  'Loan calculator',
  'Investment calculator',
];

export const footerCompanyLinkData: string[] = [
  'About Silicon',
  'Latest news and insights',
  'Budgeting tips',
  'Investing tips',
  'Financial planning tips',
  'Careers at Silicon',
];

export const footerSupportLinkData: string[] = [
  'Help center',
  'Community',
  'Support chat',
  'API documentation',
  'Account transactions',
  'Login and password',
];