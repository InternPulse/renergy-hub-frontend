import { Link } from 'react-router-dom';

const Shopping = () => {
  return (
    <div>
      <div className="border-b-2 border-b-custom-green">
        <div className="flex justify-between items-center p-4">
          <nav>
            <Link to="/wishlist" className="font-bold text-lg hover:text-green-600">Wishlist</Link>
          </nav>
          <nav>
            <Link to="/" className="text-xs underline hover:text-green-600">
              Continue shopping
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
