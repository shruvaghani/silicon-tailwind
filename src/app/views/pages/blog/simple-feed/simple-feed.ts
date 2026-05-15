import { Component } from '@angular/core';
import { Swiper } from "./components/swiper/swiper";
import { Categories } from "./components/categories/categories";
import { BlogCta } from "@app/components/blog-cta/blog-cta";
import { Footer } from "@app/components/footer/footer";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";

@Component({
  selector: 'app-simple-feed',
  imports: [Swiper, Categories, BlogCta, Footer, Breadcrumb],
  templateUrl: './simple-feed.html',
  styles: ``,
})
export class SimpleFeed {

}
