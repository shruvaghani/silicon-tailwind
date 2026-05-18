const brand1 = 'assets/img/brands/01.svg';
const brand2 = 'assets/img/brands/02.svg';
const brand3 = 'assets/img/brands/03.svg';
const brand4 = 'assets/img/brands/04.svg';
const brand5 = 'assets/img/brands/05.svg';
const brand6 = 'assets/img/brands/06.svg';

export type OfferItemType = {
  icon: string;
  title: string;
  description: string;
};

export const offersData: OfferItemType[] = [
  {
    icon: 'rocket',
    title: 'Innovative Solutions',
    description:
      'Massa enim libero dictum consectetur convallis lobortis cursus mi a magna ullamcorper consectetur.',
  },
  {
    icon: 'thumbs-up',
    title: 'Success Guarantee',
    description:
      'At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies magna aliquam.',
  },
  {
    icon: 'users',
    title: 'Professional Team',
    description:
      'Pellentesque rhoncus viverra vestibu, purus purus quisque qui vestibulum facilisis dictumst consequat.',
  },
  {
    icon: 'clock',
    title: 'On Time Service',
    description:
      'Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget neque adipiscing.',
  },
];

export type ProcessStepType = {
  title: string;
  description: string;
  wrapperClass?: string;
  afterClass?: string;
};

export const processStepsData: ProcessStepType[] = [
  {
    title: 'Collecting information to identify problem',
    description:
      'Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper consectetur commodo fermentum.',
    wrapperClass: 'md:pb-0 pb-6',
    afterClass: 'md:after:w-full md:after:end-0',
  },
  {
    title: 'Conducting a user research',
    description:
      'At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies magna aliquam bibendum convallis.',
    wrapperClass: 'md:py-0 py-6 md:px-6',
    afterClass: 'md:after:w-full md:after:end-0',
  },
  {
    title: 'Creating low-fidelity prototypes',
    description:
      'Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque vestibulum facilisis dictumst consequat enim libero.',
    wrapperClass: 'md:py-0 py-6',
    afterClass: 'md:after:w-full md:after:end-0',
  },
  {
    title: 'Building product MVP version',
    description:
      'Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget neque adipiscing lobortis cursus.',
    wrapperClass: 'md:py-0 py-6 md:px-6',
    afterClass: 'md:after:w-1/4 md:after:start-0 before:h-1/4',
  },
];


export const brandsData: string[] = [brand1, brand2, brand3, brand4, brand5, brand6];

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
