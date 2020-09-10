import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosDetailComponent } from './accesorios-detail.component';

describe('AccesoriosDetailComponent', () => {
  let component: AccesoriosDetailComponent;
  let fixture: ComponentFixture<AccesoriosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoriosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
