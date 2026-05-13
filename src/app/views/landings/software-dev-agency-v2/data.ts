const clutchLogo = 'assets/img/landing/software-agency-2/awards/clutch.png';
const goodFirmsLogo = 'assets/img/landing/software-agency-2/awards/good-firms.png';
const productHuntLogo = 'assets/img/landing/software-agency-2/awards/product-hunt.png';
const awwwardsLogo = 'assets/img/landing/software-agency-2/awards/awwwards.png';

const caseStudy1 = 'assets/img/landing/software-agency-2/case-studies/01.jpg';
const caseStudy2 = 'assets/img/landing/software-agency-2/case-studies/02.jpg';

const avatar48 = 'assets/img/avatar/48.jpg';
const avatar49 = 'assets/img/avatar/49.jpg';
const avatar50 = 'assets/img/avatar/50.jpg';

export const benefitItemsData: string[] = [
  'Extensive work experience',
  'flexible working conditions',
  'Large and friendly team',
];

export type AwardType = {
  image: string;
  alt: string;
  description: string;
};

export const awardsData: AwardType[] = [
  {
    image: clutchLogo,
    alt: 'Clutch',
    description: 'Phasellus eu ex ultrices, facilisis ex at aliquet felis rutrum ante.',
  },
  {
    image: goodFirmsLogo,
    alt: 'Good Firms',
    description: 'Nulla pellentesque justo enim, in elementum turpis tincidunt.',
  },
  {
    image: productHuntLogo,
    alt: 'Product Hunt',
    description: 'Donec pulvinar iaculis ex laoreet vestibulum interdum viverra.',
  },
  {
    image: awwwardsLogo,
    alt: 'Awwwards',
    description: 'Cras ullamcorper laoreet erat suscipit. Sed id lacus blandit.',
  },
];

export type CaseStudyType = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

export const caseStudyData: CaseStudyType[] = [
  {
    image: caseStudy1,
    title: 'Travelers Portal with Smart Search',
    description:
      'Aenean sed mi ut erat venenatis imperdiet. Mauris sed turpis ac elit ultricies rhoncus id et magna donec euismod interdum risus.',
    buttonText: 'See all case studies',
  },
  {
    image: caseStudy2,
    title: 'Fintech App for Financial Management',
    description:
      'Nullam semper enim quis vulputate mollis. Donec ultrices elementum mauris, ac porttitor mi cursus eget vestibulum tellus sodales.',
    buttonText: 'See all case studies',
  },
];

export type TestimonialType = {
  name: string
  designation: string
  image: string
  title: string
  description: string
  active?: boolean
}

export const testimonialsData: TestimonialType[] = [
  {
    name: 'Jack Taylor',
    designation: 'Co-founder of Lorem Company',
    image: avatar48,
    title: '“Cool and experienced team to develop your web application.”',
    description:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa volutpat pretium.',
    active: true,
  },
  {
    name: 'Annette Black',
    designation: 'VP of Strategy, Stretto Inc.',
    image: avatar49,
    title: '“Efficient and Innovative: Our Experience with Silicon.”',
    description:
      'Vero minima sequi adipisci architecto dolorum, error animi delectus dicta perferendis! A, exercitationem soluta quam reprehenderit rem animi amet eligendi voluptates consequatur ipsam pariatur necessitatibus laboriosam in illo eos molestias ex explicabo eaque assumenda voluptatibus ducimus consectetur perferendis! Architecto molestias, rerum reprehenderit amet sunt natus fuga blanditiis suscipit.',
  },
  {
    name: 'Mel Gibson',
    designation: 'Founder & CEO, Uber',
    image: avatar50,
    title: '“Exceptional Service and Quality Results.”',
    description:
      'In quas adipisci assumenda voluptas eveniet obcaecati est quis sapiente voluptatum iste porro blanditiis debitis ut beatae, fugit quidem fugiat eum molestias? Dolore magni harum officia tempore eos sapiente. Voluptatibus pariatur omnis libero unde quasi optio, tenetur reprehenderit tempore necessitatibus harum mollitia qui. Maxime, quas tempore. Sunt quaerat porro facere blanditiis voluptatibus.',
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
