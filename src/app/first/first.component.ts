import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Output() firstEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
  
    this.firstEvent.emit('New Message');
  }
}
