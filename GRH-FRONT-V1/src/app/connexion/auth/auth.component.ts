import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2'

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

    data => {
      // console.log("---- data ---- ", data)
      localStorage.setItem("user", JSON.stringify(candidate));
      // console.log("-------- test json -------------- ", JSON.stringify(candidate))
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      ).then((result)=>{
        if(result.isConfirmed){
        location.replace('/');
        }
    })
  },
    error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }

)
  }

  ngOnInit(): void {
  }

}
