import { Component } from '@angular/core';
import { Content } from './components/content/content';
import { CTA } from './components/cta/cta';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-courses',
  imports: [Content, CTA, Footer],
  templateUrl: './courses.html',
  styles: ``,
})
export class Courses {}
