import { Component } from '@angular/core';
import { worksData } from '../../data';

@Component({
  selector: 'startup-works',
  imports: [],
  templateUrl: './works.html',
  styles: ``,
})
export class Works {
  worksData = worksData;
}
