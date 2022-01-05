import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-opportunite',
  templateUrl: './mes-opportunite.component.html',
  styleUrls: ['./mes-opportunite.component.css']
})
export class MesOpportuniteComponent implements OnInit {
  user:   any
  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user")

    // localStorage.removeItem()  in logout

    console.log("localeUser --------------", this.user);
  }

}
