import { useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const { authInfo, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!authInfo) {
    return navigate(
      `/login?redirect=${encodeURIComponent(location.pathname + location.search)}`,
    );
  }

  return children;
}
