import { Component } from '@angular/core';
import { statsData } from '../../data';

@Component({
  selector: 'single-project-results',
  imports: [],
  templateUrl: './results.html',
  styles: ``,
})
export class Results {
  statsData = statsData;
}
