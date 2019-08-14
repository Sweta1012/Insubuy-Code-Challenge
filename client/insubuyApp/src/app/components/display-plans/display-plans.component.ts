import { Component, OnInit } from '@angular/core';
import { data } from '../../shared/data/quotes';
import { GetQuotesService } from '../../shared/services/get-quotes.service';

@Component({
  selector: 'app-display-plans',
  templateUrl: './display-plans.component.html',
  styleUrls: ['./display-plans.component.css']
})
export class DisplayPlansComponent implements OnInit {

  quotes:any = data.quotes;
  plans = [];
  filterby:string = '';

  constructor(private _getQuotesService: GetQuotesService) { }

  ngOnInit() {
      this._getQuotesService.getQuotes().subscribe((res:any) => {
        this.plans = res.quotes;
        console.log("response.quotes:: " ,res.quotes);
        console.log("plans local variable:: " ,this.plans);
      })
  }

  

}
