import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';
import { popularCoursesData, tabData } from '../../data';

register();

@Component({
  selector: 'online-popular-courses',
  imports: [LucideAngularModule,RouterLink],
  templateUrl: './popular-courses.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PopularCourses {
  popularCoursesData = popularCoursesData;
  tabData = tabData;
}
