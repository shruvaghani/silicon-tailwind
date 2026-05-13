import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { testimonialsData } from '../../data';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types'
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperDirective } from '@/app/directive/swiper-directive';
register()

@Component({
  selector: 'software-dev-agency1-testimonials',
  imports: [LucideAngularModule, SwiperDirective],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonials {
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
  }
  
}
