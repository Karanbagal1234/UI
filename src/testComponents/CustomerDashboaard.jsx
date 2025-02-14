import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "../utils/feedback";
import Loader from "../components/Loader";
import { StoreService } from "../services/store.js";
import { cartService } from "../services/cart.js";
import useRedirect from "../services/AuthChecker.js";
import ChatBot from "../components/chatbot.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { motion } from "framer-motion";
import { ShoppingCart, Scan, MessageCircle, Sun, Moon } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
const StorePage = () => {
  const { cartId, cart, setCart } = useCart();
  const { redirectTo } = useRedirect();
  const navigate = useNavigate();
  const [store, setStore] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isTotalExceeded, setIsTotalExceeded] = useState(false); // Track if total exceeds limit
  const storeId = localStorage.getItem("store");
  const { toggleChatBot, spendingLimit } = useAuth(); // Access spending limit and setLimit

  const fetchStoreDetails = async () => {
    if (!storeId) {
      notification.error("No store session found.");
      navigate("/");
      return;
    }
    setLoading(true);
    try {
      const storeResponse = await StoreService.getStoreDetails(storeId);
      const productResponse = await cartService.getProductDetails({ cartId });
      setStore(storeResponse.data.store);
      setProducts(productResponse.data);
    } catch (err) {
      setError("Failed to load store details.");
      notification.error("Failed to load store details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStoreDetails();
  }, [cartId, storeId]); // Added cartId and storeId as dependencies

  const handleIncreaseQuantity = async (productId) => {
    try {
      await cartService.addToCart({ productId, quantity: 1 });
      setCart((prevCart) =>
        prevCart.map((product) =>
          product._id === productId
            ? { ...product, Quantity: product.Quantity + 1 }
            : product
        )
      );
    } catch (err) {
      notification.error("Failed to update quantity.");
    }
  };

  const handleDecreaseQuantity = async (productId) => {
    try {
      await cartService.addToCart({ productId, quantity: -1 });
      console.log(cart);
      setCart((prevCart) =>
        prevCart.map((product) =>
          product._id === productId
            ? { ...product, Quantity: Math.max(0, product.Quantity - 1) }
            : product
        )
      );
    } catch (err) {
      notification.error("Failed to update quantity.");
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      await cartService.removeFromCart(productId);
      setCart((prevCart) =>
        prevCart.filter((product) => product._id !== productId)
      );
      notification.success("Product removed from cart.");
    } catch (err) {
      notification.error("Failed to remove product.");
    }
  };

  const handleScanProduct = () => {
    redirectTo("/scan");
    notification.info("Scanning product...");
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      notification.success("Checkout successful!");
      navigate("/recipt");
    } catch (err) {
      notification.error("Checkout failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const calculateTotal = () => {
    const subtotal = products.reduce(
      (acc, product) => acc + product.Price * product.Quantity,
      0
    );
    const gstRate = 0.07; // Assuming a GST rate of 7%
    const gst = subtotal * gstRate;
    const total = subtotal + gst;
    return { subtotal, gst, total };
  };

  const { subtotal, gst, total } = calculateTotal();

  // Alert when total exceeds or is close to the spending limit
  useEffect(() => {
    if (spendingLimit) {
      if (total > spendingLimit && !isTotalExceeded) {
        notification.warning(
          `You have exceeded your spending limit of $${spendingLimit}. Please review your cart.`
        );
        setIsTotalExceeded(true);
      } else if (total <= spendingLimit && isTotalExceeded) {
        setIsTotalExceeded(false);
      }

      // Friendly message when close to the limit
      if (total >= spendingLimit * 0.9 && total < spendingLimit) {
        notification.info(
          `You're close to your spending limit of $${spendingLimit}. Keep an eye on your cart!`
        );
      }
    }
  }, [total, spendingLimit, isTotalExceeded]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
          Error
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <Loader message="Loading store details..." />
      </div>
    );
  }
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
  };

  // Effect to check localStorage for dark mode preference on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
      setIsDarkMode(true);
    }
  }, []);

  // Effect to apply dark mode class to the root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gray-50/80 backdrop-blur-sm p-4 sm:p-6 dark:bg-gray-900">
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-colors"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Store Information */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white/20 backdrop-blur-lg rounded-xl shadow-lg p-6 dark:bg-gray-800/50"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {store?.StoreName}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {store?.StoreAddress}
            </p>
          </div>
          <div className="mt-3 sm:mt-0 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md">
            <p className="text-sm">Operating Hours: {store?.OperatingHours}</p>
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-purple-500 pb-2">
            Available Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {products.map((product) => (
              <motion.div
                key={product._id}
                whileHover={{ scale: 1.03 }}
                className="bg-white/30 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20 dark:bg-gray-700/50 dark:border-gray-600"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.Name}
                </h3>
                <div className="my-3">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Price: ${product.Price}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Stock: {product.Quantity}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecreaseQuantity(product._id)}
                      className="px-3 py-1 bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600"
                    >
                      -
                    </button>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {product.Quantity}
                    </span>
                    <button
                      onClick={() => handleIncreaseQuantity(product._id)}
                      className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveProduct(product._id)}
                  className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors dark:bg-red-600 dark:hover:bg-red-700"
                >
                  Remove
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg dark:bg-gray-800/50"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Payment Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Subtotal:</span>
              <span className="text-gray-900 dark:text-white">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>GST (7%):</span>
              <span className="text-gray-900 dark:text-white">
                ${gst.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-gray-900 dark:text-white font-bold border-t pt-3">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Action Buttons - Moved to Top Right */}
      <div className="fixed top-4 left-4 flex gap-3" style="left: 156px;">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg flex items-center dark:bg-purple-500 dark:hover:bg-purple-600"
          onClick={handleScanProduct}
        >
          <Scan className="mr-2" />
          Scan Product
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center dark:bg-blue-500 dark:hover:bg-blue-600"
          onClick={handleCheckout}
        >
          <ShoppingCart className="mr-2" />
          Checkout
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="fixed bottom-4 right-4 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg flex items-center dark:bg-teal-500 dark:hover:bg-teal-600"
          onClick={toggleChatBot}
        >
          <MessageCircle className="mr-2" />
          Chat
        </motion.button>
      </div>

      {/* Chat Button - Bottom Right */}

      <ChatBot />
    </div>
  );
};

export default StorePage;
