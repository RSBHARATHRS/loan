import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/serv.service';


@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EMICalculatorComponent implements OnInit {

  firstName : string;
  lastName : string;
  age : any;
  salary : any;
  obj: { 
    firstName: string; 
    lastName: string; 
    age : number;
    salary : number;
  };

  constructor(private service: ServService) {
    this.firstName = "";
    this.lastName = "";
    this.age = 0;
    this.salary = 0;
    this.obj = {
      firstName : "",
      lastName : "",
      age : 0,
      salary : 0
    }
  }

  ngOnInit(): void {
  }

  makeObject() : void{  
    this.obj = {
      firstName : this.firstName,
      lastName : this.lastName,
      age : Number(this.age),
      salary : Number(this.salary),
    }
  }

  getValue(firstName:string, lastName:string, age:string, salary:string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
    this.makeObject();
    console.log(this.obj.firstName);
    console.log(this.obj.lastName);
    console.log(typeof(this.obj));
    const stringForm = JSON.stringify(this.obj) ;
    console.log(stringForm);
    this.service.storeUserInformation(this.obj);
  }
}
