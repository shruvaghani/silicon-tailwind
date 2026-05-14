import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { awardsData } from '../../data';

@Component({
  selector: 'about-v1-awards',
  imports: [RouterLink],
  templateUrl: './awards.html',
  styles: ``,
})
export class Awards {
  awardsData = awardsData;
}
