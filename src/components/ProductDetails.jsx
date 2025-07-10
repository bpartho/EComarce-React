import { Minus, Plus, Star } from "lucide-react";
import { useContext, useState } from "react";
import { ProductContext } from "../context/product/ProductContext";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cart/CartContext";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);

  const { id } = useParams();
  const product = products.find(
    (product) => product.id.toLocaleString() === id
  );

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity(1);
    }
  };

  const handleAdd = () => {
    dispatch({ type: "Add", payload: { ...product, quantity: quantity } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-green-600">
                ${product.price}
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                20% OFF
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={handleDecrement}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-gray-600">
                  Total: ${product.price * quantity}
                </span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handleAdd}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold cursor-pointer"
                size="lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
