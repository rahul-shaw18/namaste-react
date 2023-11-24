import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
// import Body from "./components/Body";
// import About from "./components/About"
// import Contact from "./components/Contact"
import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Body = lazy(() => import("./components/Body"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  const [userName, setUserName] = useState()
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData=() => {
    setUserName("Lovey Shaw")
  }
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Body />{" "}
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />{" "}
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <Contact />{" "}
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense>
            <RestaurantMenu />{" "}
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
