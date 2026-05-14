import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { blogListData, blogTabsData } from '../../data';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'blog-latest-posts',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './latest-posts.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LatestPosts {
  blogTabsData = blogTabsData;
  blogListData = blogListData;
}
