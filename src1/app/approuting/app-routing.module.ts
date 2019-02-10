import {NgModule, Component}from '@angular/core'
import {RouterModule,Routes} from '@angular/router';

import {HeroesComponent} from '../heroes/heroes.component';
import {PersonComponent} from '../person/person.component';
import {PersonDetail} from '../persondetail/persondetail.component'
const routes : Routes = [
    {path : "", redirectTo :'/person',pathMatch : 'full' },
    {path : "heroes/:id", component : HeroesComponent},
    {path : "person", component : PersonComponent},
    {path : "personDetail", component : PersonDetail}
    ];

@NgModule({
exports :[RouterModule],
imports : [RouterModule.forRoot(routes)]
})

export class RoutingApp {
    


}