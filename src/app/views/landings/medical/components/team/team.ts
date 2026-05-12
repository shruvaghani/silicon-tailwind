import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { teamMembersData } from '../../data';

@Component({
  selector: 'medical-team',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './team.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Team {
  teamMembers = teamMembersData;
}
