import { Component } from '@angular/core';
import { ServeService } from './serve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ser:ServeService){}
  title = 'Oauthapp';



  google(){
    this.ser.google().subscribe((res)=>{
    window.location.href=res.url;
    })
  }
}
