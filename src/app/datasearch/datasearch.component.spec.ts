import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasearchComponent } from './datasearch.component';

describe('DatasearchComponent', () => {
  let component: DatasearchComponent;
  let fixture: ComponentFixture<DatasearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatasearchComponent]
    });
    fixture = TestBed.createComponent(DatasearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
