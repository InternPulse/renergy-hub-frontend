import { Navigate } from 'react-router-dom';
import { useProductStore } from './products-listing/store/store';

interface ProtectedRouteProps {
  element: React.ReactNode;
  role?: string
}
const ProtectedRoute = ({ element, role }: ProtectedRouteProps) => {

  const { userId ,userType} = useProductStore(); 
  
  // Check if user is authenticated and role matches
  if (userId && userType === role) {
    return <>{element} </>;
  }
  return <Navigate to="/authentication/login" />;
};

export default ProtectedRoute;
