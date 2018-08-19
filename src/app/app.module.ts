import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
//routes
import { appRoutes } from "./app.routes"
//ngBootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//primefaces
import {TableModule} from 'primeng/table';
//services
import { LoginService } from "./providers/login.service";
import { SessionService } from "./providers/session.service";
import { BookingService } from "./providers/booking.service";
//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    appRoutes,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [
    LoginService,
    SessionService,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
