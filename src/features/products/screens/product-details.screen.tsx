import ProductInfo from "../components/ProDe/ProductInfo";
import { getProductById } from "../server/products.actions";

export default async function ProductDetailsScreen({
    productId,
}: {
    productId: string;
}) {

    const response = await getProductById({ id: productId });
    const product = response.data;

    return (
        <>
            <ProductInfo product={product} />
        </>
    );
}


