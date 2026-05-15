import { Component } from '@angular/core';
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { Cta } from "../components/cta/cta";
import { Footer2 } from "@app/components/footer2/footer2";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-list-view',
  imports: [Breadcrumb, Cta, Footer2, RouterLink],
  templateUrl: './list-view.html',
  styles: ``,
})
export class ListView {

}
