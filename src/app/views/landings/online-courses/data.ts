export const course01 = 'assets/img/portfolio/courses/01.jpg';
export const course02 = 'assets/img/portfolio/courses/02.jpg';
export const course03 = 'assets/img/portfolio/courses/03.jpg';
export const course04 = 'assets/img/portfolio/courses/05.jpg';
export const course05 = 'assets/img/portfolio/courses/08.jpg';

export const step01Dark = 'assets/img/landing/online-courses/steps/01-dark.svg';
export const step01Light = 'assets/img/landing/online-courses/steps/01-light.svg';
export const step02Dark = 'assets/img/landing/online-courses/steps/02-dark.svg';
export const step02Light = 'assets/img/landing/online-courses/steps/02-light.svg';
export const step03Dark = 'assets/img/landing/online-courses/steps/03-dark.svg';
export const step03Light = 'assets/img/landing/online-courses/steps/03-light.svg';
export const step04Dark = 'assets/img/landing/online-courses/steps/04-dark.svg';
export const step04Light = 'assets/img/landing/online-courses/steps/04-light.svg';

export const icon01 = 'assets/img/landing/online-courses/icons/01.svg';
export const icon02 = 'assets/img/landing/online-courses/icons/02.svg';
export const icon03 = 'assets/img/landing/online-courses/icons/03.svg';

export const avatar13 = 'assets/img/avatar/13.jpg';
export const avatar14 = 'assets/img/avatar/14.jpg';
export const avatar11 = 'assets/img/avatar/11.jpg';

export const brand01 = 'assets/img/brands/01.svg';
export const brand02 = 'assets/img/brands/02.svg';
export const brand03 = 'assets/img/brands/03.svg';
export const brand04 = 'assets/img/brands/04.svg';
export const brand05 = 'assets/img/brands/05.svg';
export const brand06 = 'assets/img/brands/06.svg';

export type CourseType = {
  image: string;
  badge?: string;
  badgeclass?: string;
  title: string;
  author: string;
  price: string;
  hours: number;
  rating: string;
  ratingCount: string;
};

export const popularCoursesData: CourseType[] = [
  {
    image: course01,
    badge: 'Best Seller',
    badgeclass: 'bg-success',
    title: 'Fullstack Web Developer Course from Scratch',
    author: 'By Albert Flores',
    price: '$12.50',
    hours: 220,
    rating: '94%',
    ratingCount: '4.2K',
  },
  {
    image: course02,
    title: 'By Jenny Wilson & Marvin McKinney',
    author: 'By Jenny Wilson & Marvin McKinney',
    price: '$15.99',
    hours: 160,
    rating: '92%',
    ratingCount: '3.1K',
  },
  {
    image: course03,
    badge: 'Sale!',
    badgeclass: 'bg-danger',
    title: 'HTML, CSS, JavaScript Web Developer',
    author: 'By Robert Fox',
    price: '$9.99',
    hours: 210,
    rating: '98%',
    ratingCount: '2.7K',
  },
  {
    image: course04,
    title: 'Data Science & Machine Learning with Python',
    author: 'By Esther Howard',
    price: '$13.99',
    hours: 170,
    rating: '96%',
    ratingCount: '3.8K',
  },
  {
    image: course05,
    title: 'The Ultimate Guide to Unity Game Development',
    author: 'By Albert Flores',
    price: '$29.99',
    hours: 250,
    rating: '95%',
    ratingCount: '5.4K',
  },
];

export type TabType = {
  id: string;
  title: string;
  target: string;
  active?: boolean;
};

export const tabData: TabType[] = [
  {
    id: 'tabs-with-underline-item-1',
    title: 'Web Development',
    target: '#tabs-with-underline-1',
    active: true,
  },
  {
    id: 'tabs-with-underline-item-2',
    title: 'Data Science',
    target: '#tabs-with-underline-2',
  },
  {
    id: 'tabs-with-underline-item-3',
    title: 'Mobile Development',
    target: '#tabs-with-underline-3',
  },
  {
    id: 'tabs-with-underline-item-4',
    title: 'Programming',
    target: '#tabs-with-underline-4',
  },
  {
    id: 'tabs-with-underline-item-5',
    title: 'Game Development',
    target: '#tabs-with-underline-5',
  },
  {
    id: 'tabs-with-underline-item-6',
    title: 'Software Testing',
    target: '#tabs-with-underline-6',
  },
  {
    id: 'tabs-with-underline-item-7',
    title: 'Software Engineering',
    target: '#tabs-with-underline-7',
  },
  {
    id: 'tabs-with-underline-item-8',
    title: 'Network & Security',
    target: '#tabs-with-underline-8',
  },
];
export type StepItem = {
  title: string;
  description: string;
  darkImage: string;
  lightImage: string;
  rellaxSpeed: string;
  translate: string;
  beforeClass: string;
  paddingBottom?: string;
  imageSpacing?: string;
};

