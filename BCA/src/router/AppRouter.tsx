import React from "react";
import { Route, Routes } from "react-router-dom";
import { Users } from "../layout/users/Users";
import { ErrorPages } from "../pages/ErrorPages";
import { Login } from "../layout/users/login/Login";
import  {DispleyUsers2}  from "../users2/displeyUsers/DispleyUsers2";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/users/*" element={<Users />} />
        <Route path="/Login/*" element={<Login />} />
        <Route path="*" element={<ErrorPages />} />
        <Route path="/Displey" element={<DispleyUsers2 />} />
      </Routes>
    </div>
  );
};
