import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataCreationComponent } from './datacreation.component';


describe('datacreationComponent', () => {
  let component: DataCreationComponent;
  let fixture: ComponentFixture<DataCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataCreationComponent]
    });
    fixture = TestBed.createComponent(DataCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
