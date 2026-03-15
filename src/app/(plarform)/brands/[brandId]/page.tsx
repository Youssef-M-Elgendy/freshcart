import ProductCard from "@/features/products/components/ProuductCard";
import { getProductsByBrand } from "@/features/brand/brands.actions";

interface Props {
    params: { brandId: string }
}

export default async function BrandProductsPage({ params }: Props) {
    const brandId = params.brandId;

    const response = await getProductsByBrand(brandId);

    return (
        <section className="py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Brand Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {response.data.map((product: any) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}