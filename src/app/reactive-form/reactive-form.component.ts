import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Device } from '../models';
import { Router, ActivatedRoute } from '@angular/router';
import { DeviceService } from '../device.service';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  @Output() update = new EventEmitter();

  device?: Device;

  updateForm = new FormGroup({
    id : new FormControl(''),
    name : new FormControl(''),
    brand : new FormControl(''),
    model : new FormControl(''),
    year : new FormControl(''),
    serial : new FormControl('')
  });

  constructor(
    private router: Router,
    private deviceService: DeviceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.device = this.deviceService
    .getDevice(parseInt(this.route.snapshot.paramMap.get('id') || ''))

    this.updateForm = new FormGroup({
      id: new FormControl(this.device?.id),
      name: new FormControl(this.device?.name),
      brand: new FormControl(this.device?.brand),
      model: new FormControl(this.device?.model),
      year: new FormControl(this.device?.year),
      serial: new FormControl(this.device?.serial),

    })
  }

  updateDevice(){
    this.deviceService.updateDevice(this.updateForm.value);
    this.router.navigate(['/list']);
  }
}
