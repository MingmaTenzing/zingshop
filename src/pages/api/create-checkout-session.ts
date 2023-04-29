import { NextApiRequest, NextApiResponse } from "next";
import { product } from "..";


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req:NextApiRequest, res:NextApiResponse) => {

    const { items } = req.body;
   
    const transformedItems = items.map((item:product) => (
        {
            price_data: {
                currency: 'aud',
                unit_amount: item.price * 100,
                product_data: {
                  name: item.title,
                  description: item.description,
                  images: [item.image],
                },
              },
              quantity: item.cartQuantity,
            }   
        
    ))


    const session = await stripe.checkout.sessions.create({

        payment_method_types:["card"],
        line_items: transformedItems,
        mode:'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/cart`,
    });


    res.status(200).json({id:session.id})


}