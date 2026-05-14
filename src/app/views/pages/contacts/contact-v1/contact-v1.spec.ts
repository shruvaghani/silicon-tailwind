import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactV1 } from './contact-v1';

describe('ContactV1', () => {
  let component: ContactV1;
  let fixture: ComponentFixture<ContactV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
