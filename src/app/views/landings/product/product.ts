import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Video } from "./components/video/video";
import { Benefits } from "./components/benefits/benefits";
import { Specs } from "./components/specs/specs";
import { Colors } from "./components/colors/colors";
import { Cta } from "./components/cta/cta";
import { Gallery } from "./components/gallery/gallery";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-product',
  imports: [Hero, Video, Benefits, Specs, Colors, Cta, Gallery, Footer],
  templateUrl: './product.html',
  styles: ``,
})
export class Product {

}
