import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaEditComponent } from './moda-edit.component';

describe('ModaEditComponent', () => {
  let component: ModaEditComponent;
  let fixture: ComponentFixture<ModaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
