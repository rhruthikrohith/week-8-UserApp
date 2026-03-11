import React from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router'
import Adduser from './components/Adduser'
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import User from './components/User'
import Userlist from './components/Userlist'
import Rootlayout from './components/rootlayout'

function App() {
 const routerobj=createBrowserRouter([
{
  path:"/",
  element: <Rootlayout />,
  children:[
    {
path:"",
element:<Home/>
    },
    {
    path:"adduser",
    element:< Adduser />
  },
     {
    path:"userlist",
    element:< Userlist />
     },
      {
        path:"user",
        element:<user />
      }
  ]
}
 ])
  return (
   <RouterProvider router={routerobj} />
  )
}

export default App
