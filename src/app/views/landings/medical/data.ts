const cardiologyIcon = 'assets/img/landing/medical/services/cardiology.svg';
const scalpelIcon = 'assets/img/landing/medical/services/scalpel.svg';
const xrayIcon = 'assets/img/landing/medical/services/x-ray.svg';
const stethoscopeIcon = 'assets/img/landing/medical/services/stethoscope.svg';
const lungsIcon = 'assets/img/landing/medical/services/lungs.svg';
const toothIcon = 'assets/img/landing/medical/services/tooth.svg';

const ctaImage1 = 'assets/img/landing/medical/cta/01.jpg';
const ctaImage2 = 'assets/img/landing/medical/cta/02.jpg';

const teamImage1 = 'assets/img/team/16.jpg';
const teamImage2 = 'assets/img/team/17.jpg';
const teamImage3 = 'assets/img/team/18.jpg';
const teamImage4 = 'assets/img/team/19.jpg';
const teamImage5 = 'assets/img/team/20.jpg';
const teamImage6 = 'assets/img/team/21.jpg';
const teamImage7 = 'assets/img/team/22.jpg';
const teamImage8 = 'assets/img/team/23.jpg';

const testimonialAvatar1 = 'assets/img/avatar/30.jpg';
const testimonialAvatar2 = 'assets/img/avatar/32.jpg';
const testimonialAvatar3 = 'assets/img/avatar/31.jpg';
const testimonialAvatar4 = 'assets/img/avatar/34.jpg';
const testimonialAvatar5 = 'assets/img/avatar/35.jpg';
const testimonialAvatar6 = 'assets/img/avatar/33.jpg';
const testimonialAvatar7 = 'assets/img/avatar/37.jpg';

const newsImage1 = 'assets/img/landing/medical/news/04.jpg';
const newsImage2 = 'assets/img/landing/medical/news/01.jpg';
const newsImage3 = 'assets/img/landing/medical/news/02.jpg';
const newsImage4 = 'assets/img/landing/medical/news/03.jpg';

const newsAvatar1 = 'assets/img/avatar/37.jpg';
const newsAvatar2 = 'assets/img/avatar/36.jpg';
const newsAvatar3 = 'assets/img/avatar/38.jpg';

export type FeatureIconType = {
  image: string;
  title: string;
  description?: string;
  linkText: string;
  routerLink: string;
  phone?: string;
  phoneNumber?: string;
  phoneIcon?: string;
  class: string;
};

export const featureIconsData: FeatureIconType[] = [
  {
    image: 'assets/img/landing/medical/icons/doctor.svg',
    title: 'Find a Doctor',
    description: 'Search the right doctor by location and specialty.',
    linkText: 'About Us',
    routerLink: '/about',
    class: 'mb-2',
  },
  {
    image: 'assets/img/landing/medical/icons/ambulance.svg',
    title: 'Emergency Service',
    linkText: 'Contact us',
    routerLink: '/contact',
    phone: '(406) 555-0120',
    phoneNumber: '(406) 555-0120',
    phoneIcon: 'lucide:phone-call',
    class: 'mb-4',
  },
  {
    image: 'assets/img/landing/medical/icons/virus.svg',
    title: 'COVID-19 Info',
    description: 'We offer quick COVID-19 testing by appointment.',
    linkText: 'Learn more',
    routerLink: '/covid-info',
    class: 'mb-2',
  },
];

export type MedicalService = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

export type ServiceType = {
  items: MedicalService[];
};

export const servicesData: ServiceType[] = [
  {
    items: [
      {
        title: 'Cardiology',
        description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
        icon: cardiologyIcon,
        link: 'services-single-v2.html',
      },
      {
        title: 'Surgery',
        description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
        icon: scalpelIcon,
        link: 'services-single-v2.html',
      },
      {
        title: 'Radiology',
        description: 'Faucibus cursus maecenas lorem cursus nibh.',
        icon: xrayIcon,
        link: 'services-single-v2.html',
      },
    ],
  },
  {
    items: [
      {
        title: 'Family Medicine',
        description: 'Augue pulvinar justo, fermentum fames aliquam.',
        icon: stethoscopeIcon,
        link: 'services-single-v2.html',
      },
      {
        title: 'Pulmonary',
        description: 'Ullamcorper in magna varius quisque enim tempor iaculis proin sed.',
        icon: lungsIcon,
        link: 'services-single-v2.html',
      },
      {
        title: 'Dental Care',
        description: 'Faucibus cursus maecenas lorem cursus nibh. Sociis sit facilisis dolor arcu.',
        icon: toothIcon,
        link: 'services-single-v2.html',
      },
    ],
  },
];

export type CtaSlide = {
  title: string;
  description: string;
  buttonText: string;
  buttonClass: string;
  imageId: string;
};

