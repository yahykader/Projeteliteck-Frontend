import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdminLocalisationComponent } from './gestion-admin-localisation.component';

describe('GestionAdminLocalisationComponent', () => {
  let component: GestionAdminLocalisationComponent;
  let fixture: ComponentFixture<GestionAdminLocalisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdminLocalisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdminLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
