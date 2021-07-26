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
  deviceDetail?: Device = {
    id: undefined,
    name: "",
    brand: "",
    model: "",
    year: 0,
    serial: ""

  };

  showUpdate: boolean = false;

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
 
  selectedDevice!: Device;

  updateDevice(value:number){
    this.showUpdate=true;
    console.log(value);
    this.deviceDetail = this.devices.find(device => device.id === value);
  }

  addNewDevice(devices:Device){
    this.devices.push(devices);
  }
  
  updateDisplay(value: any){
    this.showUpdate=false;
    let index=this.devices.findIndex(device => device.id == value.id);
    this.devices[index] = value;
    console.log(value, 'app');
  }
}

 
 