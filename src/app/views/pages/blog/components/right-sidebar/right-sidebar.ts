import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { blogTopicsData, recentPostsData, socialLinksData, tagsData } from '../data';

@Component({
  selector: 'app-right-sidebar',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './right-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RightSidebar {
  blogTopicsData = blogTopicsData;
  recentPostsData = recentPostsData;
  tagsData = tagsData;
  socialLinksData = socialLinksData;
}
