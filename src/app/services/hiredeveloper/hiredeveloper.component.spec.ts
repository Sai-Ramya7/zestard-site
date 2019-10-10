import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredeveloperComponent } from './hiredeveloper.component';

describe('HiredeveloperComponent', () => {
  let component: HiredeveloperComponent;
  let fixture: ComponentFixture<HiredeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiredeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
