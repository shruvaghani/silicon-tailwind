import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'podcast-breadcrumb',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './breadcrumb.html',
  styles: ``,
})
export class Breadcrumb {

}
