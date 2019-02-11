import {Component,OnInit} from '@angular/core';
//service un moyenne pour partager des donnees
import {Data} from "../service/data";
@Component({
selector : 'rb-person',
templateUrl :'./person.component.html',
styleUrls : ['./person.component.css']
})
export class PersonComponent implements OnInit {
    constructor(private data:Data ){

    }
    ngOnInit(){
        this.onTap();
    }
    
    //varparm:{id:10,name:'rabah'};
    onTap(){
        this.data.storage={id:10,name:'RABAH'};
    }
}