import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRetailerStatusComponent } from './change-retailer-status.component';

describe('ChangeRetailerStatusComponent', () => {
  let component: ChangeRetailerStatusComponent;
  let fixture: ComponentFixture<ChangeRetailerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeRetailerStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRetailerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
