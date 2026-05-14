import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { blogPostsData } from '../../data';

@Component({
  selector: 'digital-agency-blog',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './blog.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Blog {
  blogPostsData = blogPostsData;

  featuredPost = this.blogPostsData.find((item) => item.featured);

  sidePosts = this.blogPostsData.filter((item) => !item.featured);
}
