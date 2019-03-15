import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private http:HttpClient) { }



  google():Observable<any>{
    console.log("working")
 return this.http.get('http://localhost:4000/setUrl');
  }
}
