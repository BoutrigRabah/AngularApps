import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PersonComponent} from './person/person.component';
//import {ManComponent} from './person/man/man.component';
//import {WomenComponent} from './person/women/women.component'; 

import {AppRouting,personComponent} from './app-routing.module';
import { OverviewComponent } from './mandetail/overview/overview.component';
import { ContactComponent } from './mandetail/contact/contact.component';
import { AppService } from './app-service.service';
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    personComponent,
    OverviewComponent,
    ContactComponent
      ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
