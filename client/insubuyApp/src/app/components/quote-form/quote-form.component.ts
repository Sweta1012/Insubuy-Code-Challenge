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
  // age: number;
  // citizenship:string = '';
  // state:string = '';

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
              console.log("age : 101 to 1918")
                return false;
            }
          
          else if(age > 2019) {
            console.log("age : >2019")
            return false;
          }
          else if(age <= 0) {
            console.log("age : <=0")
            return false;
          }
          else if (age == undefined) {
            console.log("age undefined");
            return false;
          }
          console.log("valid age")
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

    validateInput(value):boolean {
      if(/^[a-zA-Z]+$/.test(value)) {
        return true;
      }
      console.log("invalid input from citizenship or state");
      return false;
    }

     isValidDate(dateString) {
        // First check for the pattern
        if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
            return false;

        // Parse the date parts to integers
        var parts = dateString.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);

        // Check the ranges of month and year
        if(year < 1000 || year > 3000 || month == 0 || month > 12)
            return false;

        var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        // Adjust for leap years
        if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
            monthLength[1] = 29;

        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];
};

    validateEndDate(startDate, endDate):boolean {
      var regExp = /(\d{1,2})\/(\d{1,2})\/(\d{2,4})/;
      if(parseInt(endDate.replace(regExp, "$3$2$1")) > parseInt(startDate.replace(regExp, "$3$2$1"))){
          console.log("end date is greater than start date");
          return true;
      } else{
          console.log("end date is smaller than start date");
          return false;
    }
    }

    validateForm():boolean {

      let validateAge = this.validateAge(this.quotesForm.get('age').value),
          validateCitizen = this.validateInput(this.quotesForm.get('citizenship').value),
          validateState = this.validateInput(this.quotesForm.get('state').value),
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

}
