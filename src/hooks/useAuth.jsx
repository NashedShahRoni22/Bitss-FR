import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

export default function useAuth() {
  const authInfo = useContext(AuthContext);
  return authInfo;
}
