import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationSsoComponent } from './authentication-sso.component';

describe('AuthenticationSsoComponent', () => {
  let component: AuthenticationSsoComponent;
  let fixture: ComponentFixture<AuthenticationSsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationSsoComponent]
    });
    fixture = TestBed.createComponent(AuthenticationSsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
