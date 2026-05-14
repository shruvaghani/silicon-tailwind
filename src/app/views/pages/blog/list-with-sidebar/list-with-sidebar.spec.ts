import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithSidebar } from './list-with-sidebar';

describe('ListWithSidebar', () => {
  let component: ListWithSidebar;
  let fixture: ComponentFixture<ListWithSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
