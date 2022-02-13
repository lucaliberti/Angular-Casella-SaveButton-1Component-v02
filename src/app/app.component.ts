import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  testo_salvato:string="(ancora nulla)"

  constructor() {}

  onClick1(htmlInput:HTMLInputElement) {
    console.log(htmlInput)
    this.testo_salvato=htmlInput.value 
  }

  onClick2( val:string) {
    console.log(val)
    this.testo_salvato=val 
  }



}


