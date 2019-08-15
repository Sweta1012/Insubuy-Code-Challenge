import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetQuotesService {

  constructor(private _http: HttpClient) { }

  getQuotes = () => {
    return this._http.get('http://localhost:8080/quotes');
  }
}
