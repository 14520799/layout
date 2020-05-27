import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCase1Component } from './use-case1.component';

describe('UseCase1Component', () => {
  let component: UseCase1Component;
  let fixture: ComponentFixture<UseCase1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCase1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
