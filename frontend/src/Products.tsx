import CategorySection from "./components/CategorySection";
import { useProducts } from "./contexts/ProductsContext";

const CATEGORIES = ["bavoirs", "doudous", "couvertures"];

export default function Products() {
  const { products } = useProducts();

  return (
    <div>
      {CATEGORIES.map((category) => (
        <CategorySection
          key={category}
          category={category}
          products={products.filter((product) => product.category === category)}
        />
      ))}
    </div>
  );
}
