import { Order } from '../types/orders.types';

export default function OrderCard({ orderInfo }: { orderInfo: Order }) {

    function getStatus() {
        if (orderInfo.isDelivered) {
            return {
                label: "Delivered",
                colors: {
                    background: "bg-green-100",
                    text: "text-green-600",
                    border: 'border-green-300'
                }
            }
        }

        if (orderInfo.isPaid) {
            return {
                label: "On the way",
                colors: {
                    background: "bg-blue-100",
                    text: "text-blue-600",
                    border: 'border-blue-300'
                }
            }
        }

        return {
            label: "Processing",
            colors: {
                background: "bg-orange-100",
                text: "text-orange-600",
                border: 'border-orange-300'
            }
        }

    }

    const status = getStatus()

    return (
        <div>
            <div className="flex items-center gap-4 p-4 border rounded-b-none border-gray-200 rounded-2xl shadow-sm">
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                    {
                        orderInfo.cartItems[0] && (
                            <img src={orderInfo.cartItems[0].product.imageCover} alt="Product" className="w-full h-full object-cover" />
                        )
                    }
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm ${status.colors.text} ${status.colors.background} px-1.5 py-0.5 rounded `}>
                            <i className="fa-solid fa-clock"></i> {status.label}
                        </span>
                    </div>

                    <h3 className="font-bold text-lg text-gray-800"># {orderInfo.id}</h3>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-1">
                        <span><i className="fa-regular fa-calendar-days mr-1"></i> {new Date(orderInfo.createdAt).toLocaleDateString()}</span>
                        <span><i className="fa-solid fa-box mr-1"></i> {orderInfo.cartItems.reduce((acc, el) => acc += el.count, 0)} items</span>
                        <span><i className="fa-solid fa-location-dot mr-1"></i> {orderInfo.shippingAddress.city}</span>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                        <span className="font-bold text-xl text-gray-900">{orderInfo.totalOrderPrice} <span className="text-sm text-gray-500">EGP</span></span>
                        {/* <button className="flex items-center gap-2 text-gray-700 bg-gray-50 hover:bg-gray-100 px-4 py-1.5 rounded-lg border border-gray-200 transition">
                        Details <i className="fa-solid fa-chevron-down text-xs"></i>
                    </button> */}

                    </div>

                </div>

            </div>
            <div className="space-y-3 border border-gray-300 border-t-0">
                {orderInfo.cartItems.map((item) => (
                    <div key={item._id} className="flex items-center gap-4 p-4 bg-white rounded-xl ">
                        <div className="w-16 h-16">
                            <img
                                src={item.product.imageCover}
                                alt={item.product.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">{item.product.title}</p>
                            <p className="text-sm text-gray-500 mt-1">
                                <span className="font-medium text-gray-700">{item.count}</span> x {item.price.toLocaleString()} EGP
                            </p>
                        </div>
                        <div className="text-right shrink-0">
                            <p className="text-lg font-bold text-gray-900">
                                {(item.count * item.price).toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-400">EGP</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};