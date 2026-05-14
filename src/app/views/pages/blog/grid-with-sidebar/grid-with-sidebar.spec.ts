import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWithSidebar } from './grid-with-sidebar';

describe('GridWithSidebar', () => {
  let component: GridWithSidebar;
  let fixture: ComponentFixture<GridWithSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridWithSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridWithSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
