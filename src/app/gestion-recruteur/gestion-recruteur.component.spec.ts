import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRecruteurComponent } from './gestion-recruteur.component';

describe('GestionRecruteurComponent', () => {
  let component: GestionRecruteurComponent;
  let fixture: ComponentFixture<GestionRecruteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionRecruteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
