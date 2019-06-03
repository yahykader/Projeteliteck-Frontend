import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestioncvComponent } from './ingestioncv.component';

describe('IngestioncvComponent', () => {
  let component: IngestioncvComponent;
  let fixture: ComponentFixture<IngestioncvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngestioncvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngestioncvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
