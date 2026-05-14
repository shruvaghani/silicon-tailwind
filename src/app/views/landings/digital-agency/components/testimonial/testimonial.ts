import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { testimonialsData } from '../../data';
import { isPlatformBrowser } from '@angular/common';
import { Navigation } from 'swiper/modules';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
register()

@Component({
  selector: 'digital-agency-testimonial',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './testimonial.html',
  styles: ``,
})
export class Testimonial {
  testimonialsData = testimonialsData;
  @ViewChild('workSwiper', { static: true })
  workSwiper!: ElementRef;

  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 24,
    loop: true,
    autoHeight: true,
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

    const activeTab = document.querySelector(`#author-${index + 1}`);

    if (activeTab) {
      activeTab.classList.remove('hidden');
      activeTab.classList.add('active');
    }
  }
}
