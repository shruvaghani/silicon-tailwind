import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { testimonialsData } from '../../data';
register();

@Component({
  selector: 'single-course-testimonial',
  imports: [SwiperDirective, LucideAngularModule],
  templateUrl: './testimonial.html',
  styles: ``,
})
export class Testimonial {
  testimonialsData = testimonialsData;

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 8,
    loop: true,
    pagination: {
      el: '#pagination',
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
        spaceBetween: 24,
      },
    },
  };
}
