import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as moment from "moment";
import { addProductToList, setProductCounterId } from 'src/app/products/state/product.action';
import { selectFeatureCount } from 'src/app/products/state/product.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  addProductForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('Headphones', [Validators.required]),
    storeName: new FormControl('Amazon', [Validators.required]),
    price: new FormControl('120', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    deliveryDate: new FormControl('', [this.dateValidator()]),
  });

  constructor(private store: Store<any>, private router: Router) { }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }

  ngOnInit(): void {
   
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.addProductForm.valid) {
      this.store.pipe(select(selectFeatureCount)).subscribe(res => {
        this.addProductForm.value.id = res;
        this.addProductForm.value.isRecieved = false;
        this.store.dispatch(addProductToList(this.addProductForm.value));
        this.addProductForm.reset(this.addProductForm)
        this.router.navigate(['/products']);
      })
    }
  }

  setCounterId(){
    // this.store.dispatch(setProductCounterId());
  }

  dateValidator(format = "MM/dd/YYYY"): any {
    return (control: FormControl): { [key: string]: any } => {
      const val = moment(control.value, format, true);

      if (!val.isValid()) {
        return { invalidDate: true };
      }

      return null;
    };
  }
}
