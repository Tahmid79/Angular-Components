import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  items = [
    {title : 'Why is the sky blue?' , content : 'The sky is blue because it is' },
    {title :'What does an orange taste like?' , content : 'Orange tastes like orange'},
    {title : 'What color is that cat?' , content : 'The cat is orange'}
  ];

 modalOpen = false ;

  onClick(){
    this.modalOpen = ! this.modalOpen ;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
