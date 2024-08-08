import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterprisesListComponent } from './enterprises-list/enterprises-list.component';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterprisesListComponent,
    EnterpriseDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
