import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'rb-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor(private actRoute : ActivatedRoute) { }
  id:string;
  id2:string;
  name:string;
  ngOnInit() {
    //this.id=this.actRoute.snapshot.paramMap.get('id');
    this.actRoute.paramMap.subscribe(params=> this.id=params.get('id'));
    this.actRoute.queryParamMap.subscribe(params=> {this.id2=params.get('id2');this.name=params.get('name')});

  }

}
