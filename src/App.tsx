import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AuthPage from "./pages/AuthPage";
import FuncPage from "./pages/FuncPage";
import FuncLayout from "./layouts/FuncLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Homepage /> }],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [{ index: true, element: <AuthPage /> }],
  },
  {
    path: "summarize",
    element: <FuncLayout />,
    children: [{ index: true, path: ":id", element: <FuncPage /> }],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
