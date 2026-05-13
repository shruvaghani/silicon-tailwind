import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { benefitItemsData } from '../../data';

@Component({
  selector: 'software-dev-agency2-hero',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  benefitItemsData = benefitItemsData;
}
