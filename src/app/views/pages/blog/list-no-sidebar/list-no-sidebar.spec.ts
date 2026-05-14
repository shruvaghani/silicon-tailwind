import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNoSidebar } from './list-no-sidebar';

describe('ListNoSidebar', () => {
  let component: ListNoSidebar;
  let fixture: ComponentFixture<ListNoSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListNoSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNoSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
