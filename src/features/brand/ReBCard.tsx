import BrandCard from "./BrandCard";
import { getAllBrands } from "./brands.actions";

export default async function BrandsSection() {
  const response = await getAllBrands();

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Brands</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {response.data.map((brand: any) => (
            <BrandCard
              key={brand._id}
              id={brand._id}
              name={brand.name}
              logoUrl={brand.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}