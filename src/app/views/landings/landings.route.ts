import { Route } from "@angular/router";
import { MobileShowcaseV1 } from "./mobile-showcase-v1/mobile-showcase-v1";
import { MobileShowcaseV2 } from "./mobile-showcase-v2/mobile-showcase-v2";
import { MobileShowcaseV3 } from "./mobile-showcase-v3/mobile-showcase-v3";
import { Product } from "./product/product";
import { SaasV1 } from "./saas-v1/saas-v1";
import { SaasV2 } from "./saas-v2/saas-v2";
import { SaasV3 } from "./saas-v3/saas-v3";
import { SaasV4 } from "./saas-v4/saas-v4";
import { SaasV5 } from "./saas-v5/saas-v5";
import { Startup } from "./startup/startup";
import { Financial } from "./financial/financial";
import { OnlineCourses } from "./online-courses/online-courses";
import { Medical } from "./medical/medical";
import { SoftwareDevAgencyV1 } from "./software-dev-agency-v1/software-dev-agency-v1";
import { SoftwareDevAgencyV2 } from "./software-dev-agency-v2/software-dev-agency-v2";
import { SoftwareDevAgencyV3 } from "./software-dev-agency-v3/software-dev-agency-v3";
import { Conference } from "./conference/conference";
import { DigitalAgency } from "./digital-agency/digital-agency";
import { Blog } from "./blog/blog";

export const LANDING_ROUTES: Route[] = [
  {
    path: 'mobile-showcase/v1',
    component: MobileShowcaseV1,
    data: { title: 'Mobile App Showcase Landing v.1' },
  },
  {
    path: 'mobile-showcase/v2',
    component: MobileShowcaseV2,
    data: { title: 'Mobile App Showcase Landing v.2' },
  },
  {
    path: 'mobile-showcase/v3',
    component: MobileShowcaseV3,
    data: { title: 'Mobile App Showcase Landing v.3' },
  },
  {
    path: 'product',
    component: Product,
    data: { title: 'Product Landing', darkHeader: true },
  },
  {
    path: 'saas/v1',
    component: SaasV1,
    data: { title: 'Saas Landing v.1' },
  },
  {
    path: 'saas/v2',
    component: SaasV2,
    data: { title: 'Saas Landing v.2', darkHeader: true },
  },
  {
    path: 'saas/v3',
    component: SaasV3,
    data: { title: 'Saas Landing v.3', darkHeader: true },
  },
  {
    path: 'saas/v4',
    component: SaasV4,
    data: { title: 'Saas Landing v.4' },
  },
  {
    path: 'saas/v5',
    component: SaasV5,
    data: { title: 'Saas Landing v.5', darkHeader: true },
  },
  {
    path: 'startup',
    component: Startup,
    data: { title: 'Startup Landing' },
  },
  {
    path: 'financial',
    component: Financial,
    data: { title: 'Financial Consulting Landing' },
  },
  {
    path: 'online-courses',
    component: OnlineCourses,
    data: { title: 'Online Courses Landing' },
  },
  {
    path: 'medical',
    component: Medical,
    data: { title: 'Medical Landing' },
  },
  {
    path: 'software-dev-agency/v1',
    component: SoftwareDevAgencyV1,
    data: { title: 'Software Dev Agency Landing v.1' },
  },
  {
    path: 'software-dev-agency/v2',
    component: SoftwareDevAgencyV2,
    data: { title: 'Software Dev Agency Landing v.2' },
  },
  {
    path: 'software-dev-agency/v3',
    component: SoftwareDevAgencyV3,
    data: { title: 'Software Dev Agency Landing v.3' },
  },
  {
    path: 'conference',
    component: Conference,
    data: { title: 'Conference Landing' },
  },
  {
    path: 'digital-agency',
    component: DigitalAgency,
    data: { title: 'Digital Agency Landing' },
  },
  {
    path: 'blog',
    component: Blog,
    data: { title: 'Blog Homepage' },
  },
];