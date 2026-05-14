const ideaIcon = 'assets/img/landing/digital-agency/icons/idea.svg';
const awardIcon = 'assets/img/landing/digital-agency/icons/award.svg';
const teamIcon = 'assets/img/landing/digital-agency/icons/team.svg';

const serviceImg1 = 'assets/img/landing/digital-agency/services/01.png';
const serviceImg2 = 'assets/img/landing/digital-agency/services/02.png';
const serviceImg3 = 'assets/img/landing/digital-agency/services/03.png';
const serviceImg4 = 'assets/img/landing/digital-agency/services/04.png';
const serviceImg5 = 'assets/img/landing/digital-agency/services/05.png';

const brandImg1 = 'assets/img/brands/01.svg';
const brandImg2 = 'assets/img/brands/02.svg';
const brandImg3 = 'assets/img/brands/03.svg';
const brandImg4 = 'assets/img/brands/04.svg';
const brandImg5 = 'assets/img/brands/05.svg';
const brandImg6 = 'assets/img/brands/06.svg';

const avatarImg1 = 'assets/img/avatar/01.jpg'
const avatarImg2 = 'assets/img/avatar/06.jpg'
const avatarImg3 = 'assets/img/avatar/05.jpg'

const testimonialBg1 = 'assets/img/testimonials/01.jpg'
const testimonialBg2 = 'assets/img/testimonials/02.jpg'
const testimonialBg3 = 'assets/img/testimonials/03.jpg'

const webby = 'assets/img/landing/digital-agency/awards/webby.svg'
const cssda = 'assets/img/landing/digital-agency/awards/cssda.svg'
const awwwards = 'assets/img/landing/digital-agency/awards/awwwards.svg'

const blogImg1 = 'assets/img/landing/digital-agency/blog/01.jpg'
const blogImg2 = 'assets/img/landing/digital-agency/blog/02.jpg'
const blogImg3 = 'assets/img/landing/digital-agency/blog/03.jpg'

const avatar10 = 'assets/img/avatar/10.jpg'
const avatar08 = 'assets/img/avatar/08.jpg'
const avatar09 = 'assets/img/avatar/09.jpg'

export type FeatureType = {
  icon: string;
  title: string;
  description: string;
};

export const featureItemsData: FeatureType[] = [
  {
    icon: ideaIcon,
    title: 'Creative Solutions',
    description: 'Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.',
  },
  {
    icon: awardIcon,
    title: 'Award Winning',
    description: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.',
  },
  {
    icon: teamIcon,
    title: 'Team of Professionals',
    description: 'Nam venenatis urna aenean quis feugiat et senectus turpis.',
  },
];

export type ServiceType = {
  title: string;
  image: string;
  description: string;
};

export const servicesData: ServiceType[] = [
  {
    title: 'Digital Marketing',
    image: serviceImg1,
    description:
      'Nisi, sed accumsan tincidunt pulvinar sapien. Neque, adipiscing posuere amet eget cursus mattis egestas nec quam. Tellus in lectus volutpat tellus bibendum. Etiam id phasellus in proin tristique. Semper habitasse volutpat et urna dui sed in pellentesque purus. Convallis viverra faucibus lacus nunc venenatis.',
  },
  {
    title: 'Web Development',
    image: serviceImg2,
    description:
      'Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.',
  },
  {
    title: 'Application Development',
    image: serviceImg3,
    description:
      'Morbi tristique justo, ut ac facilisi vel. Faucibus tortor libero commodo maecenas commodo sed. Sapien, vitae senectus turpis enim habitasse ipsum justo. Sagittis vel tortor velit dapibus dictum facilisis dictumst aliquam. Et, tempus euismod non semper vitae egestas semper eget turpis. Eros, pellentesque sed ut faucibus ac egestas leo metus.',
  },
  {
    title: 'Strategy',
    image: serviceImg4,
    description:
      'Non bibendum mauris velit at enim. Vel tellus nunc malesuada pellentesque feugiat nibh mauris blandit. Tempus, ut vulputate feugiat quis molestie sit eu blandit rhoncus. Iaculis eget magna sit eget eget massa. Diam nunc dolor tristique lectus imperdiet. Nunc, vitae etiam venenatis arcu turpis sollicitudin amet sit. Ac dapibus non erat sed. Auctor eleifend mattis scelerisque gravida felis nibh. Habitant nascetur turpis ullamcorper.',
  },
  {
    title: 'Digital Advertising',
    image: serviceImg5,
    description:
      'Nulla odio diam, arcu dictum neque nec cursus. Vel, aliquam nisl ridiculus sed. Pulvinar lectus ac pellentesque sollicitudin tristique aliquet ullamcorper in eu. Tincidunt porta magna faucibus neque, nunc gravida sagittis. Ut tellus sed odio laoreet. Molestie sit viverra maecenas nisl felis consequat.sit. Ac dapibus non erat sed. Auctor eleifend mattis scelerisque gravida felis nibh. Habitant nascetur turpis ullamcorper.',
  },
];

