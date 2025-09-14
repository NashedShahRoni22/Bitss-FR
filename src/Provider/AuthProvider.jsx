import { useCallback, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";

export default function AuthProvider({ children }) {
  const [authInfo, setAuthInfo] = useState(null);

  const addAuthInfo = useCallback((data) => {
    setAuthInfo(data);
    localStorage.setItem("authInfo", JSON.stringify(data));
  }, []);

  useEffect(() => {
    try {
      const localAuthInfo = localStorage.getItem("authInfo");
      if (localAuthInfo) {
        setAuthInfo(JSON.parse(localAuthInfo));
      }
    } catch (error) {
      console.error("Error parsing stored auth info:", error);
      localStorage.removeItem("authInfo"); // Clean up corrupted data
    }
  }, []);

  const value = {
    authInfo,
    addAuthInfo,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
