import React from "react";
import Image from "next/image";
import { ProductSummary } from "@/types/product-summary.interface";
import rateImg from "./../../../../../public/images/rate.webp";

export type ProductCardProps = ProductSummary & {};

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  rating,
  brand,
  images,
  thumbnail,
}) => {
  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer transition duration-300 transform hover:shadow-xl hover:scale-105 m-auto"
      style={{ width: "300px", height: "400px" }}
    >
      <div className="relative w-full h-60">
        <Image src={thumbnail} alt={title} fill objectFit="fill" />
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-200 font-bold m-1 text-left">{title}</p>
        <p className="text-xs  dark:text-white text-left text-gray-500 truncate w-full">{description}</p>
        <div className="flex items-center mb-2">
          <Image
            src={rateImg}
            alt={title}
            className="h-5 w-5 text-yellow-400 p-1"
          />
          <p className="text-gray-700 text-base p-1">{rating}</p>
        </div>
        <p className="text-gray-100 text-base mb-2 text-left text-sm">Brand : {brand}</p>
        <p className="text-gray-700 font-bold m-1 text-center">${price}</p>
      </div>
    </div>
  );
};
