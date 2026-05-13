import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Solution } from "./components/solution/solution";
import { Industries } from "./components/industries/industries";
import { Projects } from "./components/projects/projects";
import { Technology } from "./components/technology/technology";
import { Brands } from "./components/brands/brands";
import { Benefits } from "./components/benefits/benefits";
import { Blog } from "./components/blog/blog";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-software-dev-agency-v3',
  imports: [Hero, About, Solution, Industries, Projects, Technology, Brands, Benefits, Blog, Footer],
  templateUrl: './software-dev-agency-v3.html',
  styles: ``,
})
export class SoftwareDevAgencyV3 {

}
