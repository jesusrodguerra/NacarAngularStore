import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetaHijoComponent } from './chaqueta-hijo.component';

describe('ChaquetaHijoComponent', () => {
  let component: ChaquetaHijoComponent;
  let fixture: ComponentFixture<ChaquetaHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaquetaHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaquetaHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
