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
