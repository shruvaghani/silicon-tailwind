import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'single-post-breadcrumb',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './breadcrumb.html',
  styles: ``,
})
export class Breadcrumb {

}
