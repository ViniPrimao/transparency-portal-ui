import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationSsoComponent } from './authentication-sso/authentication-sso.component';

const routes: Routes = [
    { path: '', redirectTo: '/authentication-sso', pathMatch: 'full' },
    { path: 'authentication-sso', component: AuthenticationSsoComponent},
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
