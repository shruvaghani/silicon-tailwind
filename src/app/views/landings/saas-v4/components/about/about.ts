import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { tabItemsData } from '../../data';

@Component({
  selector: 'saas-v4-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class About {
  tabItemsData = tabItemsData;  
}
