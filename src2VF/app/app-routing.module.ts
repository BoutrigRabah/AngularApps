import {NgModule} from '@angular/core';

import {Routes,RouterModule} from '@angular/router';

import {ManComponent} from './person/man/man.component';
import {WomenComponent} from './person/women/women.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
import {MandetailComponent} from './mandetail/mandetail.component';
import { OverviewComponent } from './mandetail/overview/overview.component';
import { ContactComponent } from './mandetail/contact/contact.component';
const routes : Routes =[
    {path : "" , redirectTo : '/man/15', pathMatch :'full' },
    {path : 'man/:id', component: ManComponent},
    {path : 'women', component : WomenComponent},
    {path : 'manDetail/:id',
     component : MandetailComponent,
     children : [
        {path : 'overview', component : OverviewComponent},
        {path : 'contact', component : ContactComponent} 
     ]
    },
    {path : '**', component : PagenotfoundComponent}
]
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]

})

export class AppRouting {

}
export const personComponent=[ManComponent,WomenComponent,PagenotfoundComponent,MandetailComponent];