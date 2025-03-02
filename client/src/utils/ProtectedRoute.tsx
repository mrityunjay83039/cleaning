import { useAppSelector } from "../redux/hooks";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const user = useAppSelector((state) => state.auth.email);

  if (!user) {
    return <Navigate to="/adminlogin" />;
  }
  return children;
};

export default ProtectedRoutes;
