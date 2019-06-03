import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdminFormComponent } from './gestion-admin-form.component';

describe('GestionAdminFormComponent', () => {
  let component: GestionAdminFormComponent;
  let fixture: ComponentFixture<GestionAdminFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdminFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
