import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RightSidebar } from "../../../components/right-sidebar/right-sidebar";
import { LucideAngularModule } from "lucide-angular";
import lgVideo from 'lightgallery/plugins/video'
import { LightgalleryModule } from "lightgallery/angular";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'grig-with-sidebar-left-content',
  imports: [RightSidebar, LucideAngularModule, LightgalleryModule, RouterLink],
  templateUrl: './left-content.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LeftContent {
 settings = {
    counter: false,
    download: false,
    plugins: [lgVideo],
  };
}
