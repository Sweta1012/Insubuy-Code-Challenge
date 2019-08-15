import { Component, OnInit } from '@angular/core';
import { CustomValidators } from '../../shared/validators/custom-validator'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
import { GetQuotesService } from '../../shared/services/get-quotes.service';
//import { SubSink } from 'subsink';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  // public data
  // errorList: string[] = [];
  // formSubmitted: boolean = false;

  // private data
  // private _subs: SubSink = new SubSink();
  // private _validator: CustomValidators;

  quotesForm: FormGroup;

      validationMessages = {
        'age': {
          'required': 'Age is required!'
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


  constructor(private _router: Router, private _http: HttpClient, private fb: FormBuilder, private _quotesService: GetQuotesService) { }

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

  getQuotes() {
    this.logValidationErrors(this.quotesForm);
    this._router.navigate(['insubuyplans']);
  }

}
