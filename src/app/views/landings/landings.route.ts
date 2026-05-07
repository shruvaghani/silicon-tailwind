import { Route } from "@angular/router";
import { MobileShowcaseV1 } from "./mobile-showcase-v1/mobile-showcase-v1";

export const LANDING_ROUTES: Route[] = [
  {
    path: 'mobile-showcase-1',
    component: MobileShowcaseV1,
    data: { title: 'Mobile App Showcase Landing v.1' },
  },
];