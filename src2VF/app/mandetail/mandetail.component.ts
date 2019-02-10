import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-mandetail',
  templateUrl: './mandetail.component.html',
  styleUrls: ['./mandetail.component.css']
})
export class MandetailComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router:Router) { }
  id : string;
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
  }
  overview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  contact(){
    this.router.navigate(['contact'],{relativeTo:this.route});

  }

}
