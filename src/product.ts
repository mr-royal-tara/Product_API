export interface Product {
    id: number | null;
    productName: string;
    productPrice: number;
    productDescription: string;
    productQuantity: number;
}


 export const products: Product[] = [
        {
            id: 1,
            productName: 'Java',
            productPrice: 700,
            productDescription: 'Java Tutorial',
            productQuantity: 5
        },
        {
            id: 2,
            productName: 'JS',
            productPrice: 1200,
            productDescription: 'Java Script Tutorial',
            productQuantity: 20
        },
        {
            id: 3,
            productName: 'Node',
            productPrice: 1700,
            productDescription: 'Node Tutorial',
            productQuantity: 25
        },
        {
            id: 4,
            productName: 'React',
            productPrice: 1800,
            productDescription: 'React Tutorial',
            productQuantity: 15
        },
    ];