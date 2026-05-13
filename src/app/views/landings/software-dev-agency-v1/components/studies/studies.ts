import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { caseStudiesData } from '../../data';
register;

@Component({
  selector: 'software-dev-agency1-studies',
  imports: [RouterLink],
  templateUrl: './studies.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Studies {
  caseStudiesData = caseStudiesData;
  @ViewChild('workSwiper', { static: true })
  workSwiper!: ElementRef;

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '#case-study-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#prev-screen',
      nextEl: '#next-screen',
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const swiper = new Swiper(this.workSwiper.nativeElement, this.swiperConfig);

      this.updateActiveTab(swiper.realIndex);

      swiper.on('slideChange', () => {
        this.updateActiveTab(swiper.realIndex);
      });
    }
  }

  updateActiveTab(index: number): void {
    document.querySelectorAll('.swiper-tab').forEach((tab) => {
      tab.classList.add('hidden');
      tab.classList.remove('active');
    });

    const activeTab = document.querySelector(`#image-${index + 1}`);

    if (activeTab) {
      activeTab.classList.remove('hidden');
      activeTab.classList.add('active');
    }
  }
}
