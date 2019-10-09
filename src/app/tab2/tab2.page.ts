import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title: String;

  constructor() { 
    
    this.title = "CÂMERA"
    
   }

  fotografar(){
    console.log("Tirando foto")
  }

}
