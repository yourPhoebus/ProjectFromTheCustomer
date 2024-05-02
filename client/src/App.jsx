import {
  createBrowserRouter, RouterProvider, redirect, Link, useNavigate,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axiosInstance, { setAccessToken } from './axiosInstance';
import MainPage from './components/pages/MainPage';
import TeaPage from "./components/pages/TeaPage";
import AdminPage from "./components/pages/AdminPage";
// import UserPage from "./components/pages/UserPage";
import Root from './components/Root';
import UserPage from './components/pages/UserPage';
import AdminPage from './components/pages/AdminPage';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
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
          element: <MainPage />,
        },
        {
          path: '/adminpage',
          element: <AdminPage user={user} />,
        },
        {
          path: '/userpage',
          element: <UserPage user={user} />,
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
        // {
        //   path: '/login',
        //   element: <LoginPage loginHandler={loginHandler} />,
        // },
        // {
        //   path: '/signup',
        //   element: <SignupPage signupHandler={signupHandler} />,
        // },
        {
          path: "/teas/:id",
          element: <TeaPage />,
        },
        {
          path: "/adminpage",
          element: <AdminPage />,
        },
        // {
        //   path: "/user",
        //   element: <UserPage />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
