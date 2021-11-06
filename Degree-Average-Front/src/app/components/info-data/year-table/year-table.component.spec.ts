/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YearTableComponent } from './year-table.component';

describe('YearTableComponent', () => {
  let component: YearTableComponent;
  let fixture: ComponentFixture<YearTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
