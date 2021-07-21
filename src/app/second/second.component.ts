import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  template: '<p>Second Works! <br>{{secondMessage ? secondMessage: "_______________"}}</p>',
  styles: ['p { color: red }']
})
export class SecondComponent {

  @Input() secondMessage = "";

  
}
