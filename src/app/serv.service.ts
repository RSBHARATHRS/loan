import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  variable:string;
  userName:string;
  userEmail:string;
  userPassword : string;
  
  obj: { 
    firstName: string,
    lastName: string, 
    age : number,
    salary : number,
  };

  constructor() { 
    this.variable="";
    this.userName = "";
    this.userEmail = "";
    this.userPassword = "";
    this.obj = {
      firstName: "", 
      lastName: "", 
      age : 0,
      salary : 0
    }
  }

  storeUserInformation(obj:any){
    this.obj = obj;
    console.log(this.obj);
  }

  dblogic(val:any){
    console.log("Value: '" + val +"' from component 1 is saved into variable 'variable'");
    this.variable = val;
  }

  setUserDetails(name:string, email:string, pass:string){
    this.userName = name;
    this.userEmail = email;
    this.userPassword = pass;
  }
}
