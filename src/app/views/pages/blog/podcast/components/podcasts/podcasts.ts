import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { podcastsData } from '../../data';
register();

@Component({
  selector: 'podcast-podcasts',
  imports: [LucideAngularModule, RouterLink, SwiperDirective],
  templateUrl: './podcasts.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Podcasts {
  podcastsData = podcastsData;

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
      '1000': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      },
    },
  };
}
