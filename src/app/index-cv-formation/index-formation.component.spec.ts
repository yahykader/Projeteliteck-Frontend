import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFormationComponent } from './index-formation.component';

describe('IndexFormationComponent', () => {
  let component: IndexFormationComponent;
  let fixture: ComponentFixture<IndexFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
