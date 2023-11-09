import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  url = "http://127.0.0.1:5000/user"
  constructor(private http: HttpClient){

  }

  user = new FormGroup({
    'name': new FormControl('')
  })
  createName(){
    let data = {
      "name": this.user.value.name
    }
    this.http.post(this.url,data).subscribe(res=>{
      console.log(res)
    })
  }
}
