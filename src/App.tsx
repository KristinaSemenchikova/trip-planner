import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Main</div>,
    },
  ]);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
