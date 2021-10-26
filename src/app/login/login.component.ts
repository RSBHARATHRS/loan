import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailID:any = "";
  passwordL:string = "";
  constructor(private router: Router,private service:ServService) { 
    // this.emailID = String(localStorage.getItem("email"));
    // this.password = String(localStorage.getItem("pass"));
   
  }
 
  ngOnInit(): void {
  }
  login(email:string,pass:string){

    let details:string | null = localStorage.getItem(email);
    console.log(typeof(details))
    if(details == null){
      alert("no Such a user");
      return;
    }

    interface MyObj {
      name: string;
      email: string;
      password: string;
    }
  
    let obj: MyObj  = JSON.parse(details);
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.password);
    
    // if(email != this.emailID){
    //   alert("Enter a valid email");
    //   return;
    // }
    this.passwordL = pass;
    if(obj.password != String(this.passwordL)){
      alert("Wrong Password");
      return;
    }
    this.service.userName = obj.email;
    this.service.userPassword = obj.password;
    alert("logged In Successfully");
    this.router.navigateByUrl('/loanCalc');
  }

  
}
