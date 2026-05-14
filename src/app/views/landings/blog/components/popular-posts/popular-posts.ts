import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { postData } from '../../data';

@Component({
  selector: 'blog-popular-posts',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './popular-posts.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PopularPosts {
  postData = postData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '#popular-pagination',
      clickable: true,
    },
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '576': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      },
    },
  };
}
