import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { popularCoursesData, tabData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'online-popular-courses',
  imports: [LucideAngularModule, RouterLink,SwiperDirective],
  templateUrl: './popular-courses.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PopularCourses {
  popularCoursesData = popularCoursesData;
  tabData = tabData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: '#pagination1',
      clickable: true,
    },
    navigation: {
      prevEl: '#popular-prev',
      nextEl: '#popular-next',
    },
    breakpoints: {
      '560': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 1,
      },
      '850': {
        slidesPerView: 2,
      },
      '1200': {
        slidesPerView: 3,
      },
    },
  };
}
