import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros="RABAH BOUTRIG";

  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
        console.log(this.route.snapshot.paramMap.get('id'));
  }
  goBack(): void {
    this.location.back();
  }
}
