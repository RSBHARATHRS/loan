import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailID:string = "";
  password:string = "";
  constructor(private router: Router) { 
    this.emailID = String(localStorage.getItem("email"));
    this.password = String(localStorage.getItem("pass"));
  }

  ngOnInit(): void {
  }
  login(email:string,pass:string){
    if(email != this.emailID){
      alert("Enter a valid email");
      return;
    }
    if(pass != this.password){
      alert("Wrong Password");
      return;
    }
    alert("logged In Successfully");
    this.router.navigateByUrl('/loanCalc');
  }
}
