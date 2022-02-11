/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PatentesComponent } from './patentes.component';

describe('PatentesComponent', () => {
  let component: PatentesComponent;
  let fixture: ComponentFixture<PatentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
