export interface Action {
    type: string;
}

export interface AppState {
    products:{
        productList: []
    }
}

export interface Product {
    id: number,
    name: string,
    storeName: string,
    price: number,
    isRecieved: boolean,
    deliveryDate: Date | number
}

export interface ProductStore {
    name: string,
    sum: number 
}