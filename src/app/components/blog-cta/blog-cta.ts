import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'blog-cta',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './blog-cta.html',
  styles: ``,
})
export class BlogCta {

}
