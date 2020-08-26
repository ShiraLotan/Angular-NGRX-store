import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './add-product/products/products.component';
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';
import { RecievedListComponent } from './recieved-list/recieved-list.component';

const routes: Routes = [
  { path: "", component: ProductsComponent, pathMatch: "full" },
  { path: "products", component:  ProductListComponent},
  { path: "received", component: RecievedListComponent },
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
