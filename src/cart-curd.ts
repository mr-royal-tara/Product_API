import * as CartService from './cart-crud-service';
import { Cart } from './cart';

export const getCartList = async (req:any, res:any) => {
    const cartlist: Cart[] = await CartService.getAllCartProducts();
    console.log(`in get ${JSON.stringify(cartlist)}`)
    try {
        res.status(200).send(
            cartlist);
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

  export const createCart = async (req:any, res:any) => {
    const cart: Cart = req.body;
    await CartService.createCart(cart);
    try {
        res.status(200).send({
            message: "Item Successfully added in cart",
            IsSuccess: true,
            result: ""
        });
      } catch (e) {
        res.status(404).send(e.message);
      }
  };