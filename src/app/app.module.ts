import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//module
import {AppRouting} from "./appRouting.module";
//service
import {Data} from './service/data';
import { AppComponent } from './app.component';
import { PersonComponent} from './person/person.component';
import { ManComponent } from './person/man/man.component';
import { WomenComponent } from './person/women/women.component';
import { ChildrenComponent } from './person/children/children.component';
//routage 
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ManComponent,
    WomenComponent,
    ChildrenComponent
      ],
  imports: [
    BrowserModule,
    AppRouting
   ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
