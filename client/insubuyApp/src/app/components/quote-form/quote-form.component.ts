import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
import { GetQuotesService } from '../../shared/services/get-quotes.service';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quotesForm: FormGroup;
  invalidAge:boolean = false;
  invalidCitizen:boolean = false;
  invalidState:boolean = false;
  invalidDate:boolean = false;

      validationMessages = {
        'age': {
          'required': 'Please provide valid Age!'
        },
        'policyMax': {
          'required': 'Policy Maximum is required!'
        },
        'startDate': {
          'required': 'Start Date is required!'
        },
        'endDate': {
          'required': 'End Date is required!'
        },
        'citizenship': {
          'required': 'Citizenship is required!'
        },
        'state': {
          'required': 'Mailing State is required!'
        }
    };

    formErrors = {
    'age': '',
    'startDate': '',
    'endDate': '',
    'policyMax': '',
    'citizenship': '',
    'state': ''
    };


  constructor(private _router: Router, private _http: HttpClient, private fb: FormBuilder, private _quotesService: GetQuotesService ) { }

  ngOnInit() {
      this.quotesForm = this.fb.group({
        age: ['', Validators.required, Validators.max(4), Validators.min(1)],
        policyMax: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        citizenship: ['', Validators.required],
        state: ['', Validators.required]
    });
    
  }

  validateAge(age):boolean {

    console.log(age);

            if(age > 100 && age < 1919) {
              this.invalidAge = true;
                return false;
            }
          
          else if(age > 2019) {
            this.invalidAge = true;
            return false;
          }
          else if(age <= 0) {
            this.invalidAge = true;
            return false;
          }
          else if (age == undefined) {
            this.invalidAge = true;
            return false;
          }
          this.invalidAge = false;
          return true;
     
  }

    logValidationErrors(group: FormGroup): void {
      Object.keys(group.controls).forEach((key: string) => {
        const abstractControl = group.get(key);
        if (abstractControl instanceof FormGroup) {
          this.logValidationErrors(abstractControl);
        } else {
          if (abstractControl && !abstractControl.valid) {
            const messages = this.validationMessages[key];
            console.log(messages);
            console.log(abstractControl.errors);
            for (const errorKey in abstractControl.errors) {
              if (errorKey) {
                this.formErrors[key] += messages[errorKey] + ' ';
              }
            }
          }
        }
      });
    }

    validateCitizenInput(value):boolean {
      if(/^[a-zA-Z\s]+$/.test(value)) {
        this.invalidCitizen = false;
        return true;
      }
        this.invalidCitizen = true;
        return false;
    }

    validateStateInput(value):boolean {
      if(/^[a-zA-Z\s]+$/.test(value)) {
        this.invalidState = false;
        return true;
      }
        this.invalidState = true;
        return false;
    }

    validateEndDate(startDate, endDate):boolean {

        var start = new Date(startDate);
        var end   = new Date(endDate);

          if(end.getTime() >= start.getTime()) {
              this.invalidDate = false;
              return true;
          } else {
            this.invalidDate = true;
            return false;
          }
    }

    validateForm():boolean {

      let validateAge = this.validateAge(this.quotesForm.get('age').value),
          validateCitizen = this.validateCitizenInput(this.quotesForm.get('citizenship').value),
          validateState = this.validateStateInput(this.quotesForm.get('state').value),
          validateEndDate = this.validateEndDate(this.quotesForm.get('startDate').value, this.quotesForm.get('endDate').value);

        if(this.quotesForm.invalid || validateAge==false || validateCitizen==false || validateState==false, validateEndDate==false ) {
          return false;
        }
        else if(this.quotesForm.invalid){
          return false;
        }

        return true;
    }

  getQuotes() {

    this.logValidationErrors(this.quotesForm);

    if(this.validateForm()) {
      this._router.navigate(['insubuyplans']);
    }
  }
  
  reset() {
    this.quotesForm.reset();
  }

}
