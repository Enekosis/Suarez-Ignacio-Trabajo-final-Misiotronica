import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './Routes/Home';
import Shop from './Routes/Shop';
import Contact from './Routes/Contact';
import About from './Routes/About';
import "./App.css"
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

const AppLayout = () => (
  <>
  <NavBar />
  <Outlet />
  <Footer />
  </>
)

const router = createBrowserRouter([

  {
    element: <AppLayout />,
    children: [
      { path: "/", element: (<Home />) },
      { path: "tienda", element: (<Shop />) },
      { path: "contacto", element: (<Contact />) },
      { path: "nosotros", element: (<About />) }
    ]
  }
])


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
