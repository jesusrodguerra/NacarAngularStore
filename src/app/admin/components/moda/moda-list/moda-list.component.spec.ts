import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaListComponent } from './moda-list.component';

describe('ModaListComponent', () => {
  let component: ModaListComponent;
  let fixture: ComponentFixture<ModaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
