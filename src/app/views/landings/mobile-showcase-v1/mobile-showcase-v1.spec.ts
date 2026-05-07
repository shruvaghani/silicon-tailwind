import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileShowcaseV1 } from './mobile-showcase-v1';

describe('MobileShowcaseV1', () => {
  let component: MobileShowcaseV1;
  let fixture: ComponentFixture<MobileShowcaseV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileShowcaseV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileShowcaseV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
