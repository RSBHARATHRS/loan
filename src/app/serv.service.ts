import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  variable="";
  userName = "";
  userPassword = "";
  constructor() { }

  dblogic(val:any){
    console.log("Value: '" + val +"' from component 1 is saved into variable 'variable'");
    this.variable = val;
  }
  setUserDetails(name:string,pass:string){
    this.userName = name;
    this.userPassword = pass;
  }
}
