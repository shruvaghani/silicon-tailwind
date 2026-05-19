import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video';
import { LightgalleryModule } from "lightgallery/angular";
@Component({
  selector: 'saas-v5-testimonials',
  imports: [LightgalleryModule],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonials {
  settings = {
    counter: false,
    download: false,
    plugins: [lgVideo],
  };
}
