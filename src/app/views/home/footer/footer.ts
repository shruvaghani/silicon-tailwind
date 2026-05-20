import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { credits } from '@common/constants';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'home-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
 credits = credits;
}
