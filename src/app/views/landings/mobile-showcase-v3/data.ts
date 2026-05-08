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

const screenImage1 = 'assets/img/landing/app-showcase-3/steps/01.png';
const screenImage2 = 'assets/img/landing/app-showcase-3/steps/02.png';
const screenImage3 = 'assets/img/landing/app-showcase-3/steps/03.png';

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
