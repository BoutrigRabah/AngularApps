import {Component} from '@angular/core';

import {Person} from './person';
@Component({
    selector : 'rb-person',
    templateUrl : './person.component.html',
    styleUrls :['./person.component.html']
})


export class PersonComponent {
  
public person : Person= {id : 1, name:'rabah'};


}