import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Plans } from "./components/plans/plans";
import { Comparison } from "./components/comparison/comparison";
import { Faq } from "./components/faq/faq";
import { Brands } from "./components/brands/brands";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";
import { Header } from "@app/components/header/header";

@Component({
  selector: 'app-pricing',
  imports: [Hero, Plans, Comparison, Faq, Brands, Cta, Footer, Header],
  templateUrl: './pricing.html',
  styles: ``,
})
export class Pricing {

}
