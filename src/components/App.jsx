// import { Section } from './Section/Section';
// import { Form } from './Form/Form';
// import { Filter } from './Filter/Filter';
// import { ContactsList } from './ContactsList/ContactsList';

import { Registration } from 'pages/register';
import { Navigation } from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/login';
import { Contacts } from 'pages/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { getIsLogged, getToken } from 'redux/auth/auth-selectors';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

import { tokenAuth } from 'redux/auth/auth-operations';
export const App = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector(getIsLogged);
  const token = useSelector(getToken);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, token]);

  // useEffect(() => {
  //   if (token) {
  //     tokenAuth.set();
  //   }
  // }, [token]);
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Registration />} />
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
