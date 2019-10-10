import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsframeworksComponent } from './jsframeworks.component';

describe('JsframeworksComponent', () => {
  let component: JsframeworksComponent;
  let fixture: ComponentFixture<JsframeworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsframeworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsframeworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
