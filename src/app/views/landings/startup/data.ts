const ridingScooterIcon = 'assets/img/landing/startup/icons/riding-scooter.svg';
const diamondIcon = 'assets/img/landing/startup/icons/diamond.svg';
const planetIcon = 'assets/img/landing/startup/icons/planet.svg';

const mobileIcon = 'assets/img/landing/startup/icons/mobile.svg';
const scooterIcon = 'assets/img/landing/startup/icons/scooter.svg';
const handIcon = 'assets/img/landing/startup/icons/hand.svg';
const smileyIcon = 'assets/img/landing/startup/icons/smiley.svg';

const frFlag = 'assets/img/flags/fr.png';
const deFlag = 'assets/img/flags/de.png';
const itFlag = 'assets/img/flags/it.png';

const step1Image = 'assets/img/landing/startup/steps/01.svg';
const step2Image = 'assets/img/landing/startup/steps/02.svg';
const step3Image = 'assets/img/landing/startup/steps/03.svg';
const step4Image = 'assets/img/landing/startup/steps/04.svg';

export type HeroStats = {
  icon: string;
  text: string;
};

export const heroStatsData: HeroStats[] = [
  {
    icon: 'tabler:circle-check',
    text: '$8,294 pledged',
  },
  {
    icon: 'tabler:circle-check',
    text: '63% funded',
  },
  {
    icon: 'tabler:circle-check',
    text: '15 days to go',
  },
];

export type FeatureData = {
  icon: string;
  alt: string;
  title: string;
  description: string;
};

export const featuresData: FeatureData[] = [
  {
    icon: ridingScooterIcon,
    alt: 'Icon',
    title: 'Freedom of movement',
    description:
      'Integer laoreet aliquam mi, est at vitae, egestas. Nisl proin ipsum dui, sagittis mauris vel arcu lacinia massa.',
  },
  {
    icon: diamondIcon,
    alt: 'Icon',
    title: 'Quality & style',
    description:
      'Nunc aliquam arcu pretium mauris nibh quisque quis. Urna purus fringilla iaculis turpis libero mattis commodo.',
  },
  {
    icon: planetIcon,
    alt: 'Icon',
    title: 'Cities made for living',
    description:
      'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh diam volutpat posuere venenatis.',
  },
];

export type WorkStep = {
  step: number;
  image: string;
  title: string;
  description: string;
};

export const worksData: WorkStep[] = [
  {
    step: 1,
    image: step1Image,
    title: 'Find a scooter nearby',
    description:
      'Use the map in the app to find your closest scooter. You can also book it 40 minutes in advance.',
  },
  {
    step: 2,
    image: step2Image,
    title: 'Start ride',
    description:
      'To start your ride, scan the QR code with your app and tap on "Start ride". Hit the throttle to go and pull the brakes to slow.',
  },
  {
    step: 3,
    image: step3Image,
    title: 'Enjoy your ride!',
    description: `When you're riding past traffic, be sure to follow all street signs and laws. Please ride safely and be mindful of where you park. Make sure you're wearing a helmet.`,
  },
  {
    step: 4,
    image: step4Image,
    title: 'Park carefully',
    description:
      'After your ride, park the scooter safely and out of the way of pedestrian and car traffic - your community will appreciate it. Finally lock it by tapping on "End ride".',
  },
];

export type CheckboxOptionType = {
  id: string;
  label: string;
  checked?: boolean;
};

export type StepType = {
  number: number;
  title: string;
  description: string;
  isActive?: boolean;
};

export const checkboxOptionsData: CheckboxOptionType[] = [
  {
    id: 'news-updates',
    label: 'Stay updated with our news, events and upgrades',
  },
  {
    id: 'join-team',
    label: 'Join the team and become a part of our startup family',
  },
  {
    id: 'trial-app',
    label: 'Request a trial app',
    checked: true,
  },
  {
    id: 'invest',
    label: 'Invest in ProScooter',
  },
  {
    id: 'other',
    label: 'Other',
  },
];

export const stepsData: StepType[] = [
  {
    number: 1,
    title: 'Your request*',
    description: 'Please choose the type of your request and let us know how we can help.',
    isActive: true,
  },
  {
    number: 2,
    title: 'Personal info*',
    description: 'Leave your personal info and we will contact you as soon as possible.',
  },
  {
    number: 3,
    title: 'Additional comments',
    description:
      'If you have any questions or comments please leave us a message. We are here for you!',
  },
];

export type BenefitType = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

export const benefitsData: BenefitType[] = [
  {
    image: mobileIcon,
    alt: 'Icon',
    title: 'Trial app',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo venenatis.',
  },
  {
    image: scooterIcon,
    alt: 'Icon',
    title: 'High-end scooters',
    description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
  },
  {
    image: handIcon,
    alt: 'Icon',
    title: 'Lowest price for riding',
    description: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.',
  },
  {
    image: smileyIcon,
    alt: 'Icon',
    title: 'Happiness guarantee',
    description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris pretium.',
  },
];

export type ContactInfoType = {
  icon: string;
  link: string;
  text: string;
  type: 'tel' | 'mailto';
};

export const contactInfoData: ContactInfoType[] = [
  {
    icon: 'lucide:phone-call',
    link: 'tel:4065550120',
    text: '(406) 555‑0120',
    type: 'tel'
  },
  {
    icon: 'lucide:mail',
    link: 'mailto:email@example.com',
    text: 'email@example.com',
    type: 'mailto'
  }
];

export type SocialLinkType = {
  icon: string;
  hoverClass: string;
};


export const socialLinksData: SocialLinkType[] = [
  {
    icon: 'tabler:brand-facebook-filled',
    hoverClass: 'hover:bg-blue-500',
  },
  {
    icon: 'tabler:brand-linkedin',
    hoverClass: 'hover:bg-sky-700',
  },
  {
    icon: 'tabler:brand-telegram',
    hoverClass: 'hover:bg-sky-700',
  },
  {
    icon: 'tabler:brand-youtube-filled',
    hoverClass: 'hover:bg-danger',
  }
];

export type CountryType = {
  flag: string;
  name: string;
  code: string;
};

export const countriesData: CountryType[] = [
  {
    flag: frFlag,
    name: 'France',
    code: 'fr'
  },
  {
    flag: deFlag,
    name: 'Germany',
    code: 'de'
  },
  {
    flag: itFlag,
    name: 'Italy',
    code: 'it'
  }
];
