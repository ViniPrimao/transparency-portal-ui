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
import { datacreationComponent } from './datacreation/datacreation.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    datacreationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DatagridComponent,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule,
    ToolbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
