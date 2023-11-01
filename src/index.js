import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Header from './component/Hearder';


const router =  createBrowserRouter([
  {
    path:"/",
    element : <Header/>,
    children : [
      {
        path : "/",
        element: <Home />,
      },
      {
        path : "/portfolio",
        element: <Portfolio />,
      },
      {
        path : "/about",
        element: <About />,
      },
      {
        path : "/contact",
        element: <Contact />,
      }
    ]
  }
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />    
  </React.StrictMode>
);

