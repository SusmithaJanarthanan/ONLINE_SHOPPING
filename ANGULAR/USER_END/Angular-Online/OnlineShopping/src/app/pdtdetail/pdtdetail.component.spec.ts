import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdtdetailComponent } from './pdtdetail.component';

describe('PdtdetailComponent', () => {
  let component: PdtdetailComponent;
  let fixture: ComponentFixture<PdtdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdtdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdtdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
