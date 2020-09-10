import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHijoComponent } from './home-hijo.component';

describe('HomeHijoComponent', () => {
  let component: HomeHijoComponent;
  let fixture: ComponentFixture<HomeHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
