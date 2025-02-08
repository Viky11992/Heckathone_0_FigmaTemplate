import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  
});

// Define the expected product type
interface Product {
    name: string;
    price: number;
}

// POST handler
export async function POST(req: Request) {
    try {
        const body = await req.json(); // Parse JSON body
        const { product }: { product: Product } = body; // Define product type

        if (!product || !product.name || !product.price) {
            return NextResponse.json({ error: "Invalid product data" }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: product.name, // Product name
                        },
                        unit_amount: product.price * 100, // Convert price to cents
                    },
                    quantity: 1, // Quantity
                },
            ],
            mode: "payment",
            success_url: `${req.headers.get("origin")}/success`,
            cancel_url: `${req.headers.get("origin")}/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}

// Method Not Allowed for other HTTP methods
export async function GET() {
    return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 }
    );
}
