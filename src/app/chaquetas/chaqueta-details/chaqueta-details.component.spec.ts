import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetaDetailsComponent } from './chaqueta-details.component';

describe('ChaquetaDetailsComponent', () => {
  let component: ChaquetaDetailsComponent;
  let fixture: ComponentFixture<ChaquetaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaquetaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaquetaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
