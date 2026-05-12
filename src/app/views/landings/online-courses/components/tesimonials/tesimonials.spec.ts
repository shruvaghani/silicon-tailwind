import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tesimonials } from './tesimonials';

describe('Tesimonials', () => {
  let component: Tesimonials;
  let fixture: ComponentFixture<Tesimonials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tesimonials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tesimonials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
