import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteproductsComponent } from './deleteproducts.component';

describe('DeleteproductsComponent', () => {
  let component: DeleteproductsComponent;
  let fixture: ComponentFixture<DeleteproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
