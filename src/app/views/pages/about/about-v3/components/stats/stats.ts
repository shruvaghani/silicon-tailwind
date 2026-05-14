import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { brandItemsData } from '../../data';
register();

@Component({
  selector: 'about-v3-stats',
  imports: [RouterLink, LucideAngularModule, SwiperDirective],
  templateUrl: './stats.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Stats {
  brandItemsData = brandItemsData;
  swiperConfig: SwiperOptions = {
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      '500': {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      '650': {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      '900': {
        slidesPerView: 5,
        spaceBetween: 8,
      },
      '1100': {
        slidesPerView: 6,
        spaceBetween: 8,
      },
    },
  };
}
