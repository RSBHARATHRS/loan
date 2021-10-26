import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: ServService, private router:Router) { }

  ngOnInit(): void {
  }

  removeAcc(){
    localStorage.removeItem(this.service.userEmail);//for remove the user details from the local storage
    this.router.navigateByUrl('');
  }

}
