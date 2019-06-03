import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteuroffreComponent } from './recruteuroffre.component';

describe('RecruteuroffreComponent', () => {
  let component: RecruteuroffreComponent;
  let fixture: ComponentFixture<RecruteuroffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruteuroffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruteuroffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
