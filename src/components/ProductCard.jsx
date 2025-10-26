import { Check, ShoppingCart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import useCart from '../hooks/useCart';

export default function ProductCard({ product, categoryId }) {
  const { authInfo } = useAuth();
  const { addToCart } = useCart();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Check if user is authenticated
    if (!authInfo?.access_token) {
      return navigate(`/login?redirect=${pathname}`);
    }

    // Prepare cart item with product data
    const cartProduct = {
      id: product._id,
      categoryId: categoryId,
      name: product.name,
      price: product.price,
      status: product.status,
      productDetails: product.product_details,
      subscriptions: product.subscription_periods,
    };

    // Add to cart
    addToCart(cartProduct);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 uppercase">{product.name}</h3>
          <p className="text-2xl font-bold text-red-600 mt-2">${product.price}</p>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
          {product.status}
        </span>
      </div>

      {/* Product Details */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
        <ul className="space-y-1">
          {product.product_details.slice(0, 4).map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
              <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
          {product.product_details.length > 4 && (
            <li className="text-sm text-gray-500 ml-6">
              +{product.product_details.length - 4} more features
            </li>
          )}
        </ul>
      </div>

      {/* Subscription Periods */}
      {product.subscription_periods && product.subscription_periods.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Subscription Plans:</h4>
          <div className="flex flex-wrap gap-2">
            {product.subscription_periods.map((period) => (
              <span
                key={period._id}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {period.duration} month{period.duration > 1 ? 's' : ''} 
                {period.discount_type === 'percent' 
                  ? ` - ${period.amount}% off` 
                  : ` - $${period.amount} off`}
              </span>
            ))}
          </div>
        </div>
      )}

      <button 
        onClick={handleAddToCart} 
        className="w-full py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" />
        Add to Cart
      </button>
    </div>
  );
}