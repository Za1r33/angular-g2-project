import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  id: number=0;

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.usersUrl);
  }
}
