import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { testimonialsData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
register;

@Component({
  selector: 'mobile-showcase-v2-testimonials',
  imports: [LucideAngularModule,SwiperDirective],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Testimonials {
  testimonialsData = testimonialsData;
   SwiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
      prevEl: '#prev-testimonial',
      nextEl: '#next-testimonial',
    },
    pagination: {
      el: '#paginaion2',
      clickable: true,
    },
    breakpoints: {
      '375': {
        slidesPerView: 1,
      },
      '768': {
        slidesPerView: 2,
      },
      '1440': {
        slidesPerView: 3,
      },
    },
  }
}
