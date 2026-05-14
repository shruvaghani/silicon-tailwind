import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { awardData } from '../../data';

@Component({
  selector: 'digital-agency-awards',
  imports: [RouterLink],
  templateUrl: './awards.html',
  styles: ``,
})
export class Awards {
  awardData = awardData;
}
