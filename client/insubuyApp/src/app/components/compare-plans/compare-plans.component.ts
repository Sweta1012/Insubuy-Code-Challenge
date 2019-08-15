import { Component, OnInit } from '@angular/core';
import { GetQuotesService } from '../../shared/services/get-quotes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare-plans',
  templateUrl: './compare-plans.component.html',
  styleUrls: ['./compare-plans.component.css']
})
export class ComparePlansComponent implements OnInit {

  plansToCompare = [];

  constructor(private _service: GetQuotesService, private _router: Router) { }

  ngOnInit() {
    this.plansToCompare = this._service.getPlansToCompare();
    console.log( this.plansToCompare)
  }

  goBack() {
    this._router.navigate(['insubuyplans']);
  }

}
