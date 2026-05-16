import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagetitle } from './pagetitle';

describe('Pagetitle', () => {
  let component: Pagetitle;
  let fixture: ComponentFixture<Pagetitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagetitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagetitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
