import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogCategoriesData } from '../../data';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'simple-feed-categories',
  imports: [RouterLink, CommonModule, LucideAngularModule],
  templateUrl: './categories.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Categories {
  blogCategoriesData = blogCategoriesData;
}
