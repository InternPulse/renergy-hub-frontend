import { Navigate } from 'react-router-dom';
import { useProductStore } from './products-listing/store/store';

interface ProtectedRouteProps {
  element: React.ReactNode;
  role?: string
}
const ProtectedRoute = ({ element, role }: ProtectedRouteProps) => {
  const { userId } = useProductStore(); // Fetch the user ID from the store
  
  // Check if user is authenticated and role matches
  if (userId && role === 'VENDOR') {
    return <>{element}</>;
  }
  if (userId && role === 'CUSTOMER') {
    return <>{element}</>;
  }
  if (userId && role === 'ADMIN') {
    return <>{element}</>;
  }

  
  return <Navigate to="/authentication/login" />;
};

export default ProtectedRoute;
