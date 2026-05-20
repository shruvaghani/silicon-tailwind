import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { blogData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
register();

@Component({
  selector: 'saas-v4-blog',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './blog.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Blog {
  blogData = blogData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    pagination: {
      el: '#blogpagination',
      clickable: true,
    },
    breakpoints: {
      '0': {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  };
}
