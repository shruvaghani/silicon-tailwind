import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { blogData } from '../../data';
register();

@Component({
  selector: 'saas-v4-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Blog {
  blogData = blogData;
}
