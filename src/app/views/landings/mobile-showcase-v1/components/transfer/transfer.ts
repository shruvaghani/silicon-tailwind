import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mobile-showcase-v1-transfer',
  imports: [RouterLink],
  templateUrl: './transfer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Transfer {}