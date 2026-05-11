import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { storeData } from '../../data';

@Component({
  selector: 'saas-v2-download',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './download.html',
  styles: ``,
})

export class Download {
  storeData = storeData;
}
