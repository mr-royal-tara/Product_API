import { Cart } from './cart';
import carts from './cart-schema';

export const getCartList = async (req:any, res:any) => {
    carts.find((err: any, result: any) => {
        if (err) {
          res.send("Error!");
        } else {
        console.log(JSON.stringify(result));
          res.send(result);
        }
      });
  };

  export const createCart = async (req:any, res:any) => {
    const request: Cart = req.body;
    console.log(JSON.stringify(request))
    let prod = new carts(request);
    prod.save((err:any, result:any) => {
        if (err) {
            res.send("Error!");
          } else {
          console.log(JSON.stringify(result))
            res.send(result);
          }
    });
  };
