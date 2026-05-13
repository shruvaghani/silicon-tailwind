import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { TestimonialData } from '../../data';
register();

@Component({
  selector: 'conference-testimonials',
  imports: [SwiperDirective],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonials {
  TestimonialData = TestimonialData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 12,
    loop: true,
    pagination: {
      el: '#pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#prev',
      nextEl: '#next',
    },
  };
}
