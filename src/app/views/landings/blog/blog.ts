import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { PopularPosts } from "./components/popular-posts/popular-posts";
import { LatestPosts } from "./components/latest-posts/latest-posts";
import { Podcasts } from "./components/podcasts/podcasts";
import { BlogCta } from "@app/components/blog-cta/blog-cta";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-blog',
  imports: [Hero, PopularPosts, LatestPosts, Podcasts, BlogCta, Footer],
  templateUrl: './blog.html',
  styles: ``,
})
export class Blog {

}
