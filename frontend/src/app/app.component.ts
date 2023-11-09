import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
export interface cars {
  cars: [
    {
      name: string
    }
    
  ]
  count: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = "http://127.0.0.1:5000/user"

  users: any;
  constructor(private http: HttpClient){

  }
  getName(){
    this.http.get<cars>(this.url).subscribe((res: cars)=>{
      console.log(res.cars)
      this.users = res.cars
    })
  }



}
