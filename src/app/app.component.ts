import { Component,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @Output() buttonEvent= new EventEmitter();

  title = "My first Angular Component.";
  appMessage = "from AppComponent to FirstComponent";
  
}

 
 