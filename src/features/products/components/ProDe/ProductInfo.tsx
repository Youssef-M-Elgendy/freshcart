"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar, faHeart } from "@fortawesome/free-regular-svg-icons";
import QuantitySelector from "./Conter";

export default function ProductInfo({ product }: { product: any }) {

    const [qty, setQty] = useState(1);
    const [mainImage, setMainImage] = useState(product.imageCover);

    const totalPrice = product.price * qty;

    return (
        <section className="container mx-auto py-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                <div className="flex gap-4">

                    <div className="flex md:flex-col gap-3 overflow-auto max-h-100">
                        {[product.imageCover, ...product.images].map((img: string, i: number) => (
                            <img
                                key={i}
                                src={img}
                                onClick={() => setMainImage(img)}
                                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                            />
                        ))}
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-center flex-1">
                        <img src={mainImage} className="max-h-100 object-contain" />
                    </div>

                </div>

                <div>
                    <div className="flex gap-2 mb-2">
                        <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded font-medium">
                            {product.category.name}
                        </span>

                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-medium">
                            {product.brand.name}
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold text-slate-900">
                        {product.title}
                    </h1>

                    <div className="flex items-center gap-2 my-3">
                        <div className="text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon
                                    key={i}
                                    icon={i < Math.floor(product.ratingsAverage) ? fasStar : farStar}
                                />
                            ))}
                        </div>

                        <span className="text-gray-500 font-medium">
                            {product.ratingsAverage} ({product.ratingsQuantity} reviews)
                        </span>
                    </div>

                    <div className="text-3xl font-bold text-slate-950 my-6">
                        {product.price} EGP
                    </div>

                    <p className="text-sm text-gray-600 mb-6">
                        Material: Polyester Blend | Color: Multicolour | Department: Women
                    </p>

                    <QuantitySelector
                        available={product.quantity}
                        onChange={setQty}
                    />

                    <div className="bg-gray-50 p-4 rounded-lg mb-6 flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Total Price:</span>
                        <span className="text-xl font-bold text-primary-600">
                            {totalPrice} EGP
                        </span>
                    </div>

                    <div className="flex gap-4 mb-4">
                        <button className="flex-3 bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition">
                            Add to Cart
                        </button>

                        <button className="flex-3 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition">
                            Buy Now
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex-1 border py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                            <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
                        </button>

                        <button className="border px-4 py-3 rounded-lg hover:bg-gray-50">
                            <FontAwesomeIcon icon={faShareAlt} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}