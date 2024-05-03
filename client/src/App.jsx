import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import TeaPage from './components/pages/TeaPage';
import AdminPage from './components/pages/AdminPage';
import UserPage from './components/pages/UserPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Root from './components/Root';
import axiosInstance, { setAccessToken } from './axiosInstance';
import ProtectedRoute from './components/hoc/ProtectedRoute';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    axiosInstance('/tokens/refresh').then((res) => {
      const { user: newUser, accessToken } = res.data;
      setUser(newUser);
      setAccessToken(accessToken);
    }).catch(() => {
      setUser(null);
    });
  }, []);

  const loginHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const res = await axiosInstance.post('/auth/login', formData);
    const { data } = res;
    setUser(data.user);
    setAccessToken(data.accessToken);
  };

  const signupHandler = async (formData) => {
    const res = await axiosInstance.post('/auth/signup', formData);
    const { data } = res;
    setUser(data.user);
    setAccessToken(data.accessToken);
  };

  const logoutHandler = async () => {
    await axiosInstance('/auth/logout');
    setUser(null);
    setAccessToken('');
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: '/',
          element: <MainPage user={user} />,
        },
        {
          element: <ProtectedRoute isAllowed={!user} />,
          children: [
            {
              path: '/login',
              element: <LoginPage loginHandler={loginHandler} />,
            },
            {
              path: '/signup',
              element: <SignupPage signupHandler={signupHandler} />,
            },
          ],
        },
        {
          path: '/teas/:id',
          element: <TeaPage user={user} />,
        },
        {
          path: '/adminpage',
          element: <AdminPage user={user} />,
        },
        {
          path: '/userpage',
          element: <UserPage user={user} />,
        },

      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
