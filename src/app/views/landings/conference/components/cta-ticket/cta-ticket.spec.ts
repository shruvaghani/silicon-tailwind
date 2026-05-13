import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaTicket } from './cta-ticket';

describe('CtaTicket', () => {
  let component: CtaTicket;
  let fixture: ComponentFixture<CtaTicket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaTicket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaTicket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
