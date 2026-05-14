import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { statsData } from '../../data';

@Component({
  selector: 'about-v1-hero',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  statsData = statsData;
}
