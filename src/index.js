import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Header from './component/header/Hearder';
import ProjetEnCours from './pages/Projet-en-cours/ProjetEnCours';
import FitTimer from './pages/Projet-en-cours/FitTimer';
import EpkData from './pages/Projet-en-cours/EpkData';
import SiteVitrine from './pages/Projet-en-cours/SiteVitrine';


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
      },
      {
        path : "/projects",
        element : <ProjetEnCours />,
        children : [
          {
            path : "/projects/fit-timer",
            element : <FitTimer />
          },
          {
            path : "/projects/epk-data",
            element : <EpkData />
          },
          {
            path : "/projects/site-vitrine",
            element : <SiteVitrine />
          }
        ]
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

