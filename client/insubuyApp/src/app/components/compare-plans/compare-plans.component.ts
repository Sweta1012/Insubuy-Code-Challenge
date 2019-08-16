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
  isPlans:boolean;

  constructor(private _service: GetQuotesService, private _router: Router) { }

  ngOnInit() {
    this.plansToCompare = this._service.getPlansToCompare();
    if(this.plansToCompare.length == 0) {
      this.isPlans = true;
    }
  }

  goBack() {
    this._router.navigate(['insubuyplans']);
  }

}
