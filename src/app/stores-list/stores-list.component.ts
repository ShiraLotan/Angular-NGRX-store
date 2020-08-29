import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductStore } from '../products/interface/product.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css']
})
export class StoresListComponent implements OnInit {
  filterProductList: Product[];
  private _productList = new BehaviorSubject<Product[]>([]);

  @Input()
  set productsList$(value: Product[]) {
    this._productList.next(value);
  };

  get data() {
    return this._productList.getValue();
  }

  @Input() isRecived: boolean;

  groupedStores: ProductStore[];


  constructor() { }

  ngOnInit(): void {
    this._productList.subscribe(res => {
      if (res.length) {
        this.filterProductList = res.filter(product => product.isRecieved===this.isRecived)
        this.handleAggrigation(this.filterProductList);
      }
    })
  }

  handleAggrigation(filterProductList: Product[]): void {
    const storesArr = [];

    let group = filterProductList.reduce((r, a) => {
      r[a.storeName] = ++r[a.storeName] || 1;
      return r;
    }, {});
    for (let [key, value] of Object.entries(group)) {
      const storeObj = { name: key, sum: value };
      storesArr.push(storeObj)
    }
    this.groupedStores = storesArr;
  }
}
