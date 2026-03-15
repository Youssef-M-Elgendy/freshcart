'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus, faSync, faStar as fasStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import Link from "next/link";
import { addProductToCart, getLoggedUserCart } from "@/features/cart/server/cart.action";
import { toast } from "react-toastify";
import { setCartInfo } from "@/features/cart/store/cart.slice";
import { useAppDispatch } from "@/store/store/store";

export default function ProductCard({ product }:any) {
    const dispatch = useAppDispatch()
    const discountPercentage = product.priceAfterDiscount
        ? Math.round(((product.price - product.priceAfterDiscount) / product.price) * 100)
        : 0;

    const handeleAddToCart = async () => {
        try {
            const response = await addProductToCart({ productId: product._id });

            if (response.status == 'success') {
                toast.success(response.message)
                const cartInfo = await getLoggedUserCart()
                dispatch(setCartInfo(cartInfo))
            }
        } catch (error) {
            toast.error("failed to add product to cart")
        }
    }

    return (
        <div className="max-w-[320px] p4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 relative hover:-translate-y-[5px]">
            <div className="relative aspect-square rounded-t-lg bg-gray-50 flex items-center justify-center mb-5 group overflow-hidden">

                {product.priceAfterDiscount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-20">
                        -{discountPercentage}%
                    </span>
                )}

                <div className="absolute top-1 right-1 flex flex-col gap-2.5 z-10">
                    <button className="p-1.5 flex items-center justify-center rounded-full text-gray-700 bg-white shadow hover:bg-gray-100 transition duration-150">
                        <FontAwesomeIcon icon={faHeart} className="text-sm" />
                    </button>
                    <button className="p-1.5 flex items-center justify-center rounded-full text-gray-700 bg-white shadow hover:bg-gray-100 transition duration-150">
                        <FontAwesomeIcon icon={faSync} className="text-sm" />
                    </button>
                    <Link
                        href={`/products/${product._id}`}
                        className="p-1.5 flex items-center justify-center rounded-full text-gray-700 bg-white shadow hover:bg-gray-100 transition duration-150"
                    >
                        <FontAwesomeIcon icon={faEye} className="text-sm" />
                    </Link>
                </div>

                <img
                    src={product.imageCover}
                    alt={product.title}
                    className="object-cover h-full"
                />
            </div>

            <div className="flex flex-col gap-1 p-3">
                <span className="text-gray-500 text-sm font-medium">
                    {product.category.name}
                </span>

                <h3 className="text-slate-900 text-md font-semibold line-clamp-1">
                    {product.title}
                </h3>

                <div className="flex items-center gap-1.5 mt-1">
                    <div className="flex items-center text-yellow-500 gap-0.5">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1;
                            let icon = farStar;
                            if (product.ratingsAverage >= starValue) {
                                icon = fasStar;
                            } else if (product.ratingsAverage >= starValue - 0.6) {
                                icon = faStarHalfAlt;
                            }
                            return <FontAwesomeIcon key={i} icon={icon} className="text-sm" />;
                        })}
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                        {product.ratingsAverage} ({product.ratingsQuantity})
                    </span>
                </div>

                <div className="flex items-end justify-between mt-3">
                    <div className="flex flex-col gap-0.5">
                        <div className="text-primary-600 text-lg font-bold flex gap-1.5 items-baseline">
                            {product.priceAfterDiscount || product.price}
                            <span className="text-sm font-semibold">EGP</span>
                        </div>

                        {product.priceAfterDiscount && (
                            <span className="text-gray-400 text-xs line-through">
                                {product.price} EGP
                            </span>
                        )}
                    </div>

                    <button
                        onClick={handeleAddToCart}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500 text-white shadow-md hover:bg-primary-700 transition duration-150 transform hover:scale-105 active:scale-95">
                        <FontAwesomeIcon icon={faPlus} className="text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}