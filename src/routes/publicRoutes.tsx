// src/routes/publicRoutes.tsx

import type { JSX } from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

type Route = {
  path: string;
  element: JSX.Element;
  auth: boolean;
};

const publicRoutes: Route[] = [
    {
    path: "/login",
    element: <Login />,
    auth: false,
  },
  {
    path: "/",
    element: <Home/>,
    auth: false,
  },

  {
    path: "/forgot-password",
    element: <div>Quên mật khẩu</div>,
    auth: false,
  },
  {
    path: "/verify-email",
    element: <div>Xác minh email</div>,
    auth: false,
  },
];

export { publicRoutes };