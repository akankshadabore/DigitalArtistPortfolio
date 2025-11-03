import { FaSquarePlus } from "react-icons/fa6";
import { FiMinusSquare} from "react-icons/fi";
import { TbXboxXFilled } from "react-icons/tb";


export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-linear-to-b from-pink-100 via-pink-50 to-white shadow-2xl transform transition-transform duration-500 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-pink-200">
        <h2 className="text-xl font-bold text-pink-600">Your Cart</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-pink-600">
          <TbXboxXFilled size={22} />
        </button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-150px)]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            Your cart is empty 🛒
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 mb-6 border-b border-pink-100 pb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg shadow-sm"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm">
                  {item.title}
                </h3>
                <p className="text-pink-600 font-medium text-sm">
                  ₹{item.price}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="hover:bg-pink-300 text-pink-700 px-2 py-1 rounded-full"
                  >
                    <FiMinusSquare size={14} />
                  </button>
                  <span className="text-gray-800 font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onIncrease(item.id)}
                    className="hover:bg-pink-300 text-pink-700 px-2 py-1 rounded-full"
                  >
                    <FaSquarePlus size={14} />
                  </button>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full border-t border-pink-200 bg-white p-4">
        <div className="flex justify-between text-gray-800 font-semibold mb-4">
          <span>Total:</span>
          <span className="text-pink-600">₹{totalPrice}</span>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full transition-all"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
