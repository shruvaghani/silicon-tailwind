import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { portfolioData } from '../../data';
register();

@Component({
  selector: 'single-project-project',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './project.html',
  styles: ``,
})
export class Project {
  portfolioData = portfolioData;
  projectConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#pagination',
      clickable: true,
    },
    breakpoints: {
      '560': {
        slidesPerView: 2,
      },
      '1000': {
        slidesPerView: 3,
      },
    },
  };
}
