/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestobjComponent } from './testobj.component';

describe('TestobjComponent', () => {
  let component: TestobjComponent;
  let fixture: ComponentFixture<TestobjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestobjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
