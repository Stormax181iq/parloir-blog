import {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import authService from "../api/authService";

import PropTypes from "prop-types";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const verifyAuth = useCallback(async () => {
    const authResult = await authService.checkAuth();
    if (authResult.user) {
      setIsAuthenticated(true);
      setUser(authResult.user);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  const login = useCallback(
    async (username, password) => {
      const response = await authService.login(username, password);
      if (response?.error) {
        return false;
      } else {
        await verifyAuth();
        return true;
      }
    },
    [verifyAuth],
  );

  const logout = useCallback(async () => {
    await authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const providedValues = useMemo(
    () => ({
      isAuthenticated,
      user,
      login,
      logout,
    }),
    [isAuthenticated, user, login, logout],
  );

  useEffect(() => {
    verifyAuth();
  }, [verifyAuth]);

  return (
    <AuthContext.Provider value={providedValues}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export { AuthProvider, AuthContext };
