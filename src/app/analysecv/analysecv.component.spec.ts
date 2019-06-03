import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysecvComponent } from './analysecv.component';

describe('AnalysecvComponent', () => {
  let component: AnalysecvComponent;
  let fixture: ComponentFixture<AnalysecvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysecvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
