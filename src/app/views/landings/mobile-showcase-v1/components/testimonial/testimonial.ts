import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { testimonialData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'mobile-showcase-v1-testimonial',
  imports: [SwiperDirective],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonial {
  testimonialData = testimonialData;
   swiperConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      prevEl: '#prev-review',
      nextEl: '#next-review',
    },
    breakpoints: {
      '600': { slidesPerView: 2 },
    },
  }
}
