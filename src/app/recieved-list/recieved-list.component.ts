import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductState } from '../products/interface/product.interface';
import { Store, select } from '@ngrx/store';
import { selectProductList, selectProductCurrency } from '../products/state/product.selector';

@Component({
  selector: 'app-recieved-list',
  templateUrl: './recieved-list.component.html',
  styleUrls: ['./recieved-list.component.css']
})
export class RecievedListComponent implements OnInit {
  recievedList$: Observable<ProductState>;
  currenctCurrency$: Observable<any>;

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.recievedList$ = this.store.pipe(select(selectProductList));
    this.currenctCurrency$ = this.store.pipe(select(selectProductCurrency));
  }

}
