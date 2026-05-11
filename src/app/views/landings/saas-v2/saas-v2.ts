import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { Comparison } from "./components/comparison/comparison";
import { Testimonials } from "./components/testimonials/testimonials";
import { Download } from "./components/download/download";
import { Pricing } from "./components/pricing/pricing";
import { Integrations } from "./components/integrations/integrations";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-saas-v2',
  imports: [Hero, Features, Comparison, Testimonials, Download, Pricing, Integrations, Cta, Footer],
  templateUrl: './saas-v2.html',
  styles: ``,
})

export class SaasV2 {

}
