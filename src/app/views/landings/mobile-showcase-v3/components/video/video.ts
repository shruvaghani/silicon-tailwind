import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video';
import { LightgalleryModule } from "lightgallery/angular";

@Component({
  selector: 'mobile-showcase-v3-video',
  imports: [LightgalleryModule],
  templateUrl: './video.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Video {
    settings = {
    plugins: [lgVideo],
    speed: 500,
  };
}
