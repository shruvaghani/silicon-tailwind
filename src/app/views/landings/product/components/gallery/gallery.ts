import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register()

@Component({
  selector: 'product-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Gallery {

}
