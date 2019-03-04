// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import {Component, Directive, Inject, PLATFORM_ID} from '@angular/core';
import {SecondCmpComponent} from './second-cmp.component';
import {Router} from '@angular/router';

@Injectable();
class MockRouter { navigate = jest.fn(); }

describe('SecondCmpComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SecondCmpComponent
      ],
      providers: [
        {provide: PLATFORM_ID,useValue: 'browser'},
        {provide: Router, useClass: MockRouter},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(SecondCmpComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #logout()', async () => {
    // const result = component.logout();
  });

  it('should run #changeLanguage()', async () => {
    // const result = component.changeLanguage(event);
  });

  it('should run #onDeactivate()', async () => {
    // const result = component.onDeactivate();
  });

  it('should run #changeRoute()', async () => {
    // const result = component.changeRoute(event);
  });

  it('should run #reportIssue()', async () => {
    // const result = component.reportIssue(event);
  });

});
