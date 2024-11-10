import React from "react";
import { Route, Routes } from "react-router-dom";
import { Users } from "../layout/users/Users";
import { ErrorPages } from "../pages/ErrorPages";
import { Login } from "../layout/users/login/login";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/users/*" element={<Users />} />
        <Route path="/Login/*" element={<Login />} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
    </div>
  );
};
