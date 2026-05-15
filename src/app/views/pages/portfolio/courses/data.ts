const course1 = 'assets/img/portfolio/courses/01.jpg';
const course2 = 'assets/img/portfolio/courses/02.jpg';
const course3 = 'assets/img/portfolio/courses/03.jpg';
const course4 = 'assets/img/portfolio/courses/04.jpg';
const course5 = 'assets/img/portfolio/courses/05.jpg';
const course6 = 'assets/img/portfolio/courses/06.jpg';
const course7 = 'assets/img/portfolio/courses/07.jpg';
const course8 = 'assets/img/portfolio/courses/08.jpg';
const course9 = 'assets/img/portfolio/courses/09.jpg';

export type CourseType = {
  image: string;
  title: string;
  author: string;
  price: string;
  oldPrice?: string;
  duration: string;
  rating: string;
  badge?: {
    text: string;
    class: string;
  };
}

export const coursesData: CourseType[] = [
  {
    image: course1,
    title: 'Fullstack Web Developer Course from Scratch',
    author: 'Albert Flores',
    price: '$12.50',
    duration: '220 hours',
    rating: '94% (4.2K)',
    badge: {
      text: 'Best Seller',
      class: 'bg-success',
    },
  },
  {
    image: course2,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: 'Jenny Wilson & Marvin McKinney',
    price: '$15.99',
    duration: '160 hours',
    rating: '92% (3.1K)',
  },
  {
    image: course3,
    title: 'Fullstack Web Developer Course from Scratch',
    author: 'Robert Fox',
    price: '$9.99',
    oldPrice: '$44.99',
    duration: '210 hours',
    rating: '98% (2.7K)',
    badge: {
      text: 'Sale!',
      class: 'bg-danger',
    },
  },
  {
    image: course4,
    title: 'iOS & Swift - The Complete iOS App Development Course',
    author: 'Marvin McKinney',
    price: '$15.99',
    duration: '170 hours',
    rating: '95% (3.3K)',
  },
  {
    image: course5,
    title: 'Data Science & Machine Learning with Python',
    author: 'Esther Howard',
    price: '$19.75',
    duration: '150 hours',
    rating: '96% (3.8K)',
    badge: {
      text: 'Best Seller',
      class: 'bg-success',
    },
  },
  {
    image: course6,
    title: 'Creative CSS Drawing Course: Make Art With CSS',
    author: 'Robert Fox',
    price: '$17.99',
    duration: '110 hours',
    rating: '92% (5.3K)',
  },
  {
    image: course7,
    title: 'Blender Character Creator v2.0 for Video Games Design',
    author: 'Ralph Edwards',
    price: '$25.00',
    duration: '160 hours',
    rating: '93% (4.5K)',
  },
  {
    image: course8,
    title: 'The Ultimate Guide to 2D Mobile Game Development with Unity',
    author: 'Albert Flores',
    price: '$12.99',
    oldPrice: '$34.99',
    duration: '230 hours',
    rating: '97% (4.1K)',
  },
  {
    image: course9,
    title: 'Learn JMETER from Scratch on Live Apps-Performance Testing',
    author: 'Jenny Wilson',
    price: '$14.50',
    duration: '120 hours',
    rating: '92% (3.8K)',
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
