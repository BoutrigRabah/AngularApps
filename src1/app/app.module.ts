import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {PersonComponent} from './person/person.component';
import {HeroesModule} from './heroes/heroes.module';
import {PersonDetailModule} from './persondetail/persondetail.module';
//routage 
import {RoutingApp} from './approuting/app-routing.module'
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    PersonDetailModule,
    RoutingApp
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
