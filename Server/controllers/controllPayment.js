import Stripe from "stripe";
const stripe = new Stripe(process.env.Stripe_Private_Api_Key);
const client_domain = process.env.CLIENT_DOMAIN;


export const controllPayment= async(req,res,next)=>{
   try {
        const { products } = req.body;

        console.log("products=====",products);
        
        
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: product?.productId?.productName,
                    images: [product?.productId?.productId?.[0]],
                },
                unit_amount: Math.round(product?.price * 100),
            },
            quantity:product?.quantity ,
        }));
        
        console.log("lineItems=====",lineItems);
        

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${client_domain}/user/payment/success`,
            cancel_url: `${client_domain}/user/payment/cancel`,
        });

        res.json({ success: true, sessionId: session.id });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error-payment failed" });
    }
};
