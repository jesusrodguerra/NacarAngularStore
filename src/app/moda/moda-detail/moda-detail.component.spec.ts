import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaDetailComponent } from './moda-detail.component';

describe('ModaDetailComponent', () => {
  let component: ModaDetailComponent;
  let fixture: ComponentFixture<ModaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
