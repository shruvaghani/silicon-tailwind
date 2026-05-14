import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { podcastsData } from '../../data';
import { LucideAngularModule } from 'lucide-angular';
register();

@Component({
  selector: 'blog-podcasts',
  imports: [RouterLink, SwiperDirective, LucideAngularModule],
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
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: '#podcast-pagination',
      clickable: true,
    },
    breakpoints: {
      '576': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
      '1000': {
        slidesPerView: 3,
      },
    },
  };
}
