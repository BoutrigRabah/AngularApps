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
  ngOnInit() {
    this.id=this.actRoute.snapshot.paramMap.get('id');
  }

}
