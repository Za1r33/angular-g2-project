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
 
  selectedDevice!: Device;
  devices: any;

  updateDevice(value:number){
    this.showUpdate=true;
    console.log(value);
    this.deviceDetail = this.devices.find((device: { id: number; }) => device.id === value);
  }

  addNewDevice(devices:Device){
    this.devices.push(devices);
  }
  
  updateDisplay(value: any){
    this.showUpdate=false;
    let index=this.devices.findIndex((device: { id: any; }) => device.id == value.id);
    this.devices[index] = value;
    console.log(value, 'app');
  }
}

 
 