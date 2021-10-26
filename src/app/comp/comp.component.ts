import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  val ="";
  constructor(private dbl: ServService) { }

  ngOnInit(): void {
  }
  clicked(){
    this.val = this.dbl.variable;
  }
}
