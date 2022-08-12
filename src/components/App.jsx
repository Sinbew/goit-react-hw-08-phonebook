// import { Section } from './Section/Section';
// import { Form } from './Form/Form';
// import { Filter } from './Filter/Filter';
// import { ContactsList } from './ContactsList/ContactsList';

import { Registration } from 'Pages/Registration';
import { Navigation } from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'Pages/Login';
import { Contacts } from 'Pages/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { getToken } from 'redux/auth/auth-selectors';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(getToken);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, token]);

  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
