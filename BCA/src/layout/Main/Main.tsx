import React from "react";
import { Users } from "../users/Users";


interface Props{
  Children: React.ReactNode
}

const Main = ({Children}: Props) => {
  return (
    <main>
       {Children} 
    </main>
  );
};

export default Main;
