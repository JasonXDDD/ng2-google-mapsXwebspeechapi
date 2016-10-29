import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testobj',
  templateUrl: './testobj.component.html',
  styleUrls: ['./testobj.component.css']
})
export class TestobjComponent implements OnInit {
  show = new greetingObj();
  data = "hola";

  constructor() {
    var self = this;

    this.show.greeting = function(){
      self.data = "hello";
    }

   }

  ngOnInit() {
  }

  start(){
    this.show.greeting();
  }

}

export class greetingObj{
  greeting: any
}
