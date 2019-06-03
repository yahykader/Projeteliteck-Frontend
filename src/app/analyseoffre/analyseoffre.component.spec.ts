import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseoffreComponent } from './analyseoffre.component';

describe('AnalyseoffreComponent', () => {
  let component: AnalyseoffreComponent;
  let fixture: ComponentFixture<AnalyseoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyseoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
