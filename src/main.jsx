import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './Components/Home';
import EditProfile from './Profile/EditProfile';
import ViewProfile from './Profile/ViewProfile';
import Contract from './Components/Contract';
import Gallery from './Components/Gallery';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/Gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/EditProfile",
        element: <EditProfile></EditProfile>,
      },
      {
        path: "/ViewProfile",
        element: <ViewProfile></ViewProfile>,
      },
      {
        path: "/Contract",
        element: <Contract></Contract>,
      },
      {
        path: "/ViewProfile",
        element: <ViewProfile></ViewProfile>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
