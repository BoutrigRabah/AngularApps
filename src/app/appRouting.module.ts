import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Components
import {ManComponent} from './person/man/man.component';
import {WomenComponent} from './person/women/women.component';
import {ChildrenComponent} from './person/children/children.component';


const routes : Routes =[
{path : "man",component:ManComponent},
{path : "women/:id",component:WomenComponent},
{path : "children",component:ChildrenComponent}
]
@NgModule({
imports : [RouterModule.forRoot(routes)],
exports : [RouterModule]
})
export class AppRouting {

}