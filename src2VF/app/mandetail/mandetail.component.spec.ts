import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandetailComponent } from './mandetail.component';

describe('MandetailComponent', () => {
  let component: MandetailComponent;
  let fixture: ComponentFixture<MandetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
