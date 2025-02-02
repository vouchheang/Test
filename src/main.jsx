import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Farmers from "./pages/Farmer";
import Account from "./pages/Accounts";
import "./index.css";
import App from "./App";
import Farmland from "./pages/Farmland";
import Cropcycles from "./pages/Crop-cycles";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Oop! Error!</h1>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/farmers",
        element: <Farmers />,
      },
      {
        path: "/farmlands",
        element: <Farmland />,
      },
      {
        path: "/account",
        element: <Account />,
      },

      { path: "/crop cylces",
       element: <Cropcycles /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
