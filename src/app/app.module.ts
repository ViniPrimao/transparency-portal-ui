import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './toolbar/toolbar.component'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DatagridComponent } from './datagrid/datagrid.component';
import { DataCreationComponent as DataCreationComponent } from './datacreation/datacreation.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AuthenticationSsoComponent } from './authentication-sso/authentication-sso.component';

@NgModule({
  declarations: [
    AppComponent,
    DataCreationComponent,
    HomeComponent,
    AuthenticationSsoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    DatagridComponent,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule,
    ToolbarComponent,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [DatagridComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
