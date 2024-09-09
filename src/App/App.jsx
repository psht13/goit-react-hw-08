import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));

const LoginPage = lazy(() => import('../pages/LoginPage'));

const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const HomePage = lazy(() => import('../pages/HomePage'));

import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { selectAuthIsRefreshing } from '../redux/auth/selectors';
import Layout from '../components/Layout';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { PrivateRoute } from '../components/PrivateRoute';
const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
