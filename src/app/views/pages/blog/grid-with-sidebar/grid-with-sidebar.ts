import { Component } from '@angular/core';
import { LeftContent } from "./components/left-content/left-content";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { BlogCta } from "@app/components/blog-cta/blog-cta";
import { Footer } from "@app/components/footer/footer";
import { LucideAngularModule } from "lucide-angular";
import { MobileRightSidebar } from "../components/mobile-right-sidebar/mobile-right-sidebar";

@Component({
  selector: 'app-grid-with-sidebar',
  imports: [LeftContent, Breadcrumb, BlogCta, Footer, LucideAngularModule, MobileRightSidebar],
  templateUrl: './grid-with-sidebar.html',
  styles: ``,
})
export class GridWithSidebar {

}
