import {Component,Input} from '@angular/core';
import {Person} from '../person/person';
@Component({
    selector : 'person-detail',
    templateUrl : './persondetail.component.html',
    styleUrls : ['./persondetail.component.css']
})
export class PersonDetail {
    @Input() pers : Person;

}