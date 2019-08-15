import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetQuotesService {

  public plansToCompare = [];

  constructor(private _http: HttpClient) { }

  getQuotes = () => {
    return this._http.get('http://localhost:8080/quotes');
  }

  getPlansToCompare() {
    return this.plansToCompare;
  }
}
