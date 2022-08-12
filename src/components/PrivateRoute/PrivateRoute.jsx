import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { getToken } from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const accessToken = useSelector(getToken);
  return accessToken ? children : <Navigate to="/login" />;
};
