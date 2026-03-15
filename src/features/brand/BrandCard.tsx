import Link from "next/link";

export default function BrandCard({ id, name, logoUrl }: { id: string, name: string, logoUrl: string }) {
    return (
        <Link href={`/brands/${id}`}>
            <div className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
                <div className="w-full h-32 bg-gray-50 rounded-xl flex items-center justify-center p-4 overflow-hidden">
                    <img
                        src={logoUrl}
                        alt={name}
                        className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                <h3 className="text-center mt-4 text-lg font-medium text-gray-800">
                    {name}
                </h3>
            </div>
        </Link>
    );
}