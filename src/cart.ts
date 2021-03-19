export interface Cart {
    id: number | null;
    productPrice: number;
    quantity : number ;
}


 export const carts: Cart[] = [
        {
            id: 1,
            productPrice: 700,
            quantity : 1
        },
        {
            id: 2,
            productPrice: 1200,
            quantity : 1 
        },
        {
            id: 3,
            productPrice: 1700,
            quantity : 1
        },
        {
            id: 4,
            productPrice: 1800,
            quantity : 1
        },
    ];