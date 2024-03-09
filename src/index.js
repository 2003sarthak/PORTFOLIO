import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './routes/Home'
import Project from './routes/Project'
import About from './routes/About'
import Contact from './routes/Contact'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='project' element={<Project/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

