import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsosDetailComponent } from './bolsos-detail.component';

describe('BolsosDetailComponent', () => {
  let component: BolsosDetailComponent;
  let fixture: ComponentFixture<BolsosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
