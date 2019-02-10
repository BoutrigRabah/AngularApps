import {Component} from '@angular/core';
import {persons} from './persons';
import {Person} from './person';
@Component({
    selector : 'person-apps',
    templateUrl : './person.component.html',
    styleUrls : ['./person.component.css']
})
export class PersonComponent {
   
    personsapp=persons;
    selectedPers : Person;
    onSelect(pers : Person){
        this.selectedPers=pers;
    }
}