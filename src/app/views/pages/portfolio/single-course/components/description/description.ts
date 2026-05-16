import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { courseFeaturesData, courseRoadmapData, featureListData } from '../../data';

@Component({
  selector: 'single-course-description',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './description.html',
  styles: ``,
})
export class Description {
  featureListData = featureListData;
  courseRoadmapData = courseRoadmapData;
  courseFeaturesData = courseFeaturesData;
}
