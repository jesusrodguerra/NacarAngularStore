import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsosComponent } from './bolsos.component';

describe('BolsosComponent', () => {
  let component: BolsosComponent;
  let fixture: ComponentFixture<BolsosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
