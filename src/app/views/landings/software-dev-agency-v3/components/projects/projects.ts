import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projectsData } from '../../data';

@Component({
  selector: 'software-dev-agency3-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styles: ``,
})
export class Projects {
  projectsData = projectsData;
}
