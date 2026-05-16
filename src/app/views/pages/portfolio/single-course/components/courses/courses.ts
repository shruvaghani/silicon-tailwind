import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { coursesData } from '../../data';
register()  

@Component({
  selector: 'single-course-courses',
  imports: [RouterLink, LucideAngularModule,SwiperDirective],
  templateUrl: './courses.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Courses {
  coursesData = coursesData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      '560': {
        slidesPerView: 2,
      },
      '1000': {
        slidesPerView: 3,
      },
    },
  };
}
