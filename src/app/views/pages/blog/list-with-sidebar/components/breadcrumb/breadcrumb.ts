import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'list-with-sidebar-breadcrumb',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './breadcrumb.html',
  styles: ``,
})
export class Breadcrumb {

}
