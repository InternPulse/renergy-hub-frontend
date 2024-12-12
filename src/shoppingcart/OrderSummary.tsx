
import { Link } from 'react-router-dom';

const OrderSummary = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <Link to="#" className="font-poppins text-sm font-semibold hover:text-green-600">
          Order Summary
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
