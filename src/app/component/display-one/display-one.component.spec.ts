import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOneComponent } from './display-one.component';

describe('DisplayOneComponent', () => {
  let component: DisplayOneComponent;
  let fixture: ComponentFixture<DisplayOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
