import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTitrePosteComponent } from './index-titre-poste.component';

describe('IndexTitrePosteComponent', () => {
  let component: IndexTitrePosteComponent;
  let fixture: ComponentFixture<IndexTitrePosteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTitrePosteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTitrePosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
