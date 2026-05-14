import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCta } from './blog-cta';

describe('BlogCta', () => {
  let component: BlogCta;
  let fixture: ComponentFixture<BlogCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
