import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ListOpportunite } from 'src/app/models/opportunite.interface';

@Injectable({
  providedIn: 'root'
})
export class OpportunitegetService {
  private apiURL= "http://localhost:3000/api";
  constructor(private http:HttpClient) { }

  getlistopportunité(): Observable<ListOpportunite[]>{

    return this.http.get<any>(`${this.apiURL}/list_opportunity`)
    .pipe(map(data => {
    
      return data;
    }));
  }
   
  
}
