import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import lgVideo from 'lightgallery/plugins/video';
import { LightgalleryModule } from "lightgallery/angular";

@Component({
  selector: 'single-post-content',
  imports: [RouterLink, LucideAngularModule, LightgalleryModule],
  templateUrl: './content.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Content {
  settings = {
    counter: false,
    download: false,
    plugins: [lgVideo],
  };
}
