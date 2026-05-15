import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { socialLinksData } from '../../data';

@Component({
  selector: 'single-post-comment-form',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './comment-form.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommentForm {
  socialLinksData = socialLinksData;
}
