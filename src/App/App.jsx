import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));

const LoginPage = lazy(() => import('../pages/LoginPage'));

const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const HomePage = lazy(() => import('../pages/HomePage'));

import AppNavigation from '../components/AppNavigation';
const App = () => {
  return (
    <>
      <AppNavigation />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
