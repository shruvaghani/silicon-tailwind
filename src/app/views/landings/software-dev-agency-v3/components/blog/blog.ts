import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { blogsData } from '../../data';
register();

@Component({
  selector: 'software-dev-agency3-blog',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './blog.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Blog {
  blogsData = blogsData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    autoplay: true,
    spaceBetween: 24,
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '500': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: '#blogpagination',
      clickable: true,
    },
  };
}
