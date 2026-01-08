/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightLeftComponent } from './right-left.component';

describe('RightLeftComponent', () => {
  let component: RightLeftComponent;
  let fixture: ComponentFixture<RightLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
