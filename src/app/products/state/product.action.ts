import { createAction, props } from '@ngrx/store';
import { Product } from '../interface/product.interface';

export const addProductToList = createAction(
    "[Product] Add Product To List",
    props<{ product: Product; }>()
);

export const setProductCounterId = createAction(
    "[Product] Set Product Counter ID",
);

export const updateReceivedProduct = createAction(
    "[Product] Update Product Received",
    props<{ id: any }>()
);