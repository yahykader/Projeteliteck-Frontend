import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdminTechonolgieComponent } from './gestion-admin-techonolgie.component';

describe('GestionAdminTechonolgieComponent', () => {
  let component: GestionAdminTechonolgieComponent;
  let fixture: ComponentFixture<GestionAdminTechonolgieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdminTechonolgieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdminTechonolgieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
