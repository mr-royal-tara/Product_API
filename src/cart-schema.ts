import {
    Schema
  } from 'mongoose';
import mongoose from 'mongoose';
  
export const Cart = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    items: [
        {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'
        },
        quantity: Number,
        price : Number
        }
    ]
});

const cart = mongoose.model("cart", Cart);
export default cart;