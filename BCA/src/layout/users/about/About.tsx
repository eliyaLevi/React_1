import React from "react";
import { PageHeader } from "../../../components/PageHeader";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    
  <div>
    <PageHeader title="Welcome to the page of About" subtitle="About"/>
      <div>
        <Link to={"/users"}>חזרה לדף הבית</Link>
      </div>
  </div>
)
};
