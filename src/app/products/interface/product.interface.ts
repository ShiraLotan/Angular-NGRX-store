export interface Action {
    type: string;
}

export interface ProductState {
    productList: [],
    idCounter: number,
    currency: number
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

export interface Currency {
    currency: number
}