import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewRequestComponent } from './edit-new-request.component';

describe('EditNewRequestComponent', () => {
  let component: EditNewRequestComponent;
  let fixture: ComponentFixture<EditNewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
