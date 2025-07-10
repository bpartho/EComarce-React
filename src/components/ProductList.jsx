import { useContext, useState } from "react";
import { ProductContext } from "../context/product/ProductContext";
import Product from "./Product";
import Filter from "./Filter";

export default function ProductList() {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");

  const { products } = useContext(ProductContext);

  const filterProduct = products.filter(
    (product) =>
      product.name?.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedProduct = filterProduct.sort((a, b) => {
    if (sortOption === "low-to-high") {
      return a.price - b.price;
    } else if (sortOption === "high-to-low") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-5xl text-primary font-semibold text-center py-6">
        Our Products
      </h2>
      <Filter
        searchText={searchText}
        setSearchText={setSearchText}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
        {sortedProduct.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
