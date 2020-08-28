import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products/interface/product.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  @Input() currencyCurrent$: Observable<number>;
  @Input() product: Product;
  @Output() receive = new EventEmitter();

  priceChoosen: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

  handleproductIdemit(id: number): void {
    this.receive.emit(id)
  }
}
