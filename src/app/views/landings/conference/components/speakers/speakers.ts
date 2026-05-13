import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { teamMembersData } from '../../data';

@Component({
  selector: 'conference-speakers',
  imports: [RouterLink],
  templateUrl: './speakers.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Speakers {
  teamMembersData = teamMembersData;
}
