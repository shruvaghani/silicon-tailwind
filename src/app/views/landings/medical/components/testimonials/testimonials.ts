import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { testimonialsData } from '../../data';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';

register();

@Component({
  selector: 'medical-testimonials',
  imports: [LucideAngularModule, SwiperDirective],
  templateUrl: './testimonials.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: ``,
})
export class Testimonials {
  testimonialsData = testimonialsData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView:1,
    spaceBetween:8,
    loop: true,
    pagination: {
      el: '#swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      '1000': {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      '1500': {
        slidesPerView: 6,
        spaceBetween: 25,
      },
    },
  };
}
