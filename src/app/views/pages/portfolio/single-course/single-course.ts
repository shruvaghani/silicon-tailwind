import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Description } from "./components/description/description";
import { Author } from "./components/author/author";
import { Testimonial } from "./components/testimonial/testimonial";
import { FAQ } from "./components/faq/faq";
import { Courses } from "./components/courses/courses";
import { Footer2 } from "@app/components/footer2/footer2";

@Component({
  selector: 'app-single-course',
  imports: [Hero, Description, Author, Testimonial, FAQ, Courses, Footer2],
  templateUrl: './single-course.html',
  styles: ``,
})
export class SingleCourse {

}
