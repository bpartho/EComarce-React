import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { dispatch } = useContext(CartContext);

  const handleAdd = (product) => {
    dispatch({ type: "Add", payload: { ...product, quantity: 1 } });
    toast.success("Product Added Successfully");
  };
  return (
    <div>
      <div className="max-w-[300px] my-2 shadow-md rounded-lg p-6 flex flex-col gap-2 items-center">
        <Link key={product.id} to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-9/12 h-auto"
          />
        </Link>
        <div>
          <Link key={product.id} to={`/product/${product.id}`}>
            <h3 className="text-xl font-bold text-primary tracking-wider mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-primary font-light">
              {product.description}
            </p>
            <p className="text-lg font-bold text-primary my-2">
              $ {product.price}
            </p>
          </Link>
          <button
            onClick={() => handleAdd(product)}
            className="text-primary py-2 px-8 bg-secondary rounded-full cursor-pointer flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ShoppingBag size={18} /> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
