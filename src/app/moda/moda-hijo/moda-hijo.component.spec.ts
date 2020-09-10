import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaHijoComponent } from './moda-hijo.component';

describe('ModaHijoComponent', () => {
  let component: ModaHijoComponent;
  let fixture: ComponentFixture<ModaHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