export const stepsData: StepItem[] = [
  {
    title: 'Find what fascinates you & choose your course',
    description:
      'Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit scelerisque tempus placerat.',
    darkImage: step01Dark,
    lightImage: step01Light,
    rellaxSpeed: '-0.3',
    translate: 'translate3d(5px, -5px, 0px)',
    beforeClass: 'lg:before:h-68 before:h-40 before:-bottom-10',
    paddingBottom: 'pb-12',
    imageSpacing: 'lg:mx-5',
  },
  {
    title: 'Learn by doing',
    description:
      'Tristique sed pharetra feugiat tempor sagittis. Ultricies eu bibendum adipiscing lacinia. Quisque praesent aliquam tempus phasellus ut integer ac nunc dapibus.',
    darkImage: step02Dark,
    lightImage: step02Light,
    rellaxSpeed: '-0.5',
    translate: 'translate3d(8px, -4px, 0px)',
    beforeClass: 'before:h-full before:top-10',
    paddingBottom: 'pb-12',
    imageSpacing: 'xl:mx-5',
  },
  {
    title: 'Get instant expert feedback',
    description:
      'Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum ultricies auctor nec volutpat augue.',
    darkImage: step03Dark,
    lightImage: step03Light,
    rellaxSpeed: '-0.3',
    translate: 'translate3d(5px, 0px, 0px)',
    beforeClass: 'before:h-full before:top-10',
    paddingBottom: 'pb-12',
    imageSpacing: 'xl:mx-5',
  },
  {
    title: 'Put your learning into practice & find your dream job',
    description:
      'Sed fermentum ut nibh duis. Dolor pretium arcu, tincidunt ultrices tristique arcu cursus massa gravida tortor nulla, mollis id pretium.',
    darkImage: step04Dark,
    lightImage: step04Light,
    rellaxSpeed: '-0.5',
    translate: 'translate3d(8px, -15px, 0px)',
    beforeClass: 'before:h-1/2 before:top-10',
    imageSpacing: 'xl:mx-5',
  },
];

export type IconType = {
  icon: string;
  title: string;
  description: string;
  depth?: number;
};

export const iconsData: IconType[] = [
  {
    icon: icon01,
    title: '25K+ Online Video Courses',
    description:
      'Leo condimentum dignissim venenatis sit dignissim vel. Adipiscing tristique dictum vitae elementum neque.',
    depth: 0.5,
  },
  {
    icon: icon02,
    title: 'Mentor-Based Learning',
    description:
      'Ac dapibus lacus, malesuada ridiculus donec condimentum nunc vestibulum. Mi feugiat tellus faucibus fermentum mattis ultrices.',
    depth: 0.3,
  },
  {
    icon: icon03,
    title: 'Lifetime Access',
    description:
      'Donec interdum risus convallis tristique quis elit. Sapien turpis enim, viverra cursus facilisis dignissim condimentum.',
    depth: 0.7,
  },
];

export type TestimonialType = {
  image: string;
  name: string;
  role: string;
  quote: string;
  depth?: number;
};

export const testimonialsData: TestimonialType[] = [
  {
    image: avatar13,
    name: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Ltd.',
    quote:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus.',
    depth: 0.3,
  },
  {
    image: avatar14,
    name: 'Annette Black',
    role: 'Strategic Advisor at Company LLC',
    quote:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada.',
    depth: 0.5,
  },
  {
    image: avatar11,
    name: 'Darrell Steward',
    role: 'Project Manager at Ipsum Ltd.',
    quote:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa.',
    depth: 0.4,
  },
];

export const brandsData: string[] = [brand01, brand02, brand03, brand04, brand05, brand06];

export type FAQType = {
  id: string;
  question: string;
  answer: string[];
  active?: boolean;
};

