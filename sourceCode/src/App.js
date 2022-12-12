import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./containers/Header";


import Login from "./containers/Login";
import Page404 from "./containers/Page404";

import Home from "./containers/Home";
import ApiHomePage from "./containers/ApiHomePage";
import Footer from "./containers/Footer";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Songs from "./containers/Songs";
import Singlesong from "./containers/Singlesong";
import Register from "./containers/Register";
import Userprofile from "./containers/Userprofile";

import AdminSongs from "./containers/dashboard/AdminSongs";
import AdminUsers from "./containers/dashboard/AdminUsers";
import AdminPosts from "./containers/dashboard/AdminPosts";
import AdminComments from "./containers/dashboard/AdminComments";

function App() {


  return (
    <div className="App">
      <BrowserRouter>


        <Header />
        <Routes>
        <Route path="/login"  element={<Login/>} />
        <Route path="/"  element={<Home/>} />
        <Route path="/songs"  element={<Songs/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path=":songId"  element={<Singlesong/>} />
        <Route path="/regester"  element={<Register/>} />
        <Route path="/userprofile"  element={<Userprofile/>} />




        {/* Admin Routes */}
        <Route path="/adminsongs"  element={<AdminSongs/>} />
        <Route path="/adminusers"  element={<AdminUsers/>} />
        <Route path="/adminoposts"  element={<AdminPosts/>} />
        <Route path="/admincomments"  element={<AdminComments/>} />
        

          {/* <Route path="/product/:productId" element={<ProductDetails/>} /> */}
         
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
