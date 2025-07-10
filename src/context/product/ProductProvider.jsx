import { useState } from "react";
import { ProductContext } from "./ProductContext";
import { Products } from "../../data/data";

export default function ProductProvider({ children }) {
  const [products] = useState(Products);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
