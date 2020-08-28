import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../products/interface/product.interface';
import { Store, select } from '@ngrx/store';
import { ProductService } from '../products/product.service';
import { selectProductList, selectProductCurrency } from '../products/state/product.selector';

@Component({
  selector: 'app-recieved-list',
  templateUrl: './recieved-list.component.html',
  styleUrls: ['./recieved-list.component.css']
})
export class RecievedListComponent implements OnInit {
  recievedList$: Observable<AppState>;
  currenctCurrency$: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.recievedList$ = this.store.pipe(select(selectProductList));
    this.currenctCurrency$ = this.store.pipe(select(selectProductCurrency));
  }

}
