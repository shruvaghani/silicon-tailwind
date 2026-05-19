import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import lgVideo from 'lightgallery/plugins/video';

@Component({
  selector: 'product-video',
  imports: [LightgalleryModule],
  templateUrl: './video.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Video {
  settings = {
    plugins: [lgVideo],
    speed: 500,
  };
}
