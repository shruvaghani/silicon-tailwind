import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { register } from 'swiper/element/bundle';
import { featuresData } from '../data';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';
register();

@Component({
  selector: 'home-features',
  imports: [LottieComponent,SwiperDirective],
  templateUrl: './features.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Features {
  featuresData = featuresData;
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#prev-news',
      nextEl: '#next-news',
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '700': {
        slidesPerView: 3,
      },
      '1000': {
        slidesPerView: 4,
      },
    },
  }
}
