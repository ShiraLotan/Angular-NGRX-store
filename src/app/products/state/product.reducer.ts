import { createReducer, on, createAction } from '@ngrx/store';
import { addProductToList, setProductCounterId, updateReceivedProduct } from './product.action';
import { AppState } from '../interface/product.interface';

const initialSate = {
    productList: [],
    idCounter: 0
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
        console.log(state.idCounter)
        return {
            ...state,
            idCounter: state.idCounter + 1
        }
    }),
    on(updateReceivedProduct, (state, action) => {
        const newList = filterReceivedProduct(state, action.id);
        console.log(action.id)
        return {
            ...state
        }
    })
);

const filterReceivedProduct = (list, id) => {
    const filtered = list.productsList.map(item => {
        if (item.id === id) return { ...item, isRecieved: item.id === id };
        return item;
    });
    return filtered;
}