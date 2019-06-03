import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdminLocaComponent } from './gestion-admin-loca.component';

describe('GestionAdminLocaComponent', () => {
  let component: GestionAdminLocaComponent;
  let fixture: ComponentFixture<GestionAdminLocaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdminLocaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdminLocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
