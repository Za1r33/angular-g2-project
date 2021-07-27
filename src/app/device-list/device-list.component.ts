import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from './../models';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  devices: Device[] = [
    {
      id: 1,
      name:  "Device01",
      brand: "Vivo",
      model: "Y20i",
      year: 2020,
      serial: "*#06#"
    },
    {
      id:2,
      name:  "Device02",
      brand: "Oppo",
      model: "Reno5",
      year: 2021,
      serial: "*#06#"
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addDevice(){
    this.router.navigate(['/add']);
  }

}