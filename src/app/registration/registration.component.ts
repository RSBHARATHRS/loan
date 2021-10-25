import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  name:string = "";
  email:string = "";
  password:string = "";
  cpassword:string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  register(n:string,e:string,p:string,cp:string){
    if(n == "" || e == "" || p =="" || cp == ""){
      alert("Enter valid Input");
      return;
    }
    if(p != cp){
      alert("New Password and Confirm password should be same");
      return;
    }
    localStorage.setItem("name",n);
    localStorage.setItem("email",e);
    localStorage.setItem("pass",p);
    alert("Register Successfully");
    this.router.navigateByUrl("login");
  }
}
