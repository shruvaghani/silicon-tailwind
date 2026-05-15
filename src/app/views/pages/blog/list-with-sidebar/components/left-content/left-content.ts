import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { RightSidebar } from '../../../components/right-sidebar/right-sidebar';
import { LightgalleryModule } from 'lightgallery/angular';
import lgVideo from 'lightgallery/plugins/video';

@Component({
  selector: 'list-with-sidebar-left-content',
  imports: [LucideAngularModule, RouterLink, RightSidebar, LightgalleryModule],
  templateUrl: './left-content.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeftContent {
  settings = {
    counter: false,
    download: false,
    plugins: [lgVideo],
  };
}
