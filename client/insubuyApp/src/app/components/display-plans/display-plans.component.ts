import { Component, OnInit } from '@angular/core';
import { GetQuotesService } from '../../shared/services/get-quotes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-plans',
  templateUrl: './display-plans.component.html',
  styleUrls: ['./display-plans.component.css']
})
export class DisplayPlansComponent implements OnInit {

  plans = [];
  plansToCompare = [];
  filterby:string = '';
  minPlansToCompare:boolean = false;
  maxPlansToCompare:boolean = false;

  constructor(private _getQuotesService: GetQuotesService, private _router: Router) { }

  ngOnInit() {
      this._getQuotesService.getQuotes().subscribe((res:any) => {
        this.plans = res.quotes;
      })
  }

  selectQuotesToCompare(e, plan, id) {
    let length = this.plansToCompare.length;

    if(e.target.checked) {

        if(length >= 1) {
          this.minPlansToCompare = false;
        }

          this.plansToCompare.push(plan);
          this._getQuotesService.plansToCompare = this.plansToCompare;
      
      
    } 
    else if (!e.target.checked){

      if(length <= 5) {
        this.maxPlansToCompare = false;
      }

      let plansToCompare = this.plansToCompare.filter((item, index) => {
        return item.id !== id;
      });

      this.plansToCompare = plansToCompare;
      this._getQuotesService.plansToCompare = this.plansToCompare;
 
    }
  }

  comparePlans() {

    let lengthOfPlans = this._getQuotesService.getPlansToCompare().length;

    if(lengthOfPlans > 4) {
      this.maxPlansToCompare = true;
    } else if (lengthOfPlans < 2) {
      this.minPlansToCompare = true;
    } else {
      this._router.navigate(['compareplans']);
    }
  }

}
