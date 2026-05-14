import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourse } from './single-course';

describe('SingleCourse', () => {
  let component: SingleCourse;
  let fixture: ComponentFixture<SingleCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCourse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
