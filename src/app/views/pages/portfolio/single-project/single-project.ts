import { Component } from '@angular/core';
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { Pagetitle } from "./components/pagetitle/pagetitle";
import { Hero } from "./components/hero/hero";
import { ImageGrid } from "./components/image-grid/image-grid";
import { About } from "./components/about/about";
import { Results } from "./components/results/results";
import { Testimonial } from "./components/testimonial/testimonial";
import { Project } from "./components/project/project";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-single-project',
  imports: [Breadcrumb, Pagetitle, Hero, ImageGrid, About, Results, Testimonial, Project, Cta, Footer],
  templateUrl: './single-project.html',
  styles: ``,
})
export class SingleProject {

}
