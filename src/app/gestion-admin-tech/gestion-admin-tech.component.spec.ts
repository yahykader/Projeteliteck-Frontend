import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdminTechComponent } from './gestion-admin-tech.component';

describe('GestionAdminTechComponent', () => {
  let component: GestionAdminTechComponent;
  let fixture: ComponentFixture<GestionAdminTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdminTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdminTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
