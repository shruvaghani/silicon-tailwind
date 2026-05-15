import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { blogTopicsData, recentPostsData, socialLinksData, tagsData } from '../data';

@Component({
  selector: 'app-mobile-right-sidebar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './mobile-right-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MobileRightSidebar {
  blogTopicsData = blogTopicsData;
  recentPostsData = recentPostsData;
  tagsData = tagsData;
  socialLinksData = socialLinksData;
}
