import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayimgComponent } from './displayimg.component';

describe('DisplayimgComponent', () => {
  let component: DisplayimgComponent;
  let fixture: ComponentFixture<DisplayimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
