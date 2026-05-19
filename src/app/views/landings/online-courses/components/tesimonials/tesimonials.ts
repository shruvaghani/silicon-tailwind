import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { testimonialsData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

@Component({
  selector: 'online-tesimonials',
  imports: [LucideAngularModule,SwiperDirective],
  templateUrl: './tesimonials.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tesimonials {
  testimonialsData = testimonialsData;
    swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '#swiper-pagination1',
      clickable: true,
    },
    navigation: {
      prevEl: '#testimonials-prev',
      nextEl: '#testimonials-next',
    },
  }
}
