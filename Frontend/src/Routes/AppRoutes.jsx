import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Router, Routes } from "react-router-dom";
import clientRoutes from "./ClientRoutes/clientRoutes";
const AppRoutes = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {[...clientRoutes].map((route, index) =>
            React.cloneElement(route, { key: index })
          )}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppRoutes;
