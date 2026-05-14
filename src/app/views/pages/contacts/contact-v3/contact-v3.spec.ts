import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactV3 } from './contact-v3';

describe('ContactV3', () => {
  let component: ContactV3;
  let fixture: ComponentFixture<ContactV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactV3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
