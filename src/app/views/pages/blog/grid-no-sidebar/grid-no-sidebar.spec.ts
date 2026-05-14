import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNoSidebar } from './grid-no-sidebar';

describe('GridNoSidebar', () => {
  let component: GridNoSidebar;
  let fixture: ComponentFixture<GridNoSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridNoSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridNoSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
