import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOneRestaurantComponent } from './add-one-restaurant.component';

describe('AddOneRestaurantComponent', () => {
  let component: AddOneRestaurantComponent;
  let fixture: ComponentFixture<AddOneRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOneRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOneRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
