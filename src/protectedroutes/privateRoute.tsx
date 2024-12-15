import { useProductStore } from "../products-listing/store/store";
import { Navigate } from "react-router-dom";

interface ProductProps {
  children: React.ReactNode;
  role?: string;
}

function PrivateRoute({ children }: ProductProps) {
  const { userId } = useProductStore();
  if (!userId) {
    return <Navigate to={`/authentication/login`} />;
  }
  return children;
}

export default PrivateRoute;
