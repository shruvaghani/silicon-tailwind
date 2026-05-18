const brand1 = 'assets/img/brands/01.svg';
const brand2 = 'assets/img/brands/02.svg';
const brand3 = 'assets/img/brands/03.svg';
const brand4 = 'assets/img/brands/04.svg';
const brand5 = 'assets/img/brands/05.svg';
const brand6 = 'assets/img/brands/06.svg';

export type PricingPlanType = {
  title: string;
  subtitle: string;
  minPrice: number;
  maxPrice: number;
  buttonText: string;
  featured?: boolean;
  cardClass: string;
  innerClass?: string;
  titleClass: string;
  priceClass: string;
  buttonClass: string;
  roundedClass?: string;
};

export const pricingPlansData: PricingPlanType[] = [
  {
    title: 'Team',
    subtitle: 'Best for small teams',
    minPrice: 15,
    maxPrice: 12,
    buttonText: 'Get started now',
    cardClass:
      'bg-white shadow-custom border border-default-200 dark:border-white/14 dark:bg-white/4 lg:py-12 md:py-6 py-4 min-w-72',
    roundedClass: 'rounded-tl-md rounded-bl-md',
    titleClass: 'text-default-900',
    priceClass: 'text-default-950',
    buttonClass:
      'inline-flex text-center border font-semibold rounded-md border-primary/40 text-primary py-3 px-8 hover:bg-primary hover:text-white transition-all',
  },
  {
    title: 'Company',
    subtitle: 'Best for growing teams',
    minPrice: 25,
    maxPrice: 20,
    buttonText: 'Get started now',
    featured: true,
    cardClass: 'bg-primary rounded-lg p-6 min-w-72 h-full',
    innerClass: 'bg-transparent border border-white/14 lg:py-12 md:py-6 py-4 rounded-lg',
    titleClass: 'text-white',
    priceClass: 'text-white',
    buttonClass:
      'inline-flex text-center font-semibold rounded-md bg-white text-dark py-3 px-8 hover:bg-default-200 dark:hover:bg-default-800 transition-all',
  },
  {
    title: 'Enterprise',
    subtitle: 'Best for large teams',
    minPrice: 50,
    maxPrice: 40,
    buttonText: 'Get started now',
    cardClass:
      'bg-white shadow-custom border border-default-200 dark:border-white/14 dark:bg-white/4 lg:py-12 md:py-6 py-4 min-w-72',
    roundedClass: 'rounded-tr-md rounded-br-md',
    titleClass: 'text-default-900',
    priceClass: 'text-default-950',
    buttonClass:
      'inline-flex text-center border font-semibold rounded-md border-primary/40 text-primary py-3 px-8 hover:bg-primary hover:text-white transition-all',
  },
];

export const brandsData: string[] = [brand1, brand2, brand3, brand4, brand5, brand6];

export type PricingFeature = {
  label: string;
  value?: string;
  icon?: string;
  highlighted?: boolean;
};

export type PricingType = {
  title: string;
  buttonText: string;
  features: PricingFeature[];
};

