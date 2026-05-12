import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { iconsData } from '../../data';

register();

@Component({
  selector: 'online-icons',
  imports: [],
  templateUrl: './icons.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Icons {
  iconsData = iconsData;
}
