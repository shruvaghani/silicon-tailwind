import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { wishlistCoursesData } from './data';

@Component({
  selector: 'app-saved-items',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './saved-items.html',
  styles: ``,
})
export class SavedItems {
  wishlistCoursesData = wishlistCoursesData;
}
