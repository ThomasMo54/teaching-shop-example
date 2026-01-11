import { Product } from "../api/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="aspect-square w-full object-cover"
      />
      <p className="p-4">
        <span className="block text-lg font-semibold text-gray-800">
          {product.name}
        </span>
        <span className="block text-gray-600">{product.description}</span>
        <span className="block font-bold text-gray-800">
          ${product.price.toFixed(2)}
        </span>
      </p>
    </div>
  );
}
