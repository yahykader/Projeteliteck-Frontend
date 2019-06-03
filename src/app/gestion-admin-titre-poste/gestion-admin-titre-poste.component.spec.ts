import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdminTitrePosteComponent } from './gestion-admin-titre-poste.component';

describe('GestionAdminTitrePosteComponent', () => {
  let component: GestionAdminTitrePosteComponent;
  let fixture: ComponentFixture<GestionAdminTitrePosteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdminTitrePosteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdminTitrePosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
