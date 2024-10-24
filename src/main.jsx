import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import EditProfile from "./Profile/EditProfile";
import ViewProfile from "./Profile/ViewProfile";
import Contract from "./Components/Contract";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/Users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
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
      {
        path: "/Users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
