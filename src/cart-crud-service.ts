import { Cart, carts } from "./cart";

export const getAllCartProducts = async (): Promise<Cart[]> => {
    return carts;
};

export const createCart = async (cart:Cart): Promise<void> => { 
    carts.push(cart);  
}