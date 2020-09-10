import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsoHijoComponent } from './bolso-hijo.component';

describe('BolsoHijoComponent', () => {
  let component: BolsoHijoComponent;
  let fixture: ComponentFixture<BolsoHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsoHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
