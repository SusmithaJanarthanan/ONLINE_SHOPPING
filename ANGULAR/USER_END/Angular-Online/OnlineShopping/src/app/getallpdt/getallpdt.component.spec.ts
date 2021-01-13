import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallpdtComponent } from './getallpdt.component';

describe('GetallpdtComponent', () => {
  let component: GetallpdtComponent;
  let fixture: ComponentFixture<GetallpdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallpdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallpdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
