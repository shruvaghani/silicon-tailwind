import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'service-detail-v2-breadcrum',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './breadcrum.html',
  styles: ``,
})
export class Breadcrum {

}
