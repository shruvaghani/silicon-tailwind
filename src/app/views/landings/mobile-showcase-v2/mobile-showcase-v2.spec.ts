import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileShowcaseV2 } from './mobile-showcase-v2';

describe('MobileShowcaseV2', () => {
  let component: MobileShowcaseV2;
  let fixture: ComponentFixture<MobileShowcaseV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileShowcaseV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileShowcaseV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
