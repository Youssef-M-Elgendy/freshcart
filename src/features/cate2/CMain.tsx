import { getAllCategories } from "@/features/categorise/server/categorise.actions"

import Image from "next/image";
import Link from "next/link";

export default async function CMain() {
    const response = await getAllCategories();

    return (
        <>
            <section id="categories" className="py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {response?.data.map((category) => (
                            <Link
                                href={`/categories/${category._id}`}
                                key={category._id}
                                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
                            >
                                <div className="h-50 w-50 overflow-hidden bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-medium">{category.name}</h3>
                            </Link>))}
                    </div>
                </div>
            </section >

        </>
    )
}