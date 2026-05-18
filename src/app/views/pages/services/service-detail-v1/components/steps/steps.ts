import { Component } from '@angular/core';
import { processStepsData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'service-detail-v1-steps',
  imports: [CommonModule],
  templateUrl: './steps.html',
  styles: ``,
})
export class Steps {
  processStepsData = processStepsData;
}
