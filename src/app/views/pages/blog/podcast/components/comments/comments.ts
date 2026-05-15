import { Component } from '@angular/core';
import { commentsData } from '../../data';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'podcast-comments',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './comments.html',
  styles: ``,
})
export class Comments {
  commentsData = commentsData;
}
