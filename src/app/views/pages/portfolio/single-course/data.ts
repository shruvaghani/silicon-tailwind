const avatar01 = 'assets/img/avatar/01.jpg';
const avatar02 = 'assets/img/avatar/02.jpg';
const avatar03 = 'assets/img/avatar/03.jpg';
const avatar04 = 'assets/img/avatar/04.jpg';
const avatar05 = 'assets/img/avatar/05.jpg';
const avatar06 = 'assets/img/avatar/06.jpg';
const avatar07 = 'assets/img/avatar/07.jpg';

const courseImage01 = 'assets/img/portfolio/courses/02.jpg';
const courseImage02 = 'assets/img/portfolio/courses/03.jpg';
const courseImage03 = 'assets/img/portfolio/courses/09.jpg';

export const featureListData: string[] = [
  'Sed lectus donec amet eu turpis interdum.',
  'Nulla at consectetur vitae dignissim porttitor.',
  'Phasellus id vitae dui aliquet mi.',
  'Integer cursus vitae, odio feugiat iaculis aliquet diam, et purus.',
  'In aenean dolor diam tortor orci eu.',
];

export type CourseRoadmapItem = {
  title: string;
  description: string;
  titleClass?: string;
  beforeClass?: string;
};

export const courseRoadmapData: CourseRoadmapItem[] = [
  {
    title: 'Introduction. Getting started',
    description:
      'Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit tempus placerat.',
    titleClass: 'md:mt-6',
    beforeClass: 'before:h-full',
  },
  {
    title: 'The ultimate HTML developer: advanced HTML',
    description:
      'Lobortis diam elit id nibh ultrices sed penatibus donec. Nibh iaculis eu sit cras ultricies. Nam eu eget etiam egestas donec scelerisque ut ac enim. Vitae ac nisl, enim nec accumsan vitae est.',
    beforeClass: 'before:h-full',
  },
  {
    title: 'CSS & CSS3: basic',
    description:
      'Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum ultricies auctor.',
    titleClass: 'md:mt-6',
    beforeClass: 'before:h-full',
  },
  {
    title: 'JavaScript basics for beginners',
    description:
      'Morbi porttitor risus imperdiet a, nisl mattis. Amet, faucibus eget in platea vitae, velit, erat eget velit. At lacus ut proin erat.',
    titleClass: 'md:mt-6',
    beforeClass: 'before:h-full',
  },
  {
    title: 'Understanding APIs',
    description:
      'Risus morbi euismod in congue scelerisque fusce pellentesque diam consequat. Nisi mauris nibh sed est morbi amet arcu urna. Malesuada feugiat quisque consectetur elementum diam vitae. Dictumst facilisis odio eu quis maecenas risus odio fames bibendum ullamcorper.',
    beforeClass: 'before:h-full',
  },
  {
    title: 'Python from beginner to advanced',
    description:
      'Quis risus quisque diam diam. Volutpat neque eget eu faucibus sed urna fermentum risus. Est, mauris morbi nibh massa.',
    titleClass: 'md:mt-6',
    beforeClass: 'before:h-1/2',
  },
];

export type CourseFeatureType = {
  icon: string;
  text: string;
};

export const courseFeaturesData: CourseFeatureType[] = [
  {
    icon: 'projector',
    text: '220 hours on-demand video',
  },
  {
    icon: 'file-text',
    text: '18 articles',
  },
  {
    icon: 'download',
    text: '25 downloadable resources',
  },
  {
    icon: 'infinity',
    text: 'Full lifetime access',
  },
  {
    icon: 'trophy',
    text: 'Certificate of completion',
  },
];

export type TestimonialType = {
  quote: string;
  rating: number;
  image: string;
  name: string;
  role: string;
};

export const testimonialsData: TestimonialType[] = [
  {
    quote:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 3,
    image: avatar03,
    name: 'Fannie Summers',
    role: 'Designer',
  },
  {
    quote:
      'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes.',
    rating: 5,
    image: avatar02,
    name: 'Robert Fox',
    role: 'QA Engineer',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
    image: avatar04,
    name: 'Annette Black',
    role: 'Project Manager',
  },
  {
    quote:
      'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend.',
    rating: 3,
    image: avatar05,
    name: 'Jerome Bell',
    role: 'Developer',
  },
  {
    quote:
      'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 4,
    image: avatar01,
    name: 'Albert Flores',
    role: 'PR Director',
  },
  {
    quote: 'Nulla volutpat consectetur congue egestas egestas uni suspendisse blandit parturient.',
    rating: 5,
    image: avatar06,
    name: 'Jenny Wilson',
    role: 'Marketing',
  },
  {
    quote:
      'Vivamus iaculis facilisis pretium. Pellentesque vitae mi odio. Donec imperdiet pellentesque ipsum quis pharetra. Nullam dolor sem.',
    rating: 4,
    image: avatar07,
    name: 'Cameron Williamson',
    role: 'Illustrator',
  },
];

export type FaqType = {
  question: string;
  answer: string;
  active?: boolean;
};

export const faqData: FaqType[] = [
  {
    question:
      'YouTube is full of free tutorials, videos and courses. Why should I take courses here?',
    answer:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
    active: true,
  },
  {
    question: "What if I don't have any professional background?",
    answer:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
  },
  {
    question: 'How is this different from other courses on the market?',
    answer:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
  },
  {
    question: "How much time does it take to do my homework per week? What if I don't like it?",
    answer:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
  },
  {
    question: 'Is there any kind of certificate of completion?',
    answer:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
  },
];

export type CourseCardType = {
  image: string;
  title: string;
  author: string;
  price: string;
  originalPrice?: string;
  hours: string;
  rating: string;
  isSale?: boolean;
};

export const coursesData: CourseCardType[] = [
  {
    image: courseImage01,
    title: 'HTML, CSS, JavaScript Web<br> Developer',
    author: 'By Jenny Wilson & Marvin McKinney',
    price: '$15.99',
    hours: '160 hours',
    rating: '92% (3.1K)',
  },
  {
    image: courseImage02,
    title: 'Fullstack Web Developer Course from Scratch',
    author: 'By Robert Fox',
    price: '$9.99',
    originalPrice: '$44.99',
    hours: '210 hours',
    rating: '98% (2.7K)',
    isSale: true,
  },
  {
    image: courseImage03,
    title: 'Learn JMETER from Scratch on Live Apps-Performance Testing',
    author: 'By Jenny Wilson',
    price: '$14.50',
    hours: '120 hours',
    rating: '92% (3.8K)',
  },
];
