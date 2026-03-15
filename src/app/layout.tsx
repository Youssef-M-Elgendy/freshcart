import { ReactNode } from "react";
import "../styles/globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Exo } from "next/font/google";
import Providers from "@/components/providers/Providers";
import { verifyToken } from "@/features/auth/server/auth.actions";
import { getLoggedUserCart } from "@/features/cart/server/cart.action";
import favicon from '../assets/img/mini-logo.png'
config.autoAddCss = false;

const exo = Exo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

let cartState: CartState = {
    cartId: null,
    numOfCartItems: 0,
    totalCartPrice: 0,
    products: [],
    error: null,
    isLoading: false,
}

export default async function Layout({ children }: { children: ReactNode }) {
    const authValues = await verifyToken();

    if (authValues.isAuthenticated) {
        try {
            const cartResponse = await getLoggedUserCart();
            cartState = {
                cartId: cartResponse.cartId,
                totalCartPrice: cartResponse.data.totalCartPrice,
                products: cartResponse.data.products,
                numOfCartItems: cartResponse.numOfCartItems,
                isLoading: false,
                error: null
            }
        } catch (error) {

        }
    }

    return (
        <html lang="en">

            <body className={`${exo.className} font-medium`}>
                <head>
                    <link rel="icon" href={favicon.src} />
                    <title>Freshcart</title>
                </head>
                <Providers preloadedState={{ auth: authValues, cart: cartState }}>
                    <Navbar />
                    <div className="lg:pt-46 pt-20">
                        {children}
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}