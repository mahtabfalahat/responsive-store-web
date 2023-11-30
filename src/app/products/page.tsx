import { ProductSummary } from "@/types/product-summary.interface";
import { ProductList } from "./_components/productList/productList";

async function getAllProducts(): Promise<ProductSummary[]> {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 24 * 60 * 60 },
  });
  const data = await res.json();
  return data.products;
}

export default async function Products() {
  const allProducts = await getAllProducts();
  console.log(allProducts[0]);
  return (
    <div className="container mr-auto text-center w-full">
      <div className="text-5xl flex justify-center items-center w-full text-red-800 mr-2 p-6 divide-x-0 ">
        <h1>Products</h1>
        <hr className="my-12 h-0.5 border-t-0 bg-gray opacity-100 dark:opacity-50" />
      </div>
      <ProductList products={allProducts} />
    </div>
  );
}
