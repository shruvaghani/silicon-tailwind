import { Component } from '@angular/core';
import { stepsData } from '../../data';

@Component({
  selector: 'online-steps',
  imports: [],
  templateUrl: './steps.html',
  styles: ``,
})
export class Steps {
  stepsData = stepsData;
}
