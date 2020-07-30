import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name : 'James' , age : 24 , job : 'Designer' } ,
    { name : 'Jill' , age: 26  , job: 'Engineer'} ,
    { name : 'Elyse' , age : 25 , job : 'Engineer'}
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}
