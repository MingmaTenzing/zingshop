import { product } from "..";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req:any, res:any ) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item: product) => ({
    description: item.description,

    quantity: item.cartQuantity,
    price_data: {
      currency: "USD",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/cancel`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item: product) => item.image)),
    },
  });

  res.status(200).json({ id: session.id})
};
