import { AnimationOptions } from "ngx-lottie";

const mobileShowcaseV1 = 'assets/img/landing/intro/landings/mobile-app-showcase-v1.jpg';
const mobileShowcaseV2 = 'assets/img/landing/intro/landings/mobile-app-showcase-v2.jpg';
const mobileShowcaseV3 = 'assets/img/landing/intro/landings/mobile-app-showcase-v3.jpg';
const productLanding = 'assets/img/landing/intro/landings/product-landing.jpg';
const saasV1 = 'assets/img/landing/intro/landings/saas-v1.jpg';
const saasV2 = 'assets/img/landing/intro/landings/saas-v2.jpg';
const saasV3 = 'assets/img/landing/intro/landings/saas-v3.jpg';
const saasV4 = 'assets/img/landing/intro/landings/saas-v4.jpg';
const saasV5 = 'assets/img/landing/intro/landings/saas-v5.jpg';
const startup = 'assets/img/landing/intro/landings/startup.jpg';
const financial = 'assets/img/landing/intro/landings/financial.jpg';
const onlineCourses = 'assets/img/landing/intro/landings/online-courses.jpg';
const medical = 'assets/img/landing/intro/landings/medical.jpg';
const digitalAgency = 'assets/img/landing/intro/landings/digital-agency.jpg';
const softwareAgencyV1 = 'assets/img/landing/intro/landings/software-agency-v1.jpg';
const softwareAgencyV2 = 'assets/img/landing/intro/landings/software-agency-v2.jpg';
const softwareAgencyV3 = 'assets/img/landing/intro/landings/software-agency-v3.jpg';
const conference = 'assets/img/landing/intro/landings/conference.jpg';
const blogHomepage = 'assets/img/landing/intro/landings/blog-homepage.jpg';
const placeholder = 'assets/img/landing/intro/landings/placeholder.jpg';

const animationFeature1Light = 'assets/json/animation-feature-1-light.json';
const animationFeature1Dark = 'assets/json/animation-feature-1-dark.json';

const animationFeature2Light = 'assets/json/animation-feature-2-light.json';
const animationFeature2Dark = 'assets/json/animation-feature-2-dark.json';

const animationFeature3Light = 'assets/json/animation-feature-3-light.json';
const animationFeature3Dark = 'assets/json/animation-feature-3-dark.json';

const animationFeature4Light = 'assets/json/animation-feature-4-light.json';
const animationFeature4Dark = 'assets/json/animation-feature-4-dark.json';

export type LandingPageType = {
  title: string;
  image: string;
  link: string;
  isNew?: boolean;
};

export const landingPagesData: LandingPageType[] = [
  {
    title: 'Mobile App Showcase v.1',
    image: mobileShowcaseV1,
    link: '/landing/mobile-showcase/v1',
  },
  {
    title: 'Mobile App Showcase v.2',
    image: mobileShowcaseV2,
    link: '/landing/mobile-showcase/v2',
  },
  {
    title: 'Mobile App Showcase v.3',
    image: mobileShowcaseV3,
    link: '/landing/mobile-showcase/v3',
    isNew: true,
  },
  {
    title: 'Product Landing',
    image: productLanding,
    link: '/landing/product',
  },
  {
    title: 'SaaS v.1',
    image: saasV1,
    link: '/landing/saas/v1',
  },
  {
    title: 'SaaS v.2',
    image: saasV2,
    link: '/landing/saas/v2',
  },
  {
    title: 'SaaS v.3',
    image: saasV3,
    link: '/landing/saas/v3',
  },
  {
    title: 'SaaS v.4',
    image: saasV4,
    link: '/landing/saas/v4',
  },
  {
    title: 'SaaS v.5',
    image: saasV5,
    link: '/landing/saas/v5',
    isNew: true,
  },
  {
    title: 'Startup',
    image: startup,
    link: '/landing/startup',
  },
  {
    title: 'Financial Consulting',
    image: financial,
    link: '/landing/financial',
  },
  {
    title: 'Online Courses',
    image: onlineCourses,
    link: '/landing/online-courses',
  },
  {
    title: 'Medical',
    image: medical,
    link: '/landing/medical',
  },
  {
    title: 'Digital Agency',
    image: digitalAgency,
    link: '/landing/digital-agency',
  },
  {
    title: 'Software Dev Agency v.1',
    image: softwareAgencyV1,
    link: '/landing/software-dev-agency/v1',
  },
  {
    title: 'Software Dev Agency v.2',
    image: softwareAgencyV2,
    link: '/landing/software-dev-agency/v2',
  },
  {
    title: 'Software Dev Agency v.3',
    image: softwareAgencyV3,
    link: '/landing/software-dev-agency/v3',
  },
  {
    title: 'Conference',
    image: conference,
    link: '/landing/conference',
  },
  {
    title: 'Blog Homepage',
    image: blogHomepage,
    link: '/landing/blog',
  },
  {
    title: 'Coming Soon',
    image: placeholder,
    link: '',
  },
];

export type MoreFeatureType = {
  icon: string;
  title: string;
  description: string;
};

export const moreFeaturesData: MoreFeatureType[] = [
  {
    icon: 'tabler:brand-tailwind',
    title: 'Built with Tailwind',
    description:
      'Silicon is the powerful front-end solution based on Tailwind — the world’s most popular responsive, mobile-first front-end component library.',
  },
  {
    icon: 'tabler:file-text',
    title: 'Detailed Documentation',
    description:
      'Download package includes the documentation that covers all crucial information about how to get started, customize template and components usage.',
  },
  {
    icon: 'tabler:device-mobile',
    title: 'Mobile Friendly Interface',
    description:
      'It’s not a surprise that nowadays over 80% of users surf the internet using their mobile devices. Silicon is 100% responsive and optimized for small touch screens.',
  },
  {
    icon: 'tabler:hand-click',
    title: 'Touch-Enabled Sliders',
    description:
      'In the era of touch screens it’s constant to ensure great user experience on mobile, especially when it comes to such frequently used interface component as slider.',
  },
  {
    icon: 'tabler:brand-html5',
    title: 'W3C Valid HTML Code',
    description:
      'All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Silicon is innovative at its core.',
  },
  {
    icon: 'tabler:brand-nodejs',
    title: 'Kick-Start Your Development',
    description:
      'Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included in download package. Full tasks automation.',
  },
  {
    icon: 'tabler:brand-sass',
    title: 'Easy to Customize with Sass',
    description:
      'Silicon is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.',
  },
  {
    icon: 'tabler:brand-javascript',
    title: 'Future Proof Java-Script',
    description:
      'Silicon core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally drop jQuery and use ES6 modules.',
  },
];
export type FeatureType = {
  title: string;
  lightAnimation: AnimationOptions;
  darkAnimation: AnimationOptions;
};

export const featuresData: FeatureType[] = [
    {
      title: 'Light / Dark Mode',
      lightAnimation: {
        path: animationFeature1Light,
      },
      darkAnimation: {
        path: animationFeature1Dark,
      },
    },

    {
      title: '16+ Landing Demo',
      lightAnimation: {
        path: animationFeature2Light,
      },
      darkAnimation: {
        path: animationFeature2Dark,
      },
    },

    {
      title: '50+ UI Flexible Components',
      lightAnimation: {
        path: animationFeature3Light,
      },
      darkAnimation: {
        path: animationFeature3Dark,
      },
    },

    {
      title: 'Free Lifetime Updates',
      lightAnimation: {
        path: animationFeature4Light,
      },
      darkAnimation: {
        path: animationFeature4Dark,
      },
    },
  ];