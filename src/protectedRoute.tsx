import { Navigate } from 'react-router-dom';
import { useProductStore } from './products-listing/store/store';

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { userId } = useProductStore(); // Fetch the user ID from the store

  // If user is authenticated, render the element, otherwise navigate to login
  return userId ? <>{element}</> : <Navigate to="/authentication/login" />;
};

export default ProtectedRoute;
