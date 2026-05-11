import { Component } from '@angular/core';
import { brandItemsData } from '../../data';

@Component({
  selector: 'saas2-integrations',
  imports: [],
  templateUrl: './integrations.html',
  styles: ``,
})

export class Integrations {
  brandItemsData = brandItemsData;
}
