import { Minus, Plus } from "lucide-react";

import { CartContext } from "../context/cart/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const subTotal = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="min-h-auto bg-gray-50 p-4  md:p-8">
      <div className="max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600 uppercase tracking-wide">
                <div className="col-span-6">Product</div>
                <div className="col-span-6 text-right">Total</div>
              </div>
            </div>

            <div className="space-y-8">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-12 gap-4 items-center"
                >
                  {/* Product Info */}
                  <div className="col-span-6 flex items-center space-x-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium text-sm md:text-base">
                        {product.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm md:text-base">
                        ${product.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() =>
                            dispatch({ type: "Decrement", payload: product.id })
                          }
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch({ type: "Increment", payload: product.id })
                          }
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          dispatch({ type: "Remove", payload: product.id })
                        }
                        className="text-green-600 hover:text-green-800 text-sm mt-2 underline cursor-pointer"
                      >
                        Remove item
                      </button>
                    </div>
                  </div>

                  <div className="col-span-6 text-right">
                    <span className="text-blue-600 font-medium text-lg">
                      ${product.price * product.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h2 className="text-gray-600 font-medium text-sm uppercase tracking-wide mb-6">
              Cart Totals
            </h2>

            {/* Subtotal */}
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-lg">${subTotal}</span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center py-4 mb-6">
              <span className="text-gray-900 font-medium">Total</span>
              <span className="font-bold text-xl text-green-600">
                ${subTotal}
              </span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 text-base font-medium">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
