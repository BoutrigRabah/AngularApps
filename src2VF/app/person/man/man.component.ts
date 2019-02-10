import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {ActivatedRoute,Router} from '@angular/router';
import {Location} from '@angular/common';
import { AppService } from 'src/app/app-service.service';

@Component({
    selector : 'rb-man',
    templateUrl : './man.component.html'
        })

export class ManComponent implements OnInit {
    constructor(private route : ActivatedRoute, 
                private location :Location,
                private router : Router,
                private serviceapp : AppService
                ){
    }
    id : string;
    mans : Person[]= [];
    ngOnInit(): void{
        this.id=this.route.snapshot.paramMap.get('id');
        //appel aux service
        this.mans=this.serviceapp.getMan();
    }
    rbBack() : void {
        this.location.back();
    }
    ngSelect(idMan){
        this.router.navigate(['/manDetail',idMan]);
    }
}