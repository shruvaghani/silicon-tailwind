import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { storeData } from '../../data';

@Component({
  selector: 'mobile-showcase-v2-cta',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './cta.html',
  styles: ``,
})

export class Cta {
  storeData = storeData;
}
