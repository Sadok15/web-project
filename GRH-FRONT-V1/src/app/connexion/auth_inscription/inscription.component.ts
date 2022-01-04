import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  competenceForm: FormGroup
  infoForm:FormGroup
  expForm:FormGroup

  public result : any
  email = String
  mdp = String
  num_tel= String
  github= String
  linkedin= String

  constructor(
    private ngWizardService: NgWizardService,
    private fb:FormBuilder,
    private apiservice:ApiService){

    this.competenceForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });

    this.infoForm = this.fb.group({
      email:"",
      mdp:"",
      num_tel:"",
      github:"",
      linkedin:""
    })

    this.expForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    })
  }
 stepStates = {
  normal: STEP_STATE.normal,
  disabled: STEP_STATE.disabled,
  error: STEP_STATE.error,
  hidden: STEP_STATE.hidden
};
config: NgWizardConfig = {
  selected: 0,
  theme: THEME.arrows,
  toolbarSettings: {
    toolbarExtraButtons: [
      { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
    ],
  }
};
showPreviousStep(event?: Event) {
  this.ngWizardService.previous();
}
showNextStep(event?: Event) {
  this.ngWizardService.next();
}
resetWizard(event?: Event) {
  this.ngWizardService.reset();
}
setTheme(theme: THEME) {
  this.ngWizardService.theme(theme);
}
stepChanged(args: StepChangedArgs) {
  console.log(args.step);
}
isValidTypeBoolean: boolean = true;
isValidFunctionReturnsBoolean(args: StepValidationArgs) {
  return true;
}
isValidFunctionReturnsObservable(args: StepValidationArgs) {
  return of(true);
}


competences() : FormArray {
  return this.competenceForm.get("competences") as FormArray
}

experiences() : FormArray {
  return this.expForm.get("experiences") as FormArray
}

newCompetence(): FormGroup {
  return this.fb.group({
    comp: '',
  })
}

newExperience(): FormGroup {
  return this.fb.group({
    duree: '',
    detail: ''
  })
}

addCompetence() {
  this.competences().push(this.newCompetence());
}

addExperience() {
  this.competences().push(this.newExperience());
}


removeQuantity(i:number) {
  this.competences().removeAt(i);
}

onSubmit() {
  console.log(this.competenceForm.value);
}

collectData1(){
  var candidate = {
    "email" : this.infoForm.get("email")?.value,
    "mdp" : this.infoForm.get("mdp")?.value,
    "num_tel" : this.infoForm.get("num_tel")?.value,
    "github" : this.infoForm.get("github")?.value,
    "linkedin" : this.infoForm.get("linkedin")?.value
  }
  this.result = candidate
}

collectData2(){

  this.result = this.competences()
}


collectData3(){
  this.result = this.experiences()
}



ngOnInit(): void {

// this.apiservice.createCandidate(candidate).subscribe(
//     (res:any) => {
//         console.log("created")
//     }
//   )
}

}
