import { ComponentFixture, TestBed } from '@angular/core/testing';
import { datacreationComponent } from './datacreation.component';


describe('datacreationComponent', () => {
  let component: datacreationComponent;
  let fixture: ComponentFixture<datacreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [datacreationComponent]
    });
    fixture = TestBed.createComponent(datacreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
