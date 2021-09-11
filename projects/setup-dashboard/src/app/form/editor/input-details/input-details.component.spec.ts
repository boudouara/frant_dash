import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDetailsComponent } from './input-details.component';

describe('InputDetailsComponent', () => {
  let component: InputDetailsComponent;
  let fixture: ComponentFixture<InputDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
