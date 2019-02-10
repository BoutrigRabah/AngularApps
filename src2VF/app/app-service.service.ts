import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  getMan(){
    return [
      {id : 1 , name: 'rabah'},
      {id : 2 , name: 'hakim'},
      {id : 3 , name: 'nabil'},
      {id : 4 , name: 'serviceapp'}
    ]
  }
}
