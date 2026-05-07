import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFeature } from './more-feature';

describe('MoreFeature', () => {
  let component: MoreFeature;
  let fixture: ComponentFixture<MoreFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
