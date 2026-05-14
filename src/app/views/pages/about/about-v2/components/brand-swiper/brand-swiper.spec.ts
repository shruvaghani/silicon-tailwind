import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSwiper } from './brand-swiper';

describe('BrandSwiper', () => {
  let component: BrandSwiper;
  let fixture: ComponentFixture<BrandSwiper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandSwiper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandSwiper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
