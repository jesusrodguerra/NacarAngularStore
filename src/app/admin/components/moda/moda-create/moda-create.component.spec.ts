import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaCreateComponent } from './moda-create.component';

describe('ModaCreateComponent', () => {
  let component: ModaCreateComponent;
  let fixture: ComponentFixture<ModaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
