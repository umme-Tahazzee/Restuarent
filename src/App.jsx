import React from "react";
import "./App.css";

import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router";
import Navber from "./Components/Navber.jsx";



const App = () => {
  return (
    <>
    <Navber/>
      <Routes>
       
          <Route exact path="/" Component={Home} />
          <Route exact path="/room/" Component={Room} />
          <Route exact path="/room/:slug" Component={SingleRoom} />
          <Route path='*' element={<Error/>} />
      
      </Routes>
    </>
  );
};

export default App;
