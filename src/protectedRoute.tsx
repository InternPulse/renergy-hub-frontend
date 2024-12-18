import { Route, Navigate } from 'react-router-dom';
interface ProtectedRouteProps {
    element: React.ReactNode;
    
  }
  
const ProtectedRoute = ({ element, ...rest }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Or use a context or state
  
  return (
    <Route
      {...rest}  // Spread all props like path, exact, etc.
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
