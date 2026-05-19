import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { testimonialData } from '../../data';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'saas-v1-testimonials',
  imports: [LucideAngularModule, SwiperDirective],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonials {
  testimonialData = testimonialData;

  swiperConfig: SwiperOptions
   = {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '#swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#testimonials-prev',
      nextEl: '#testimonials-next',
    },
  };
}
