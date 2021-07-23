import { Component,Output, EventEmitter } from '@angular/core';
import { Device } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() buttonEvent= new EventEmitter();

  title = "My first Angular Component.";
  appMessage = "from AppComponent to FirstComponent";
  deviceDetails: any;


  devices: Device[] = [
    {
      name:  "Device01",
      brand: "Vivo",
      model: "Y20i",
      year: 2020,
      serial: "*#06#"
    },
    {
      name:  "Device02",
      brand: "Oppo",
      model: "Reno5",
      year: 2021,
      serial: "*#06#"
    }
  ]
 

  addNewDevice(devices:Device){
    this.devices.push(devices);
  }

 }

 
 