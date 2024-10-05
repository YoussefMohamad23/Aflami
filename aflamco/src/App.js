import React, { useEffect, useState } from 'react'
import {jwtDecode} from "jwt-decode"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import Movie from './component/Movie/Movie'
import Tv from './component/Tv/Tv'
import Login from './component/Login/Login'
import Logout from './component/Logout/Logout'
import Register from './component/Register/Register'
import People from './component/People/People'
import Details from './component/Details/Details'
import DetailesTv from './component/Details/DetailesTv'
export default function App() {
  let [loginData,setLoginData]=useState(null)
  function savaLoginData() {
    let encodedToken=localStorage.getItem('token');
    let decodedToken= jwtDecode(encodedToken);
    setLoginData(decodedToken)
    console.log(decodedToken);
  }
  useEffect(()=>{
  if (localStorage.getItem("token")) {
    savaLoginData()
    
  }
},[])

  let routers=createBrowserRouter([
    {path:"",element:<Layout loginData={loginData} setLoginData={setLoginData} />,children:[
      {path:"home",element:<Home/>},
      {path:"movie",element:<Movie/>},
      {path:"tv",element:<Tv/>},
      {path:"people",element:<People/>},
      {path:'details/:id',element:<Details/>},
      {path:'detailstv/:id' , element: <DetailesTv/>},
      {index:true,element:<Login/>},
      {path:"login",element:<Login savaLoginData={savaLoginData}/>},
     {path:"register",element:<Register/>}, 
      {path:"logout",element:<Logout/>},
 
    ]}
  ])
  
  return <>
  
  <RouterProvider router={routers}></RouterProvider>
  
  
  
  
  
  </>
}
