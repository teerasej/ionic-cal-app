import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyPage } from './multiply.page';

describe('MultiplyPage', () => {
  let component: MultiplyPage;
  let fixture: ComponentFixture<MultiplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
