import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { testimonialData } from '../../data';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';

register();

@Component({
  selector: 'saas-v3-testimonial',
  imports: [LucideAngularModule, SwiperDirective],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Testimonial {
  testimonialData = testimonialData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '#testimonials-paginations',
      clickable: true,
    },
    navigation: {
      prevEl: '#prev-testimonial',
      nextEl: '#next-testimonial',
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '1000': {
        slidesPerView: 2,
      },
      '1200': {
        slidesPerView: 3,
      },
    },
  };
}
