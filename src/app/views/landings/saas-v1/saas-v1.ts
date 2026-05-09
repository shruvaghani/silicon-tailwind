import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Dashboard } from "./components/dashboard/dashboard";
import { Cta } from "./components/cta/cta";
import { Features } from "./components/features/features";
import { Project } from "./components/project/project";
import { Pricing } from "./components/pricing/pricing";
import { Testimonials } from "./components/testimonials/testimonials";
import { Integrations } from "./components/integrations/integrations";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-saas-v1',
  imports: [Hero, Features, Dashboard, Project, Pricing, Testimonials, Integrations, Cta, Footer],
  templateUrl: './saas-v1.html',
  styles: ``,
})
export class SaasV1 {

}
