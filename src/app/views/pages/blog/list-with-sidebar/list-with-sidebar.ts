import { Component } from '@angular/core';
import { BlogCta } from '@app/components/blog-cta/blog-cta';
import { MobileRightSidebar } from '../components/mobile-right-sidebar/mobile-right-sidebar';
import { LucideAngularModule } from 'lucide-angular';
import { LeftContent } from './components/left-content/left-content';
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { Footer } from "../components/footer/footer";

@Component({
  selector: 'app-list-with-sidebar',
  imports: [BlogCta, MobileRightSidebar, LucideAngularModule, LeftContent, Breadcrumb, Footer],
  templateUrl: './list-with-sidebar.html',
  styles: ``,
})
export class ListWithSidebar {}
