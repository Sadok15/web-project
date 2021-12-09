import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  productForm: FormGroup

  constructor(private ngWizardService: NgWizardService,private fb:FormBuilder){

    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
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


quantities() : FormArray {
  return this.productForm.get("quantities") as FormArray
}

newQuantity(): FormGroup {
  return this.fb.group({
    qty: '',
    price: '',
  })
}

addQuantity() {
  this.quantities().push(this.newQuantity());
}

removeQuantity(i:number) {
  this.quantities().removeAt(i);
}

onSubmit() {
  console.log(this.productForm.value);
}

ngOnInit(): void {
}
}
