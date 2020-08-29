import { createReducer, on } from '@ngrx/store';
import { addProductToList, setProductCounterId, updateReceivedProduct, updateCurrency } from './product.action';
import { ProductState, Product } from '../interface/product.interface';

const initialSate: ProductState = {
    productList: [],
    idCounter: 1,
    currency: 3.4
}

export const productReducer = createReducer(
    initialSate,
    on(addProductToList, (state, action) => {
        console.log(state)
        return {
            ...state,
            productList: [...state.productList, action]
        }
    }),
    on(setProductCounterId, (state) => {
        return {
            ...state,
            idCounter: state.idCounter + 1
        }
    }),
    on(updateReceivedProduct, (state, action) => {
        const newList = filterReceivedProduct(state.productList, action.id);
        return {
            ...state,
            productList: newList
        }
    }),
    on(updateCurrency, (state, action) => {
        return {
            ...state,
            currency: action.currency
        }
    })
);

const filterReceivedProduct = (list, id)  => {
    const filtered = list.map(item => {
        if (item.id === id) return { ...item, isRecieved: item.id === id };
        return item;
    });
    return filtered;
}