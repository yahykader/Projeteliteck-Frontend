import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTechnologieComponent } from './index-technologie.component';

describe('IndexTechnologieComponent', () => {
  let component: IndexTechnologieComponent;
  let fixture: ComponentFixture<IndexTechnologieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTechnologieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTechnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
