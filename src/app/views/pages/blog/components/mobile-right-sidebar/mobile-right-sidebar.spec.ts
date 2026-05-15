import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRightSidebar } from './mobile-right-sidebar';

describe('MobileRightSidebar', () => {
  let component: MobileRightSidebar;
  let fixture: ComponentFixture<MobileRightSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileRightSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileRightSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
