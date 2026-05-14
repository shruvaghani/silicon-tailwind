import { Component } from '@angular/core';
import { statsData } from '../../data';

@Component({
  selector: 'about-v2-stats',
  imports: [],
  templateUrl: './stats.html',
  styles: ``,
})
export class Stats {
  statsData = statsData;
}
