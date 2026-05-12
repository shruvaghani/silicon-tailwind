import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureIcon } from './feature-icon';

describe('FeatureIcon', () => {
  let component: FeatureIcon;
  let fixture: ComponentFixture<FeatureIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
