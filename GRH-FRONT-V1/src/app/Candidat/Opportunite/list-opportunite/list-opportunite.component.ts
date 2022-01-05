import { Component, OnInit } from '@angular/core';
import { ListOpportunite } from 'src/app/models/opportunite.interface';
import { OpportunitegetService } from 'src/app/services/opportuniteservice/opportuniteget.service';

@Component({
  selector: 'app-list-opportunite',
  templateUrl: './list-opportunite.component.html',
  styleUrls: ['./list-opportunite.component.css']
})
export class ListOpportuniteComponent implements OnInit {
   listopportunite :ListOpportunite[] = [] ; 
  constructor(private opportunitegetService : OpportunitegetService) { }

  ngOnInit(): void {
    this.getlistopppotunité(); 
  }
  getlistopppotunité(){
    this.opportunitegetService.getlistopportunité().subscribe((data:ListOpportunite[]) =>{
      this.listopportunite= data ; 
       console.log(data);
       
     });
  }
}
