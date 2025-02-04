import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import EditProfile from "./Profile/EditProfile";
import ViewProfile from "./Profile/ViewProfile";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails/UserDetails";
import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/PostDetails/PostDetails";

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
        path: "/Users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
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
        path: "/ViewProfile",
        element: <ViewProfile></ViewProfile>,
      },
      {
        path: "/Posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/PostDetails/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
