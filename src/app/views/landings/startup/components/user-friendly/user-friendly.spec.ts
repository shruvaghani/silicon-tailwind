import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFriendly } from './user-friendly';

describe('UserFriendly', () => {
  let component: UserFriendly;
  let fixture: ComponentFixture<UserFriendly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFriendly]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFriendly);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
