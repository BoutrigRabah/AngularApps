import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [
    HeroesComponent
    ],
  imports: [
    FormsModule  ],
  providers: [],
  exports :[HeroesComponent]
})
export class HeroesModule { }
