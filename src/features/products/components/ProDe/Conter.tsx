"use client";
import { useState } from "react";

export default function QuantitySelector({
    available,
    onChange,
}: {
    available: number;
    onChange: (q: number) => void;
}) {

    const [qty, setQty] = useState(1);

    function increase() {
        const newQty = Math.min(available, qty + 1);
        setQty(newQty);
        onChange(newQty);
    }

    function decrease() {
        const newQty = Math.max(1, qty - 1);
        setQty(newQty);
        onChange(newQty);
    }

    return (
        <div className="flex items-center gap-4 mb-6">
            <div className="flex border border-gray-100  rounded-lg overflow-hidden">

                <button className="px-4 py-2 hover:bg-gray-100" onClick={decrease}>
                    -
                </button>

                <span className="px-4 py-2">
                    {qty}
                </span>

                <button className="px-4 py-2 hover:bg-gray-100" onClick={increase}>
                    +
                </button>

            </div>

            <span className="text-gray-500 text-sm">
                {available} available
            </span>
        </div>
    );
}