import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { sliderImages } from '../../data';
register();

@Component({
  selector: 'product-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  sliderImages = sliderImages;
}
