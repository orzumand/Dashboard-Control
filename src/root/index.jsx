import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../Componets/Sidebar";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            {navbar.map(({ path, element, id, hidden }) => {
              return hidden && <Route key={id} path={path} element={element} />;
            })}
          </Route>
          <Route element={<Sidebar />}>
            {navbar.map((value) => {
              return (
                <Route
                  key={value.id}
                  path={value.path}
                  element={value.element}
                />
              );
            })}
          </Route>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="*" element={<h1>NOTFOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;
