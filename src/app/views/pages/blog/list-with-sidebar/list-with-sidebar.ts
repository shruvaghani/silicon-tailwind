import { Component } from '@angular/core';
import { BlogCta } from '@app/components/blog-cta/blog-cta';
import { Footer } from '@app/components/footer/footer';
import { MobileRightSidebar } from '../components/mobile-right-sidebar/mobile-right-sidebar';
import { LucideAngularModule } from 'lucide-angular';
import { LeftContent } from './components/left-content/left-content';
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";

@Component({
  selector: 'app-list-with-sidebar',
  imports: [BlogCta, Footer, MobileRightSidebar, LucideAngularModule, LeftContent, Breadcrumb],
  templateUrl: './list-with-sidebar.html',
  styles: ``,
})
export class ListWithSidebar {}
