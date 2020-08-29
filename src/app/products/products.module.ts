import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../add-product/products/products.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { SingleProductComponent } from '../single-product/single-product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { RecievedListComponent } from '../recieved-list/recieved-list.component';
import { CurrencyPipe } from '../products/pipe/currency.pipe';
import { StoresListComponent } from '../stores-list/stores-list.component';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    ProductsComponent,
    SingleProductComponent,
    ProductListComponent,
    RecievedListComponent,
    StoresListComponent,
    CurrencyPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    FlexLayoutModule,
    StoreModule.forFeature('products', productReducer)
  ],
  exports: [ProductsComponent, MatTabsModule, MatButtonModule, MatInputModule, MatMenuModule, MatRadioModule, MatDatepickerModule]
})
export class ProductsModule { }
