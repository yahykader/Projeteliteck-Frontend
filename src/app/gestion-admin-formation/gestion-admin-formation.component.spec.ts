import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdminFormationComponent } from './gestion-admin-formation.component';

describe('GestionAdminFormationComponent', () => {
  let component: GestionAdminFormationComponent;
  let fixture: ComponentFixture<GestionAdminFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdminFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdminFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
