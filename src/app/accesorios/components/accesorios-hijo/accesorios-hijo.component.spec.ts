import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosHijoComponent } from './accesorios-hijo.component';

describe('AccesoriosHijoComponent', () => {
  let component: AccesoriosHijoComponent;
  let fixture: ComponentFixture<AccesoriosHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoriosHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
