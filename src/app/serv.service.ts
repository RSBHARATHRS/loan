import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  variable="";
  userName = "";
  userEmail = "";
  userPassword = "";
  constructor() { }

  dblogic(val:any){
    console.log("Value: '" + val +"' from component 1 is saved into variable 'variable'");
    this.variable = val;
  }
  setUserDetails(name:string,email:string, pass:string){
    this.userName = name;
    this.userEmail = email;
    this.userPassword = pass;
  }
}
