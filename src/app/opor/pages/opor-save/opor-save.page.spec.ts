import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OporSavePage } from './opor-save.page';

describe('OporSavePage', () => {
  let component: OporSavePage;
  let fixture: ComponentFixture<OporSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OporSavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OporSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
