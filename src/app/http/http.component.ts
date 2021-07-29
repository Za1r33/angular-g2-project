import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Users } from '../models';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  users!: Users[];
  selectedUser?: Users;

  showDetails?: boolean = false;

  constructor(
    private http:HttpService,
    ) { }

  ngOnInit(): void {
    this.http.getUsers().subscribe(users => {
      this.users = users as Users[];
      console.log(this.users);
    })
  }

  viewDetails(id: number){
    this.showDetails = true;
    this.http.id = this.users.findIndex(users=> users.id === id);
    console.log("USER_ID" + id);
    let index = this.users?.findIndex(users=>users.id === id);
    // this.selectedUser = (this.users || [])[index || -1];
    this.selectedUser = this.users[index];
    console.log(this.selectedUser);
    
  }
 
  isList(){
    this.showDetails = false;
  }
}
