import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string="http://localhost:3000/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // public createCandidate( candidate: Candidate){
  //   return this.httpClient.post(`${this.apiURL}/add_cand`,candidate)
  // }

  // public getCandidate( candidate: Candidate){
  //   return this.httpClient.post(`${this.apiURL}/get_cand`,candidate)
  // }
}
