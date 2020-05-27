import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGenerateComponent } from './layout-generate.component';

describe('LayoutGenerateComponent', () => {
  let component: LayoutGenerateComponent;
  let fixture: ComponentFixture<LayoutGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
