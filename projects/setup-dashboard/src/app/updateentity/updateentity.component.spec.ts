import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateentityComponent } from './updateentity.component';

describe('UpdateentityComponent', () => {
  let component: UpdateentityComponent;
  let fixture: ComponentFixture<UpdateentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
