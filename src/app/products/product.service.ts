import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Currency } from './interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  convertUrl: string = "https://api.exchangeratesapi.io/latest?base=USD";
  currency: Observable<any>;

  constructor(private http: HttpClient) { }

  getCurrency(): Observable<any> {
    this.currency = this.http.get(this.convertUrl).pipe(
      catchError(this.handleError)
    );
    return this.currency
  }

  handleError(error: HttpErrorResponse) {
    return throwError(
      'Something bad happened; please try again later.');
  }
}