export const brandsData: string[] = [
  brandImg1,
  brandImg2,
  brandImg3,
  brandImg4,
  brandImg5,
  brandImg6,
  brandImg1,
];

export type TestimonialItem = {
  id: string
  description: string
  avatar: string
  name: string
  designation: string
  company: string
  brandLogo: string
  backgroundImage: string
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'author-1',
    description:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.',
    avatar: avatarImg1,
    name: 'Ralph Edwards',
    designation: 'Head of Marketing',
    company: 'Lorem Ltd.',
    brandLogo: brandImg1,
    backgroundImage: testimonialBg1,
  },
  {
    id: 'author-2',
    description:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet. Nascetur lobortis diam, duis orci.',
    avatar: avatarImg2,
    name: 'Annette Black',
    designation: 'Strategic Advisor',
    company: 'Company LLC',
    brandLogo: brandImg2,
    backgroundImage: testimonialBg2,
  },
  {
    id: 'author-3',
    description:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar. In ac fermentum sit in orci.',
    avatar: avatarImg3,
    name: 'Darrell Steward',
    designation: 'Project Manager',
    company: 'Ipsum Ltd.',
    brandLogo: brandImg4,
    backgroundImage: testimonialBg3,
  },
]

export type AwardType = {
    image: string;
    title: string;
}

export const awardData : AwardType[] = [
  {
    image: webby,
    title: '4x mobile of the day',
  },
  {
    image: cssda,
    title: '1x Kudos',
  },
  {
    image: awwwards,
    title: '3x website of the day',
  },
  {
    image: webby,
    title: '2x best website',
  },
]

export type BlogPostType = {
  category: string
  time: string
  title: string
  image: string
  author: {
    name: string
    role: string
    avatar: string
  }
  stats?: {
    likes: number
    comments: number
    shares: number
  }
  featured?: boolean
}

export const blogPostsData: BlogPostType[] = [
  {
    featured: true,
    category: 'Digital',
    time: '12 hours ago',
    title: 'A study on smartwatch design qualities and people’s preferences',
    image: blogImg1,
    author: {
      name: 'Jerome Bell',
      role: 'Marketing Specialist',
      avatar: avatar10,
    },
  },
  {
    category: 'Design',
    time: '1 day ago',
    title: 'Brand analysis: second step to the brand identity',
    image: blogImg2,
    author: {
      name: 'Annette Black',
      role: 'Product Manager',
      avatar: avatar08,
    },
    stats: {
      likes: 8,
      comments: 7,
      shares: 4,
    },
  },
  {
    category: 'Tips & Advice',
    time: 'May 24, 2023',
    title: 'How to check the website before releasing it?',
    image: blogImg3,
    author: {
      name: 'Marvin McKinney',
      role: 'Senior UI/UX Designer',
      avatar: avatar09,
    },
    stats: {
      likes: 8,
      comments: 7,
      shares: 4,
    },
  },
]

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


