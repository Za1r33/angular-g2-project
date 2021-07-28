import { Injectable } from '@angular/core';
import { Device } from './models';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {
  id: number = 0;

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
      id: 2,
      name:  "Device02",
      brand: "Oppo",
      model: "Reno5",
      year: 2021,
      serial: "*#06#"
    }
  ]

  constructor() { }

  getDevices(){
    return this.devices;
  }

  getDevice(id: number){
    console.log(id);
    
    return this.devices.find(device => device.id === id);
    
  }

  addDevice(device:Device){
    this.devices.push(device);
  }

  updateDevice(updatedDevice: Device){
    let index = this.devices.findIndex(device => device.id === updatedDevice.id)

    this.devices[index] = updatedDevice;
  }

  getNewId(): number {
    const index =this.devices.length -1
    return (this.devices[index].id || 0 ) + 1
  }

}
