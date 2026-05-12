import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { PopularCourses } from "./components/popular-courses/popular-courses";
import { Icons } from "./components/icons/icons";
import { Tesimonials } from "./components/tesimonials/tesimonials";
import { Steps } from "./components/steps/steps";
import { Brands } from "./components/brands/brands";
import { Faq } from "./components/faq/faq";
import { Signup } from "./components/signup/signup";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-online-courses',
  imports: [Hero, PopularCourses, Icons, Tesimonials, Steps, Brands, Faq, Signup, Footer],
  templateUrl: './online-courses.html',
  styles: ``,
})
export class OnlineCourses {

}
