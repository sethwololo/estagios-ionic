import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OporItemComponent } from './opor-item.component';

describe('OporItemComponent', () => {
  let component: OporItemComponent;
  let fixture: ComponentFixture<OporItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OporItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OporItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
