import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModuleEx } from './ng-module-ex';

describe('NgModuleEx', () => {
  let component: NgModuleEx;
  let fixture: ComponentFixture<NgModuleEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModuleEx],
    }).compileComponents();

    fixture = TestBed.createComponent(NgModuleEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
