import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { teamMembersData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'about-v3-team',
  imports: [RouterLink, CommonModule],
  templateUrl: './team.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Team {
  teamMembersData = teamMembersData;
}
