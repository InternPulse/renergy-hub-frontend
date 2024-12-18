import { Navigate } from 'react-router-dom';
import { useProductStore } from './products-listing/store/store';

interface ProtectedRouteProps {
  element: React.ReactNode;
  role?: string
}
const ProtectedRoute = ({ element, role }: ProtectedRouteProps) => {
  const { userId } = useProductStore(); // Fetch the user ID from the store
  
  // Check if user is authenticated and role matches one of the valid roles
  if (userId && (role === 'VENDOR' || role === 'CUSTOMER' || role === 'ADMIN')) {
    return <>{element}</>;
  }
  
  // If not authenticated or role doesn't match, redirect to login
  return <Navigate to="/authentication/login" />;
};

export default ProtectedRoute;
