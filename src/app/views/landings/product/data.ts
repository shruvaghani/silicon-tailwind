const slider1 = 'assets/img/landing/product/hero/slider/01.jpg';
const slider2 = 'assets/img/landing/product/hero/slider/02.jpg';
const slider3 = 'assets/img/landing/product/hero/slider/03.jpg';

const batteryIcon = 'assets/img/landing/product/benefits/battery.svg';
const droneIcon = 'assets/img/landing/product/benefits/drone.svg';
const monitorIcon = 'assets/img/landing/product/benefits/monitor.svg';
const thermometerIcon = 'assets/img/landing/product/benefits/thermometer.svg';
const ledLightIcon = 'assets/img/landing/product/benefits/led-light.svg';
const zoomInIcon = 'assets/img/landing/product/benefits/zoom-in.svg';
const processorIcon = 'assets/img/landing/product/benefits/computer-microprocessor.svg';
const audioIcon = 'assets/img/landing/product/benefits/audio.svg';
const benefitImage = 'assets/img/landing/product/benefits/image.png';

const colorImage1 = 'assets/img/landing/product/colors/01.png';
const colorImage2 = 'assets/img/landing/product/colors/02.png';

export const sliderImages: string[] = [slider1, slider2, slider3];

export const benefitsData = {
  image: benefitImage,

  left: [
    {
      icon: batteryIcon,
      title: 'Flight time',
      value: '60 min',
    },
    {
      icon: droneIcon,
      title: 'Obstacle sensing',
      value: '5-Direction',
    },
    {
      icon: monitorIcon,
      title: 'Ultra-clear video',
      value: '4K',
    },
  ],

  center: [
    {
      icon: thermometerIcon,
      title: 'Working temperature',
      value: '-10°C to 40°C',
    },
    {
      icon: ledLightIcon,
      title: 'For night time',
      value: 'LED searchlight',
    },
  ],

  right: [
    {
      icon: zoomInIcon,
      title: 'Optical camera',
      value: '2x zoom',
    },
    {
      icon: processorIcon,
      title: 'Sensor',
      value: '1 inch',
    },
    {
      icon: audioIcon,
      title: 'Noise reduction',
      value: '4dB',
    },
  ],
};

export type SpecificationType = {
  title: string;
  value?: string;
  values?: string[];
};

export const specificationsData: SpecificationType[] = [
  {
    title: 'Weight (Battery & Propellers Included)',
    value: '1400 g',
  },
  {
    title: 'Max Flight Time',
    value: 'Approx. 60 minutes',
  },
  {
    title: 'Vision System',
    values: ['Forward Vision System', 'Backward Vision System', 'Downward Vision System'],
  },
  {
    title: 'Obstacle Sensing',
    values: ['Front & Rear Obstacle Avoidance', 'Left & Right Infrared Obstacle Avoidance'],
  },
  {
    title: 'Camera Sensor',
    values: ['1" CMOS', 'Effective pixels: 20 M'],
  },
  {
    title: 'Max. Video Recording Resolution',
    value: '4K 60P',
  },
  {
    title: 'Max Transmission Distance',
    value: 'FCC: 4.3 mi',
  },
  {
    title: 'Video Transmission System',
    value: 'Lightbridge',
  },
  {
    title: 'Operating Frequency',
    value: '2.4 GHz/5.8 GHz',
  },
];

export type ProductColorType = {
  image: string;
  title: string;
  price: string;
};

export const productColors: ProductColorType[] = [
  {
    image: colorImage1,
    title: 'White ProDrone 2.0',
    price: '$1200',
  },
  {
    image: colorImage2,
    title: 'White ProDrone 2.0',
    price: '$1100',
  },
];

export type SocialLinkType = {
  label: string;
  icon: string;
  hoverClass: string;
};

export const socialLinks: SocialLinkType[] = [
  {
    label: 'Facebook',
    icon: 'tabler:brand-facebook-filled',
    hoverClass: 'hover:bg-blue-500',
  },
  {
    label: 'Instagram',
    icon: 'tabler:brand-instagram',
    hoverClass: 'hover:bg-indigo-500 hover:shadow-full',
  },
  {
    label: 'Twitter',
    icon: 'tabler:brand-twitter-filled',
    hoverClass: 'hover:bg-blue-400 hover:shadow-md',
  },
];

export type ContactInfoType = {
  icon: string;
  text: string;
  type: 'text' | 'link';
  link?: string;
};

export const contactInfo: ContactInfoType[] = [
  {
    icon: 'lucide:map-pin',
    text: `3517 W. Gray St. Utica,</br>Pennsylvania 57867`,
    type: 'text',
  },
  {
    icon: 'lucide:phone-call',
    text: '(406) 555-0120',
    link: 'tel:4065550120',
    type: 'link',
  },
  {
    icon: 'lucide:mail',
    text: 'email@example.com',
    link: 'mailto:email@example.com',
    type: 'link',
  },
];
