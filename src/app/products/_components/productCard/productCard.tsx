import React from "react";
import Image from "next/image";
import productImg from "./../../../../../public/images/productImg.jpeg";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mr-1">
      <Image className="w-full" src={productImg} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
