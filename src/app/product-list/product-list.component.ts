import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectProductList } from '../products/state/product.selector';
import { ProductService } from '../products/product.service';
import { switchMap } from 'rxjs/operators';
import { updateReceivedProduct } from '../products/state/product.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList$: Observable<any>;
  currencyCurrent$: Observable<number>;
  subscription: Subscription;

  constructor(private store :Store<any>, private productService : ProductService) { }

  ngOnInit(): void {
    this.productList$ =  this.store.pipe(select(selectProductList));
    this.getCurrencyRate();
  }

  getCurrencyRate(): void{
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.productService.getCurrency())
    ).subscribe(res =>{
      this.currencyCurrent$ = res.rates.ILS
    } );
  }

  handleReceived(id: number): void {
    this.store.dispatch(updateReceivedProduct({id: id}))
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