export const ctaSlidesData: CtaSlide[] = [
  {
    title: 'New Service — Start Your Care <span class="text-success">Online</span> Now',
    description:
      'Morbi lacus vulputate mauris ut et nunc, tempor. Placerat augue eu amet feugiat mi sagittis velit. Sed suscipit nunc suspendisse morbi pharetra libero consectetur. Proin eros sollicitudin augue tempus. Aliquet id sit donec aliquam.',
    buttonText: 'Learn more',
    buttonClass:
      'bg-success text-white font-semibold px-8 py-3.5 transition-all duration-200 rounded-lg shadow-custom hover:bg-green-700',
    imageId: '#image-1',
  },
  {
    title: 'Support Groups for <span class="text-danger">Depression</span> & Anxiety',
    description:
      'Magna cursus feugiat sed sodales praesent vehicula integer arcu. Felis duis lectus felis, tempus aliquet quis non. At integer consectetur eget nunc, fames. Et facilisi vel, luctus sed interdum vitae nec, velit. Maecenas purus et pharetra, at volutpat aenean.',
    buttonText: 'Learn more',
    buttonClass:
      'bg-danger text-white font-semibold px-8 py-3.5 transition-all duration-200 rounded-lg shadow-custom hover:bg-red-700',
    imageId: '#image-2',
  },
];

export type CtaImage = {
  id: string;
  src: string;
  alt: string;
};

export const ctaImagesData: CtaImage[] = [
  {
    id: 'image-1',
    src: ctaImage1,
    alt: 'Image 1',
  },
  {
    id: 'image-2',
    src: ctaImage2,
    alt: 'Image 2',
  },
];

export type TeamMemberType = {
  name: string;
  specialty: string;
  image: string;
  rating: number;
  reviews: number;
};

export const teamMembersData: TeamMemberType[] = [
  {
    name: 'Dr. Ronald Richards',
    specialty: 'Neurosurgeon',
    image: teamImage1,
    rating: 5,
    reviews: 19,
  },
  {
    name: 'Dr. Esther Howard',
    specialty: 'Therapist',
    image: teamImage2,
    rating: 5,
    reviews: 4,
  },
  {
    name: 'Dr. Jerome Bell',
    specialty: 'Anesthesiologist',
    image: teamImage3,
    rating: 4,
    reviews: 4,
  },
  {
    name: 'Dr. Ralph Edwards',
    specialty: 'Surgeon',
    image: teamImage4,
    rating: 5,
    reviews: 8,
  },
  {
    name: 'Dr. Ronald Richards',
    specialty: 'Neurosurgeon',
    image: teamImage5,
    rating: 4,
    reviews: 19,
  },
  {
    name: 'Dr. Annette Black',
    specialty: 'Pediatrician',
    image: teamImage6,
    rating: 4,
    reviews: 10,
  },
  {
    name: 'Dr. Dianne Russell',
    specialty: 'Dentist',
    image: teamImage7,
    rating: 5,
    reviews: 5,
  },
  {
    name: 'Dr. Courtney Henry',
    specialty: 'Gynecologist',
    image: teamImage8,
    rating: 5,
    reviews: 16,
  },
];

export type TestimonialType = {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
};

export const testimonialsData: TestimonialType[] = [
  {
    name: 'Fannie Summers',
    role: 'Medical Center patient',
    avatar: testimonialAvatar1,
    content:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 3,
  },
  {
    name: 'Robert Fox',
    role: 'Medical Center patient',
    avatar: testimonialAvatar2,
    content:
      'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes.',
    rating: 5,
  },
  {
    name: 'Annette Black',
    role: 'Medical Center patient',
    avatar: testimonialAvatar3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
  },
  {
    name: 'Jerome Bell',
    role: 'Medical Center patient',
    avatar: testimonialAvatar4,
    content:
      'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend.',
    rating: 3,
  },
  {
    name: 'Albert Flores',
    role: 'Medical Center patient',
    avatar: testimonialAvatar5,
    content:
      'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 4,
  },
  {
    name: 'Jenny Wilson',
    role: 'Medical Center patient',
    avatar: testimonialAvatar6,
    content:
      'Nulla volutpat consectetur congue egestas egestas uni suspendisse blandit parturient.',
    rating: 5,
  },
  {
    name: 'Cameron Williamson',
    role: 'Medical Center patient',
    avatar: testimonialAvatar7,
    content:
      'Vivamus iaculis facilisis pretium. Pellentesque vitae mi odio. Donec imperdiet pellentesque ipsum quis pharetra. Nullam dolor sem.',
    rating: 4,
  },
];

export type NewsType = {
  image: string;
  category: string;
  date: string;
  title: string;
  authorName: string;
  authorTitle: string;
  authorAvatar: string;
};

export const newsData: NewsType[] = [
  {
    image: newsImage1,
    category: 'Health',
    date: 'Oct 13, 2023',
    title: 'Vitamin D: benefits, deficiency, sources, and dosage',
    authorName: 'Jenny Wilson',
    authorTitle: 'Ph.D. Physiology',
    authorAvatar: newsAvatar1,
  },
  {
    image: newsImage2,
    category: 'Diseases',
    date: '12 hours ago',
    title: 'Updates on COVID-19 vaccination efforts in your area',
    authorName: 'Ralph Edwards',
    authorTitle: 'MBBS, MD Gynaecology',
    authorAvatar: newsAvatar2,
  },
  {
    image: newsImage3,
    category: 'Healthy Tips',
    date: '1 day ago',
    title: 'New drug to halt dementia after multiple head injuries',
    authorName: 'Jenny Wilson',
    authorTitle: 'Ph.D. Physiology',
    authorAvatar: newsAvatar1,
  },
  {
    image: newsImage4,
    category: 'Psychology',
    date: 'Nov 24, 2023',
    title: 'Empowering women to make their health a priority',
    authorName: 'Albert Flores',
    authorTitle: 'M.Sc. Clinical Neuroscience',
    authorAvatar: newsAvatar3,
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
