import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { socialLinksData } from '../../data';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'podcast-comment-form',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './comment-form.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CommentForm {
  socialLinksData = socialLinksData;
}
