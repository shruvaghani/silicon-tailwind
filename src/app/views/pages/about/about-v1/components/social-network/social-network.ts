import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { socialItemsData } from '../../data';
import { CommonModule } from '@angular/common';
register();

@Component({
  selector: 'about-v1-social-network',
  imports: [RouterLink, SwiperDirective,CommonModule],
  templateUrl: './social-network.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SocialNetwork {
  socialItemsData = socialItemsData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    pagination: {
      el: '#swiper-paginations',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 3,
      },
      '650': {
        slidesPerView: 4,
      },
      '900': {
        slidesPerView: 5,
      },
      '1100': {
        slidesPerView: 6,
      },
    },
  };
}
