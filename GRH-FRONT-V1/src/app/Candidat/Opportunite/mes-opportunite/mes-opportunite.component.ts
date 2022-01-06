import { Component, OnInit } from '@angular/core';
import { ListOpportunite } from 'src/app/models/opportunite.interface';
import { OpportunitegetService } from 'src/app/services/opportuniteservice/opportuniteget.service';
@Component({
  selector: 'app-mes-opportunite',
  templateUrl: './mes-opportunite.component.html',
  styleUrls: ['./mes-opportunite.component.css']
})
export class MesOpportuniteComponent implements OnInit {
  listopportunite_cond :ListOpportunite[] = [] ;

  user:   any
  constructor(private opportunitegetService : OpportunitegetService) { }
  ngOnInit(): void {
    this.user = localStorage.getItem("user")

  }
  getlistopppotunité_cond(){
    this.opportunitegetService.getlistopportunité_cond().subscribe((data:ListOpportunite[]) =>{
      this.listopportunite_cond= data ;
       console.log(data);

     });
  }

}
