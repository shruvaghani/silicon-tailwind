import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { commentsData } from '../../data';

@Component({
  selector: 'single-post-comments',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './comments.html',
  styles: ``,
})
export class Comments {
  commentsData = commentsData;
}
