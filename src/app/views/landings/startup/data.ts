const ridingScooterIcon = 'assets/img/landing/startup/icons/riding-scooter.svg';
const diamondIcon = 'assets/img/landing/startup/icons/diamond.svg';
const planetIcon = 'assets/img/landing/startup/icons/planet.svg';

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
    description: 'Integer laoreet aliquam mi, est at vitae, egestas. Nisl proin ipsum dui, sagittis mauris vel arcu lacinia massa.'
  },
  {
    icon: diamondIcon,
    alt: 'Icon',
    title: 'Quality & style',
    description: 'Nunc aliquam arcu pretium mauris nibh quisque quis. Urna purus fringilla iaculis turpis libero mattis commodo.'
  },
  {
    icon: planetIcon,
    alt: 'Icon',
    title: 'Cities made for living',
    description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh diam volutpat posuere venenatis.'
  }
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
    description: 'Use the map in the app to find your closest scooter. You can also book it 40 minutes in advance.'
  },
  {
    step: 2,
    image: step2Image,
    title: 'Start ride',
    description: 'To start your ride, scan the QR code with your app and tap on "Start ride". Hit the throttle to go and pull the brakes to slow.'
  },
  {
    step: 3,    
    image: step3Image,
    title: 'Enjoy your ride!',
    description: `When you're riding past traffic, be sure to follow all street signs and laws. Please ride safely and be mindful of where you park. Make sure you're wearing a helmet.`
  },
  {
    step: 4,
    image: step4Image,
    title: 'Park carefully',
    description: 'After your ride, park the scooter safely and out of the way of pedestrian and car traffic - your community will appreciate it. Finally lock it by tapping on "End ride".'
  }
];
