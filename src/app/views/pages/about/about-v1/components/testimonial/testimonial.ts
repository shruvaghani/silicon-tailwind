import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { testimonialsData } from '../../data';

@Component({
  selector: 'about-v1-testimonial',
  imports: [LucideAngularModule, SwiperDirective],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonial {
  testimonialsData = testimonialsData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination, Navigation],
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
