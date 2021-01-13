import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameheaderComponent } from './nameheader.component';

describe('NameheaderComponent', () => {
  let component: NameheaderComponent;
  let fixture: ComponentFixture<NameheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
