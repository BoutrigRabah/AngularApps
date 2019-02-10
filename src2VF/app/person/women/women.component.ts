import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Person} from '../person';

@Component({
    selector : 'rb-women',
    templateUrl : './women.component.html'
        })

export class WomenComponent {
    constructor(private routes:Router){

    }
    public person : Person= {id : 1, name:'rabah'};

    onSelect(name){
        this.routes.navigate(['/man',name]);
        }
}