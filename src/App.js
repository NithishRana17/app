import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import React from "react";
import Login from "./pages/Login";
import AddReview from "./pages/AddReview";

const routerPaths = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/details", element: <Details /> },
  { path: "/login", element: <Login /> },
  { path: "/addreview", element: <AddReview /> },
]);

function App() {
  return (
    <div>
      <div>
        <h1>learn react</h1>
      </div>
      <RouterProvider router={routerPaths} />
    </div>
  );
}

export default App;
