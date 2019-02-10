import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
//service
import {Data} from '../../service/data';
@Component({
  selector: 'rb-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css']
})
export class ManComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute,
    private router:Router,
    private data:Data
    ) { }
    varParam:string;
  ngOnInit() {
   // this.varParam=this.activateRoute.snapshot.paramMap.get("varParam");
   this.varParam=this.data.storage;
  }

}
