import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteurgestionComponent } from './recruteurgestion.component';

describe('RecruteurgestionComponent', () => {
  let component: RecruteurgestionComponent;
  let fixture: ComponentFixture<RecruteurgestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruteurgestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruteurgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
