import { Component } from '@angular/core';
import { LeftContent } from "./components/left-content/left-content";
import { BlogCta } from "@app/components/blog-cta/blog-cta";
import { LucideAngularModule } from "lucide-angular";
import { MobileRightSidebar } from "../components/mobile-right-sidebar/mobile-right-sidebar";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { Footer } from "../components/footer/footer";


@Component({
  selector: 'app-grid-with-sidebar',
  imports: [LeftContent, BlogCta, LucideAngularModule, MobileRightSidebar, Breadcrumb, Footer],
  templateUrl: './grid-with-sidebar.html',
  styles: ``,
})
export class GridWithSidebar {

}
