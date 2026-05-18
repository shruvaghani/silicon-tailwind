import { Component } from '@angular/core';
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { Pagetitle } from "./components/pagetitle/pagetitle";
import { Offers } from "./components/offers/offers";
import { Steps } from "./components/steps/steps";
import { Brands } from "./components/brands/brands";
import { ImageText } from "./components/image-text/image-text";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-service-detail-v1',
  imports: [Breadcrumb, Pagetitle, Offers, Steps, Brands, ImageText, Cta, Footer],
  templateUrl: './service-detail-v1.html',
  styles: ``,
})
export class ServiceDetailV1 {

}
