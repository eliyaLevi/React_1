import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="nav_container">
          <Link className="nav_link" to={"/users"}>
            HOME
          </Link>
          <Link className="nav_link" to={"users/addUser"}>
            ADD USER
          </Link>
          <Link className="nav_link" to={"users/About"}>
            ABOUT
          </Link>
          <Link className="nav_link" to={"users/Cards"}>
            CARDS
          </Link>
          <Link className="nav_link" to={"/Login"}>
            LOGIN
          </Link>
          <Link className="nav_link" to={"/Displey"}>
            provider
          </Link>
        </div>
      </header>
    </>
  );
}
