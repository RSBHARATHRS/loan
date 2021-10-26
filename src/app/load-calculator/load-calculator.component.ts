import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-load-calculator',
  templateUrl: './load-calculator.component.html',
  styleUrls: ['./load-calculator.component.css']
})
export class LoadCalculatorComponent implements OnInit {
  /**Variables**/
  name:any = "";
  email:any = "";
  selectedValue: number = 0;
  principleAmount:Number = 0; 
  tmonth:Number = 0; 
  roi:Number = 0; 
  interest:number = 0;
  mydata = "Hi";

  constructor(private dbl: ServService) { 
    this.name=dbl.userName;
  }

  ngOnInit(): void {
    
  }
  dblogic(val:any){
    this.dbl.dblogic(val);
  }
  valueChange(val:any){
     this.selectedValue = val;
    console.log(val);
  }

  calculate(p:any,t:any,r:any){
    this.principleAmount=p;
    this.tmonth=t;
    this.roi=r;

    this.interest = Number(this.roi) * (Number(this.principleAmount) / 100) * (Number(this.tmonth) * 0.0833333333);
    this.interest = Math.ceil(this.interest);
  }

  reset(){
    this.principleAmount = 0;
    this.tmonth = 0;
    this.roi = 0;
    this.interest = 0;
    this.selectedValue = 0;
  }
}
