import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { blogData } from '../../data';
register();

@Component({
  selector: 'blog-hero',
  imports: [RouterLink, LucideAngularModule, SwiperDirective],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  blogData = blogData;
  swiperConfig: SwiperOptions = {
    modules: [Mousewheel, Scrollbar, FreeMode],
    direction: 'vertical',
    slidesPerView: 2,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    spaceBetween: 24,
    freeMode: true,
    mousewheel: true,
  };
}
