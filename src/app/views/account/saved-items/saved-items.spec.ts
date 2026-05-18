import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedItems } from './saved-items';

describe('SavedItems', () => {
  let component: SavedItems;
  let fixture: ComponentFixture<SavedItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
