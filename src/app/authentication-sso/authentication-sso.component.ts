import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-sso',
  templateUrl: './authentication-sso.component.html',
  styleUrls: ['./authentication-sso.component.css']
})
export class AuthenticationSsoComponent implements OnInit {

  constructor(private router: Router) { }

  async ngOnInit(): Promise<void> {
    await delay(2000);
    this.router.navigate(['/home']);
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
