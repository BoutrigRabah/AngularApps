import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonDetail} from './persondetail.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
      PersonDetail
  ],
  imports: [CommonModule,FormsModule],
  providers: [],
  exports:[PersonDetail]
})
export class PersonDetailModule { }
