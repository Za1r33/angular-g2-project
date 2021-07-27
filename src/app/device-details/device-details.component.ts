import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from './../models';
import { Router } from '@angular/router'

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  @Input() deviceDetail!: Device;
  @Output() updateDetail = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  update(id:any){
    this.router.navigate(['/update']);
  }

  

}