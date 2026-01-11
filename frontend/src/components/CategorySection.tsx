import { Product } from "../api/products";
import ProductCard from "./ProductCard";

interface CategorySectionProps {
  category: string;
  products: Product[];
}

export default function CategorySection({
  category,
  products,
}: CategorySectionProps) {
  if (products.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="mx-auto mb-6 max-w-4xl px-8 text-2xl font-bold text-gray-800 capitalize">
        {category}
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
