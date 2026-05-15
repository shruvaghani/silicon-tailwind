import { Component } from '@angular/core';
import { Breadcrumb } from './components/breadcrumb/breadcrumb';
import { BlogCta } from '@app/components/blog-cta/blog-cta';
import { Footer } from '@app/components/footer/footer';
import { MobileRightSidebar } from '../components/mobile-right-sidebar/mobile-right-sidebar';
import { LucideAngularModule } from 'lucide-angular';
import { LeftContent } from './components/left-content/left-content';

@Component({
  selector: 'app-list-with-sidebar',
  imports: [Breadcrumb, BlogCta, Footer, MobileRightSidebar, LucideAngularModule, LeftContent],
  templateUrl: './list-with-sidebar.html',
  styles: ``,
})
export class ListWithSidebar {}
