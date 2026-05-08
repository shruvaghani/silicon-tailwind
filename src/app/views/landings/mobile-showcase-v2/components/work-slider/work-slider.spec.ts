import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSlider } from './work-slider';

describe('WorkSlider', () => {
  let component: WorkSlider;
  let fixture: ComponentFixture<WorkSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
