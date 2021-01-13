import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerRevenueComponent } from './retailer-revenue.component';

describe('RetailerRevenueComponent', () => {
  let component: RetailerRevenueComponent;
  let fixture: ComponentFixture<RetailerRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
