import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faShieldAlt, faTruck, faTag, faShoppingBag, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function CartSummary({ totalCartPrice, numOfCartItems }: { totalCartPrice: number, numOfCartItems: number }) {

    const subtotal = totalCartPrice;
    const shipping = subtotal > 500 ? 0 : 100;
    const total = Math.round(shipping + subtotal);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm sticky top-24">
            <div className="bg-linear-to-r from-primary-600 to-primary-700 p-4 rounded-t-2xl">
                <h2 className="text-lg text-white font-semibold flex items-center gap-2">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    Order Summary
                </h2>
                <p className="text-primary-100 text-sm mt-1">
                    You have {numOfCartItems} {numOfCartItems === 1 ? "item" : "items"} in your cart
                </p>
            </div>

            <div className="p-6 space-y-5">
                {shipping > 0 && (
                    <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <FontAwesomeIcon icon={faTruck} className="text-orange-500" />
                            <span className="text-sm font-medium text-gray-700">
                                Add {500 - totalCartPrice} EGP for free shipping
                            </span>
                        </div>
                        <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full"
                                style={{ width: `${(totalCartPrice / 500) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                )}

                {shipping == 0 && <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <FontAwesomeIcon icon={faTruck} className="text-green-600" />
                    </div>
                    <div>
                        <p className="font-semibold text-green-700">Free Shipping!</p>
                        <p className="text-sm text-green-600">
                            You qualify for free delivery
                        </p>
                    </div>
                </div>}

                <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium text-gray-900">{totalCartPrice} EGP</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        {shipping === 0 ? (
                            <span className="font-medium text-green-600">FREE</span>
                        ) : (
                            <span className="font-medium text-gray-900">{shipping.toLocaleString()} EGP</span>
                        )}
                    </div>

                    <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                        <div className="flex justify-between items-baseline">
                            <span className="text-gray-900 font-semibold">Total</span>
                            <div className="text-right">
                                <span className="text-2xl font-bold text-gray-900">{totalCartPrice}</span>
                                <span className="text-sm text-gray-500 ml-1">EGP</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
                    <FontAwesomeIcon icon={faTag} />
                    <span className="text-sm font-medium">Apply Promo Code</span>
                </button>

                <Link href="/checkout" className="block w-full bg-linear-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl font-bold text-center hover:shadow-lg transition-all">
                    <FontAwesomeIcon icon={faLock} className="mr-2" />
                    Secure Checkout
                </Link>

                <div className="flex items-center justify-center gap-4 py-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
                        <span>Secure Payment</span>
                    </div>
                    <div className="w-px h-4 bg-gray-200"></div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon icon={faTruck} className="text-blue-500" />
                        <span>Fast Delivery</span>
                    </div>
                </div>

                <Link href="/" className="block text-center text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
}