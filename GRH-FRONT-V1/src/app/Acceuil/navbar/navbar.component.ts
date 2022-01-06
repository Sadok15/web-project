import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any
  dict: any
  mail: any
  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user")
    this.dict = JSON.parse(this.user)
    this.mail = this.dict["email"].substr(0, this.dict["email"].indexOf('@'))
    console.log("test ", this.mail)
  }

}
