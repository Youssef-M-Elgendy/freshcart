export default function OfBanner() {
    return (
        <section className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="relative h-64 rounded-2xl overflow-hidden bg-linear-to-r from-emerald-600 to-emerald-800 p-8 text-white">
                <div className="flex flex-col justify-center h-full">
                    <span className="bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-semibold mb-2">🔥 DEAL OF THE DAY</span>
                    <h2 className="text-3xl font-bold mb-1">Fresh Organic Fruits</h2>
                    <p className="text-white/80 text-sm mb-4">Get up to 40% off on selected organic fruits</p>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-3xl font-extrabold">40% OFF</span>
                        <span className="text-xs">Use code: <strong className="font-bold">ORGANIC40</strong></span>
                    </div>
                    <button className="bg-white text-emerald-800 px-5 py-2 rounded-full text-sm font-bold w-fit hover:bg-gray-100 transition">
                        Shop Now →
                    </button>
                </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden bg-linear-to-r from-orange-400 to-red-500 p-8 text-white">
                <div className="flex flex-col justify-center h-full">
                    <span className="bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-semibold mb-2">✨ NEW ARRIVALS</span>
                    <h2 className="text-3xl font-bold mb-1">Exotic Vegetables</h2>
                    <p className="text-white/80 text-sm mb-4">Discover our latest collection of premium vegetables</p>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-3xl font-extrabold">25% OFF</span>
                        <span className="text-xs">Use code: <strong className="font-bold">FRESH25</strong></span>
                    </div>
                    <button className="bg-white text-red-600 px-5 py-2 rounded-full text-sm font-bold w-fit hover:bg-gray-100 transition">
                        Explore Now →
                    </button>
                </div>
            </div>

        </section>
    );
}