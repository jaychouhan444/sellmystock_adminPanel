import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutPageNotFoundComponent } from './out-page-not-found.component';

describe('OutPageNotFoundComponent', () => {
  let component: OutPageNotFoundComponent;
  let fixture: ComponentFixture<OutPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
