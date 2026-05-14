import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { testimonialData } from '../../data';
register();
@Component({
  selector: 'about-v3-testimonial',
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
    navigation: {
      prevEl: '#prev-testimonial',
      nextEl: '#next-testimonial',
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 3,
      },
    },
  };
}
