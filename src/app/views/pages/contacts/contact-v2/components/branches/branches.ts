import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { medicalCentersData, socialLinksData } from '../../data';

@Component({
  selector: 'contact-v2-branches',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './branches.html',
  styles: ``,
})
export class Branches {
  medicalCentersData = medicalCentersData;
  socialLinksData = socialLinksData;
}
