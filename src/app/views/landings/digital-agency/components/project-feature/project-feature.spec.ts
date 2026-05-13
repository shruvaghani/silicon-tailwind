import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFeature } from './project-feature';

describe('ProjectFeature', () => {
  let component: ProjectFeature;
  let fixture: ComponentFixture<ProjectFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
