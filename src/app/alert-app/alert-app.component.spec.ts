import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAppComponent } from './alert-app.component';

describe('AlertAppComponent', () => {
  let component: AlertAppComponent;
  let fixture: ComponentFixture<AlertAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
