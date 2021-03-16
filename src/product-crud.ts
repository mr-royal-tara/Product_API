import * as ProductService from './product-crud.service';
import { Product } from './product';

export const getProductList = async (req:any, res:any) => {
    const productList: Product[] = await ProductService.getAllProducts();
    console.log(`in get ${JSON.stringify(productList)}`)
    try {
        res.status(200).send(
            productList);
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

  export const createProduct = async (req:any, res:any) => {
    const product: Product = req.body;
    await ProductService.createProducts(product);
    try {
        res.status(200).send({
            message: "Successfully added",
            IsSuccess: true,
            result: ""
        });
      } catch (e) {
        res.status(404).send(e.message);
      }
  };