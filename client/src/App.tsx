import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ErrorCard from "./components/ErrorCard/ErrorCard";
import CreateProduct from "./pages/CreateProduct/CreateProduct";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route>
          <NavBar /> */}
          {/* <Routes> */}
            <Route path="home" element={<Home />} />
            <Route path="*" element={<ErrorCard/>} />
            <Route path="createproduct" element={<CreateProduct/>}/>
          {/* </Routes> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
