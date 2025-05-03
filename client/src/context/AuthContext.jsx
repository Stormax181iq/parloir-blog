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
  const [loading, setLoading] = useState(true);

  const verifyAuth = useCallback(async () => {
    setLoading(true);
    const authResult = await authService.checkAuth();
    if (authResult.user) {
      setIsAuthenticated(true);
      setUser(authResult.user);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
    setLoading(false);
  }, []);

  const login = useCallback(
    async (username, password) => {
      const err = await authService.login(username, password);
      if (err) {
        return err;
      } else {
        await verifyAuth();
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

  if (loading) {
    return <div>Loading …</div>;
  }

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
