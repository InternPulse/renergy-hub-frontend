
import { Link } from 'react-router-dom';

const CartSummary = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-lg font-semibold">Cart Summary</h1>
      <Link to="/wishlist" className="text-xs text-green-600 hover:underline">
        <span>View Wishlist</span>
      </Link>
    </div>
  );
};

export default CartSummary;
