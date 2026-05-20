import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { heroSlidesData, socialLinksData } from '../../data';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';

@Component({
  selector: 'software-dev-agency1-hero',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  heroSlidesData = heroSlidesData;
  socialLinksData = socialLinksData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation, EffectFade, Pagination],
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 700,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#hero-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#hero-prev',
      nextEl: '#hero-next',
    },
  };
}
