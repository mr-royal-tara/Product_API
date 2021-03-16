import { Product, products } from "./product";

export const getAllProducts = async (): Promise<Product[]> => {
    return products;
};

export const createProducts = async (product:Product): Promise<void> => { 
    products.push(product);  
}