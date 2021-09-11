import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetemplateComponent } from './updatetemplate.component';

describe('UpdatetemplateComponent', () => {
  let component: UpdatetemplateComponent;
  let fixture: ComponentFixture<UpdatetemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
