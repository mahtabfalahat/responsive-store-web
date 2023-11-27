import React from "react";
import ProductCard from "../productCard/productCard";
``;
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image: "/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    image: "/product2.jpg",
  },
  {
    id: 3,
    name: "Product 2",
    price: 20,
    image: "/product2.jpg",
  },
  {
    id: 4,
    name: "Product 2",
    price: 20,
    image: "/product2.jpg",
  },
  {
    id: 5,
    name: "Product 2",
    price: 20,
    image: "/product2.jpg",
  },
  {
    id: 6,
    name: "Product 2",
    price: 20,
    image: "/product2.jpg",
  },
  {
    id: 7,
    name: "Product 2",
    price: 20,
    image: "/product2.jpg",
  },
  {
    id: 8,
    name: "Product 2",
    price: 20,
    image: "/product2.jpg",
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mr-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
