import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestionoffreComponent } from './ingestionoffre.component';

describe('IngestionoffreComponent', () => {
  let component: IngestionoffreComponent;
  let fixture: ComponentFixture<IngestionoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngestionoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngestionoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
