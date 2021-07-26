import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from './../models';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  @Input() deviceDetail!: Device;
  @Output() updateDetail = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  update(id:any){
    this.updateDetail.emit(id);
  }

  

}