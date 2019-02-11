import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Components
import {ManComponent} from './person/man/man.component';
import {WomenComponent} from './person/women/women.component';
import {ChildrenComponent} from './person/children/children.component';
import {NotfoundComponent } from './notfound/notfound.component';
import { PersonComponent } from './person/person.component';


const routes : Routes =[
{path : "",component:ManComponent},
{path : "man",component:ManComponent},
//{path : "women",component:WomenComponent},
{path : "women/:id",component:WomenComponent},
{path : "children",component:ChildrenComponent},
{path : "**",component:NotfoundComponent}
]
@NgModule({
imports : [RouterModule.forRoot(routes)],
exports : [RouterModule]
})
export class AppRouting {

}