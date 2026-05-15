import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { coursesData } from '../../data';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'courses-content',
  imports: [LucideAngularModule, CommonModule, RouterLink],
  templateUrl: './content.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})  

export class Content {
  coursesData = coursesData;
}
