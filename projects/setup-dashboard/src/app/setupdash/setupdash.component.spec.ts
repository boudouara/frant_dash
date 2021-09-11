import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupdashComponent } from './setupdash.component';

describe('SetupdashComponent', () => {
  let component: SetupdashComponent;
  let fixture: ComponentFixture<SetupdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
