import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagentoComponent } from './magento.component';

describe('MagentoComponent', () => {
  let component: MagentoComponent;
  let fixture: ComponentFixture<MagentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
