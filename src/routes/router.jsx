import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateGroup from "../pages/CreateGroup";
import PrivateRoute from "../provider/PrivateRoute";
import AllGroups from "../pages/AllGroups";
import Loading from "../pages/Loading";
import MyGroup from "../pages/MyGroup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/groups",
        loader: () =>
          fetch("https://assignment-10-server-side-blue.vercel.app/groups"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: AllGroups,
      },
      {
        path: "/createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup></CreateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "/myGroups",
        loader: () =>
          fetch("https://assignment-10-server-side-blue.vercel.app/groups"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <MyGroup></MyGroup>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
