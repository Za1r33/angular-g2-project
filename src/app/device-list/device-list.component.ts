import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from './../models';
import { DeviceService } from '../device.service';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})

export class DeviceListComponent implements OnInit {
  devices: Device[] = [];

  constructor(
    private router: Router,
    private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.devices = this.deviceService.getDevices();

  }

  addDevice(){  
    this.router.navigate(['/add']);
  }

}