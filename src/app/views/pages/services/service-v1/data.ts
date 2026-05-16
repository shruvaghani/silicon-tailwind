const cmsIcon = 'assets/img/services/icons/cms.svg';
const rocketIcon = 'assets/img/services/icons/rocket.svg';
const mobileAppIcon = 'assets/img/services/icons/mobile-app.svg';
const analyticsIcon = 'assets/img/services/icons/analytics.svg';
const webSearchIcon = 'assets/img/services/icons/web-search.svg';
const timerIcon = 'assets/img/services/icons/timer.svg';

const featureIcon01 = 'assets/img/landing/software-agency-1/features/01.svg';
const featureIcon02 = 'assets/img/landing/software-agency-1/features/02.svg';
const featureIcon03 = 'assets/img/landing/software-agency-1/features/03.svg';
const featureIcon04 = 'assets/img/landing/software-agency-1/features/04.svg';

const testimonialImg1 = 'assets/img/testimonials/01.jpg';
const testimonialImg2 = 'assets/img/testimonials/02.jpg';
const testimonialImg3 = 'assets/img/testimonials/03.jpg';

const avatar1 = 'assets/img/avatar/01.jpg';
const avatar2 = 'assets/img/avatar/06.jpg';
const avatar3 = 'assets/img/avatar/05.jpg';

const brand1 = 'assets/img/brands/04.svg';
const brand2 = 'assets/img/brands/02.svg';
const brand3 = 'assets/img/brands/01.svg';

export type ServiceCardType = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

export const servicesData: ServiceCardType[] = [
  {
    icon: cmsIcon,
    title: 'Custom Software Development',
    description:
      'Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa. Aliquam, feugiat ut cum tellus, sit. Quis consectetur gravida ac ac lectus cursus egestas.',
    link: '/services/single/v1',
  },
  {
    icon: rocketIcon,
    title: 'Software Integration',
    description:
      'Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget. Sit neque adipiscing malesuada blandit justo, quam.',
    link: '/services/single/v1',
  },
  {
    icon: mobileAppIcon,
    title: 'Mobile App Development',
    description:
      'Nunc, justo, diam orci, dictum purus convallis risus. Suscipit hendrerit at egestas id id blandit interdum est. Integer fames placerat turpis pretium quis hac leo lacus. Orci, dictum nunc mus quis semper eu bibendum enim, morbi.',
    link: '/services/single/v1',
  },
  {
    icon: analyticsIcon,
    title: 'Business Analytics',
    description:
      'Gravida eget euismod tempus diam dignissim quam. Dignissim magnis blandit faucibus convallis augue nisl, etiam. Feugiat ut molestie non arcu senectus sed. Diam pellentesque sit mattis nec amet varius nunc a sed.',
    link: '/services/single/v1',
  },
  {
    icon: webSearchIcon,
    title: 'Software Testing',
    description:
      'Quis rhoncus quam venenatis facilisi. Risus dis libero nisl condimentum quis. Tincidunt ultricies vulputate ornare nunc rhoncus in. Ultrices dolor eu natoque volutpat praesent curabitur ultricies.',
    link: '/services/single/v1',
  },
  {
    icon: timerIcon,
    title: 'Project Management',
    description:
      'Massa dis morbi sagittis, tellus sit gravida. Id ut non ut in faucibus eu, ac. Tempus feugiat enim id pellentesque a sagittis vitae, convallis. Nunc, arcu enim orci ullamcorper aenean. Scelerisque eget a nibh bibendum commodo.',
    link: '/services/single/v1',
  },
];

export type FeatureType = {
  icon: string;
  title: string;
};

export const featuresData: FeatureType[] = [
  {
    icon: featureIcon01,
    title: 'Build a functional prototype in 24 hrs',
  },
  {
    icon: featureIcon02,
    title: 'Create an MVP within two weeks',
  },
  {
    icon: featureIcon03,
    title: 'Kickstart software development',
  },
  {
    icon: featureIcon04,
    title: 'Get 24/7 tech & business support',
  },
];

export type TestimonialItem = {
  id: string;
  description: string;
  name: string;
  role: string;
  avatar: string;
  brandLogo: string;
  testimonialImage: string;
};

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'author-1',
    description:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar. In ac fermentum sit in orci.',
    name: 'Darrell Steward',
    role: 'Project Manager',
    avatar: avatar1,
    brandLogo: brand1,
    testimonialImage: testimonialImg1,
  },
  {
    id: 'author-2',
    description:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet. Nascetur lobortis diam, duis orci.',
    name: 'Annette Black',
    role: 'Strategic Advisor',
    avatar: avatar2,
    brandLogo: brand2,
    testimonialImage: testimonialImg2,
  },
  {
    id: 'author-3',
    description:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris.',
    name: 'Ralph Edwards',
    role: 'Head of Marketing',
    avatar: avatar3,
    brandLogo: brand3,
    testimonialImage: testimonialImg3,
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