export const pricingsData: PricingType[] = [
  {
    title: 'Team',
    buttonText: 'Free trial',
    features: [
      {
        label: 'Users:',
        value: '1 included',
      },
      {
        label: 'Member support via email:',
        value: 'Standard',
        highlighted: true,
      },
      {
        label: 'Live chat support:',
        icon: 'x',
      },
      {
        label: 'IT security and legal review:',
        icon: 'x',
        highlighted: true,
      },
      {
        label: 'Projects:',
        value: '4 projects',
      },
      {
        label: 'Comments and sharing:',
        icon: 'check',
        highlighted: true,
      },
      {
        label: 'Zoom integration:',
        icon: 'check',
      },
      {
        label: 'Ongoing strategy calls:',
        icon: 'x',
        highlighted: true,
      },
      {
        label: 'Analytics dashboard:',
        icon: 'check',
      },
      {
        label: 'Get custom integrations:',
        icon: 'x',
        highlighted: true,
      },
    ],
  },

  {
    title: 'Company',
    buttonText: 'Get started',
    features: [
      {
        label: 'Users:',
        value: '5 included',
      },
      {
        label: 'Member support via email:',
        value: '3 hours',
        highlighted: true,
      },
      {
        label: 'Live chat support:',
        value: '10+ members',
      },
      {
        label: 'IT security and legal review:',
        icon: 'check',
        highlighted: true,
      },
      {
        label: 'Projects:',
        value: 'Unlimited',
      },
      {
        label: 'Comments and sharing:',
        icon: 'check',
        highlighted: true,
      },
      {
        label: 'Zoom integration:',
        icon: 'check',
      },
      {
        label: 'Ongoing strategy calls:',
        icon: 'x',
        highlighted: true,
      },
      {
        label: 'Analytics dashboard:',
        icon: 'check',
      },
      {
        label: 'Get custom integrations:',
        icon: 'check',
        highlighted: true,
      },
    ],
  },

  {
    title: 'Enterprise',
    buttonText: 'Get started',
    features: [
      {
        label: 'Users:',
        value: '10 +',
      },
      {
        label: 'Member support via email:',
        value: 'With highest priority',
        highlighted: true,
      },
      {
        label: 'Live chat support:',
        icon: 'check',
      },
      {
        label: 'IT security and legal review:',
        icon: 'check',
        highlighted: true,
      },
      {
        label: 'Projects:',
        value: 'Unlimited',
      },
      {
        label: 'Comments and sharing:',
        icon: 'check',
        highlighted: true,
      },
      {
        label: 'Zoom integration:',
        icon: 'check',
      },
      {
        label: 'Ongoing strategy calls:',
        icon: 'check',
        highlighted: true,
      },
      {
        label: 'Analytics dashboard:',
        icon: 'check',
      },
      {
        label: 'Get custom integrations:',
        icon: 'check',
        highlighted: true,
      },
    ],
  },
];

export type PricingCell = {
  value?: string;
  icon?: string;
};

export type PricingRowType = {
  title: string;
  striped?: boolean;
  rounded?: boolean;
  topHighlight?: boolean;
  bottomHighlight?: boolean;
  plans: PricingCell[];
};

export const pricingTableData: PricingRowType[] = [
  {
    title: 'Users',
    topHighlight: true,
    plans: [{ value: '1 included' }, { value: '5 included' }, { value: '10+' }],
  },
  {
    title: 'Member support via email',
    striped: true,
    plans: [{ value: 'Standard' }, { value: '3 hours' }, { value: 'With highest priority' }],
  },
  {
    title: 'Live chat support',
    plans: [{ icon: 'x' }, { value: '10+ members' }, { value: 'Unlimited' }],
  },
  {
    title: 'IT security and legal review',
    striped: true,
    plans: [{ icon: 'x' }, { icon: 'check' }, { icon: 'check' }],
  },
  {
    title: 'Projects',
    plans: [{ value: '4 projects' }, { value: 'Unlimited' }, { value: 'Unlimited' }],
  },
  {
    title: 'Comments and sharing',
    striped: true,
    plans: [{ icon: 'check' }, { icon: 'check' }, { icon: 'check' }],
  },
  {
    title: 'Zoom integration',
    plans: [{ icon: 'check' }, { icon: 'check' }, { icon: 'check' }],
  },
  {
    title: 'Ongoing strategy calls',
    striped: true,
    plans: [{ icon: 'x' }, { icon: 'x' }, { icon: 'check' }],
  },
  {
    title: 'Analytics dashboard',
    plans: [{ icon: 'check' }, { icon: 'check' }, { icon: 'check' }],
  },
  {
    title: 'Get custom integrations',
    striped: true,
    rounded: true,
    bottomHighlight: true,
    plans: [{ icon: 'x' }, { icon: 'check' }, { icon: 'check' }],
  },
];

export type FaqType = {
  question: string;
  answer1: string;
  answer2: string;
  active?: boolean;
};

export const faqData: FaqType[] = [
  {
    question: 'What if I exceed my Free or paid plan limits?',
    answer1:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
    answer2:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
    active: true,
  },
  {
    question: 'How do I know which plan is right for me?',
    answer1:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
    answer2:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
  },
  {
    question: 'Are there any long-term commitments or cancellation fees?',
    answer1:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
    answer2:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
  },
  {
    question: 'How do I cancel my monthly subscription?',
    answer1:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
    answer2:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
  },
  {
    question: 'What happens if I upgrade or downgrade a plan mid-period?',
    answer1:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
    answer2:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
  },
  {
    question: 'What kind of support do I get?',
    answer1:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
    answer2:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
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
