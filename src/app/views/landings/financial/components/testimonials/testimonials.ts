import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { testimonialsData } from '../../data';
import { LucideAngularModule } from "lucide-angular";
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'financial-testimonials',
  imports: [LucideAngularModule,SwiperDirective],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonials {
  testimonialsData = testimonialsData;
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
      '1000': {
        slidesPerView: 2,
      },
      '1200': {
        slidesPerView: 3,
      },
    },
  }
}
