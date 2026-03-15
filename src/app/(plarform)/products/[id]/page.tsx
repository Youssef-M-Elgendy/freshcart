import ProductDetailsScreen from "@/features/products/screens/product-details.screen";

type ProfuctDetailsPageProps ={
  params: Promise<{id:string}>
}

export default async function ProfuctDetailsPage({params}:ProfuctDetailsPageProps) {

const {id} = await params;

  return <>
    <ProductDetailsScreen productId={id}/>
  </>
}