export const faqData: FAQType[] = [
  {
    id: 'education-1',
    question: "What if I don't have any professional background?",
    answer: [
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
    ],
    active: true,
  },
  {
    id: 'education-2',
    question: 'How is this different from other courses on the market?',
    answer: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in facilisis nibh. Vestibulum ac porttitor sapien. Curabitur laoreet malesuada gravida. Phasellus vehicula vestibulum consequat. Curabitur feugiat eget sem vitae laoreet. Fusce porttitor finibus tellus, quis condimentum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vehicula malesuada magna at viverra. Fusce non est eget libero convallis fringilla suspendisse.',
      'Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac mi aliquet varius. Proin nec est nibh. Dignissim amet adipiscing massa integer.',
    ],
  },
  {
    id: 'education-3',
    question: "How much time does it take to do my homework per week? What if I don't like it?",
    answer: [
      'Suspendisse viverra volutpat eros. Curabitur in scelerisque lacus, quis fringilla sem. Nunc rutrum vel magna et ullamcorper. Sed consectetur augue vitae ligula consectetur, eu dapibus justo molestie. Phasellus sit amet metus magna. Sed tincidunt tempus felis vitae commodo. Etiam lobortis justo in elit pretium, sit amet aliquet tellus euismod. Curabitur in purus sed turpis aliquet pretium. Nunc ut magna tempus, iaculis sem id, vulputate ipsum. Etiam fermentum malesuada quam, in tempus purus pulvinar at. Vestibulum auctor congue pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac mi aliquet varius. Proin nec est nibh. In hac habitasse platea dictumst. Nullam porta risus vitae lectus pellentesque interdum. Proin ac leo fermentum, volutpat odio ut, lacinia erat. Suspendisse potenti. Praesent vitae faucibus lectus. Sed tincidunt at ex id maximus. Morbi tristique ullamcorper velit, non cursus libero eleifend quis. Aliquam aliquam odio dui.',
    ],
  },
  {
    id: 'education-4',
    question: 'Is there any kind of certificate of completion?',
    answer: [
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
    ],
  },
  {
    id: 'education-5',
    question:
      'YouTube is full of free tutorials, videos and courses. Why should I take any courses here?',
    answer: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in facilisis nibh. Vestibulum ac porttitor sapien. Curabitur laoreet malesuada gravida. Phasellus vehicula vestibulum consequat. Curabitur feugiat eget sem vitae laoreet. Fusce porttitor finibus tellus, quis condimentum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vehicula malesuada magna at viverra. Fusce non est eget libero convallis fringilla suspendisse.',
      'Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac mi aliquet varius. Proin nec est nibh. Dignissim amet adipiscing massa integer.',
    ],
  },
  {
    id: 'education-6',
    question: 'What happens if I forget or lose my password?',
    answer: [
      'Suspendisse viverra volutpat eros. Curabitur in scelerisque lacus, quis fringilla sem. Nunc rutrum vel magna et ullamcorper. Sed consectetur augue vitae ligula consectetur, eu dapibus justo molestie. Phasellus sit amet metus magna. Sed tincidunt tempus felis vitae commodo. Etiam lobortis justo in elit pretium, sit amet aliquet tellus euismod. Curabitur in purus sed turpis aliquet pretium. Nunc ut magna tempus, iaculis sem id, vulputate ipsum. Etiam fermentum malesuada quam, in tempus purus pulvinar at. Vestibulum auctor congue pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac mi aliquet varius. Proin nec est nibh. In hac habitasse platea dictumst. Nullam porta risus vitae lectus pellentesque interdum. Proin ac leo fermentum, volutpat odio ut, lacinia erat. Suspendisse potenti. Praesent vitae faucibus lectus. Sed tincidunt at ex id maximus. Morbi tristique ullamcorper velit, non cursus libero eleifend quis. Aliquam aliquam odio dui.',
    ],
  },
];

export type SocialLink = {
  ariaLabel: string;
  icon: string;
  hoverClass: string;
  link: string;
};

export const socialLinksData: SocialLink[] = [
  {
    ariaLabel: 'Google',
    icon: 'tabler:brand-google-filled',
    hoverClass: 'hover:bg-danger',
    link: '/',
  },
  {
    ariaLabel: 'Facebook',
    icon: 'tabler:brand-facebook-filled',
    hoverClass: 'hover:bg-blue-500',
    link: '/',
  },
  {
    ariaLabel: 'LinkedIn',
    icon: 'tabler:brand-linkedin-filled',
    hoverClass: 'hover:bg-cyan-700',
    link: '/',
  },
  {
    ariaLabel: 'GitHub',
    icon: 'tabler:brand-github-filled',
    hoverClass: 'hover:bg-blue-700',
    link: '/',
  },
];

export type FooterLink = {
  text: string;
  routerLink: string;
  cssClass?: string;
};

export type FooterSection = {
  title?: string;
  links: FooterLink[];
};

export const usefulLinks: FooterLink[] = [
  { text: 'Home', routerLink: '/' },
  { text: 'Features', routerLink: '/features' },
  { text: 'Integrations', routerLink: '/integrations' },
  { text: 'Our Clients', routerLink: '/clients' },
  { text: 'Blog', routerLink: '/blog' },
];

export const legalLinks: FooterLink[] = [
  { text: 'Terms & Conditions', routerLink: '/terms', cssClass: 'text-nowrap' },
  { text: 'Privacy Policy', routerLink: '/privacy' },
];

export const socialLinks: FooterLink[] = [
  { text: 'Facebook', routerLink: '/facebook' },
  { text: 'LinkedIn', routerLink: '/linkedin' },
  { text: 'Twitter', routerLink: '/twitter' },
  { text: 'Instagram', routerLink: '/instagram' },
];
