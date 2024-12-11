import { Link } from 'react-router-dom';

const Wishlist = () => {
  return (
    <div className='bg-reba'>
      <div className="border-b-4 border-b-custom-green">
        <div className="flex justify-between items-center p-4">
          <nav>
            <Link to="/wishlist" className="font-bold text-lg hover:text-green-600">View Wishlist</Link>
          </nav>
          <nav>
            <Link to="/" className="text-xs underline hover:text-green-600">
              Cart Summary
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
