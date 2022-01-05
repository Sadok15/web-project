import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private apiservice:ApiService
  ) {

    this.authForm = this.fb.group({
      email:"",
      mdp:"",
    });

  }


  SubmitForm(){
    var candidate = {
      "email" : this.authForm.get("email")?.value,
      "mdp" : this.authForm.get("mdp")?.value,
   }
   this.apiservice.getCandidate(candidate).subscribe(

    (data:any) => console.log("success!", data),
    (error:any) => console.error("couldn't post because", error)

)
  }

  ngOnInit(): void {
  }

}
