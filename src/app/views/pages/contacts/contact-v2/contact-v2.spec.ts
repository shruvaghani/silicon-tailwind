import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactV2 } from './contact-v2';

describe('ContactV2', () => {
  let component: ContactV2;
  let fixture: ComponentFixture<ContactV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
