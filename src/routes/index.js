/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";

// import AddUser from "../pages/admin/addUser/AddUser";
// import UserList from "../pages/admin/userList/UserList";
// import User from "../pages/admin/user/User";

// import Movie from "../pages/admin/movie/Movie";
// import MovieList from "../pages/admin/movieList/MovieList";
// import AddMovie from "../pages/admin/addMovie/AddMovie";


import Login from "../pages/login/Login";
// import {CheckLogin, ProtectedRoute} from "./protected"
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import HomeAdmin from "../pages/admin/home/HomeAdmin";
import Watch from "../pages/watch/Watch";
import Register from "../pages/register/Register";
import Admin from "../pages/admin/Admin";
import Payment from "../pages/payment/Payment";

const router = createBrowserRouter([
  {
    path: "login",
    element: (
      // <CheckLogin>
      <Login />
      // </CheckLogin>
    ),
  },
  {
    path: "register",
    element: (
      // <CheckLogin>
      <Register />
      // </CheckLogin>
    ),
  },
  {
    path: "payment",
    element: (
      // <CheckLogin>
      <Payment />
      // </CheckLogin>
    ),
  },
  {
    path: "/admin",
    element: (
      // <ProtectedRoute>
      <Admin />
      // </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomeAdmin />,
      },
      // {
      //   path: "users",
      //   element: <UserList />
      // },
      // {
      //   path: "add-user",
      //   element: <AddUser />,
      // },
      // {
      //   path: "user/:userId",
      //   element: <User />
      // },
      // {
      //   path: "movies",
      //   element: <MovieList />
      // },
      // {
      //   path: "movie/:id",
      //   element: <Movie />,
      // },
      // {
      //   path: "add-movie",
      //   element: <AddMovie />
      // },
      // {
      //   path: "lists",
      //   element: <ProductList />
      // },
      // {
      //   path: "list/:id",
      //   element: <Product />,
      // },
      // {
      //   path: "add-list",
      //   element: <AddProduct />
      // },
    ],
  },
  {
    path: "/",
    element: (
      // <ProtectedRoute>
      <Home />
      // </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/watch/*",
        element: <Watch />,
      },
    ],
  },
]);

export default router;
