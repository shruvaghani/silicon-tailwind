import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { categoryCardData } from '../../data';

register();

@Component({
  selector: 'saas-v5-cases',
  imports: [RouterLink],
  templateUrl: './cases.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Cases {
  categoryCardData = categoryCardData;
}
