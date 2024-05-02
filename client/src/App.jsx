import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
// import TeaPage from "./components/pages/TeaPage";
// import AdminPage from "./components/pages/AdminPage";
// import UserPage from "./components/pages/UserPage";
import Root from './components/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        // {
        //   path: "/teas/:id",
        //   element: <TeaPage />,
        // },
        // {
        //   path: "/adminpage",
        //   element: <AdminPage />,
        // },
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
