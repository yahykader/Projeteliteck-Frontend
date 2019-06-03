import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLocalisationComponent } from './index-localisation.component';

describe('IndexLocalisationComponent', () => {
  let component: IndexLocalisationComponent;
  let fixture: ComponentFixture<IndexLocalisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexLocalisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
