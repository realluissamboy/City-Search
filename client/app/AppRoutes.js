import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Weather from "../features/Weather/Weather";
import Home from "../features/home/Home";
import Search from "../features/Search/Search";
import Generate from "../features/Generate/Generate";

const AppRoutes = () => {
  return (
    <div id="routes">
      <Routes>
        <Route
          path="/"
          element={<Search name="search" displayName="Search" />}
        />
        <Route
          path="/weather"
          element={<Weather name="weather" displayName="Weather" />}
        />
        <Route path="/home" element={<Home name="home" displayName="Home" />} />
        <Route
          path="/generate"
          element={<Generate name="generate" displayName="Generate" />}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
