import { Component, OnInit, Input } from '@angular/core';
import { Device } from './../models';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  @Input()
  deviceDetail!: Device;

  constructor() { }

  ngOnInit(): void {
  }

}