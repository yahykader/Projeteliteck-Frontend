import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUsersGestionComponent } from './gestion-users-gestion.component';

describe('GestionUsersGestionComponent', () => {
  let component: GestionUsersGestionComponent;
  let fixture: ComponentFixture<GestionUsersGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionUsersGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUsersGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
