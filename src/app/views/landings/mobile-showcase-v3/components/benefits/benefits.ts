import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { benefitCategoryData, benefitConditionData, statisticsFeatureData } from '../../data';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'mobile-showcase-v3-benefits',
  imports: [RouterLink, LucideAngularModule, SwiperDirective],
  templateUrl: './benefits.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Benefits {
  statisticsFeatureData = statisticsFeatureData;
  benefitConditionData = benefitConditionData;
  benefitCategoryData = benefitCategoryData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    pagination: {
      el: '#pagination2',
      clickable: true,
    },
    breakpoints: {
      '425': { slidesPerView: 1, spaceBetween: 10 },
      '768': { slidesPerView: 2, spaceBetween: 20 },
      '1100': { slidesPerView: 4, spaceBetween: 20 },
    },
  };
}
