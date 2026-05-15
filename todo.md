/landing/mobile-showcase/v3 -- benefits -- responsive ma pagination icon not same as html

/landing/saas/v1 : Integration : responsive ma pagination icon nthi aavta

/landing/saas/v4 : Simple Integration with Popular Tools : integration section swiper

/landing/saas/v5 : features : parallax set baki 

landing/medical : What Our Patients Say



Convert static HTML into dynamic UI using @for loop with JSON data and TypeScript typing, import any images at the top of the file and bind them in the data, without modifying the existing design.

Convert this HTML Swiper into Angular standalone component using latest `swiper/element`.

Requirements:
- Keep exact same HTML design and structure
- Do not change UI, classes, styling, layout, or swiper design
- Use only the same swiper options provided in HTML
- Do not add extra swiper configs or custom logic
- Use `<swiper-container>` and `<swiper-slide>`
- Keep all swiper options exactly same as original HTML
- Support direct HTML swiper configs like:

<swiper-container
  slides-per-view="1"
  space-between="24"
  loop="true"
  navigation="true"
  navigation-next-el="#next-testimonial"
  navigation-prev-el="#prev-testimonial"
  pagination="true"
  pagination-el=".swiper-pagination"
  pagination-clickable="true"
  pagination-center-insufficient-slides="true"
  [breakpoints]='{
    "0": {
      "slidesPerView": 2,
      "spaceBetween": 10
    },
    "600": {
      "slidesPerView": 3,
      "spaceBetween": 16
    },
    "991": {
      "slidesPerView": 4,
      "spaceBetween": 24
    }
  }'
>

- Use `[breakpoints]` binding exactly like HTML
- Import and register swiper:

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

- Add:
schemas: [CUSTOM_ELEMENTS_SCHEMA]



Convert this HTML Swiper into Angular standalone component using latest swiper/element.
Requirements:
Keep exact same HTML design and structure
Do not change UI, classes, styling, layout, spacing, swiper design, or hierarchy
Keep original outer <div class="swiper"> exactly same
Do not remove, rename, reorder, or modify existing classes
Use only latest swiper/element
Use <swiper-container> and <swiper-slide>
Add all existing swiper-wrapper classes directly into <swiper-container>
Do not create extra wrapper divs
Keep all swiper options exactly same as original HTML
Use direct HTML swiper configs only
Do not move swiper configs into TypeScript
Do not add extra swiper configs
Do not add custom initialization logic
Do not change navigation, pagination, autoplay, loop, centeredSlides, effect, breakpoints, or any existing swiper behavior
Preserve exact swiper UI and layout
Keep [breakpoints] binding exactly same as original HTML format
Keep navigation and pagination elements exactly same
Keep all Tailwind/CSS classes exactly same
Do not optimize or refactor HTML structure
Use this setup:
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

And include:
schemas: [CUSTOM_ELEMENTS_SCHEMA]

Component requirements:
Create Angular standalone component
Use inline or external template based on provided HTML
Keep component clean and minimal
No unnecessary TypeScript logic
No ViewChild
No swiper initialization in lifecycle hooks
No ElementRef usage
No custom swiper configuration object in TS
No signal/store/state management unless already required by HTML
Dynamic UI conversion requirements:
Convert static repeated slide HTML into dynamic Angular UI using Angular @for
Create strongly typed TypeScript interface for slide data
Store slide data in typed JSON array
Import all local images at the top of the TypeScript file
Bind images dynamically from data
Keep existing design completely unchanged
Preserve exact slide structure and class names
Preserve exact responsive behavior
Preserve exact swiper functionality
Use track properly in @for
Example format:
@for(item of items; track item.id) {
  <swiper-slide>
    <!-- existing unchanged slide html -->
  </swiper-slide>
}

Example breakpoints format (keep exactly like this style):
<swiper-container
  class="swiper-wrapper mb-14"
  pagination="true"
  pagination-el=".swiper-pagination"
  pagination-clickable="true"
  pagination-center-insufficient-slides="true"
  navigation="true"
  navigation-next-el="#next-testimonial"
  navigation-prev-el="#prev-testimonial"
  [breakpoints]='{
    "0": {
      "slidesPerView": 2,
      "spaceBetween": 10
    },
    "600": {
      "slidesPerView": 3,
      "spaceBetween": 16
    },
    "991": {
      "slidesPerView": 4,
      "spaceBetween": 24
    },
    "1200": {
      "slidesPerView": 5,
      "spaceBetween": 38
    }
  }'
>

Expected output:
Full Angular standalone component
Full HTML template
Full TypeScript
Dynamic JSON data
Proper image imports
Exact swiper conversion using swiper/element
Exact same UI/design preserved
Production-ready Angular code
No UI differences from original HTML
