import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Industries } from "./components/industries/industries";
import { Integration } from "./components/integration/integration";
import { AppFeature } from "./components/app-feature/app-feature";
import { Blog } from "./components/blog/blog";
import { Pricing } from "./components/pricing/pricing";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-saas-v4',
  imports: [Hero, About, Industries, Integration, AppFeature, Blog, Pricing, Footer],
  templateUrl: './saas-v4.html',
  styles: ``,
})
export class SaasV4 {

}
