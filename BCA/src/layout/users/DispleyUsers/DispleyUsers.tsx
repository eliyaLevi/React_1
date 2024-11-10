import React, { useState } from "react";
import { EditUser } from "../editUser/EditUser";
import { NavLink } from "react-router-dom";
import { PageHeader } from "../../../components/PageHeader";

interface User {
  id?: string;
  userName: string;
  email: string;
  age: number;
  img: string;
}

export interface PropsUser {
  users: User[];
  deleteUser: (id: string) => void;
  UpdateSetUser: (user: User) => void;
  addStar: (user: User) => void;
}

export const DispleyUsers = (props: PropsUser) => {
  const [user, setuser] = useState<User>();
  const [flag, setFlag] = useState(false);

  return (
    <div>
       <PageHeader title="Welcome to the page of home" subtitle="home"/>
       <div className="card-list">
      {props.users.map((user) => (
        <div key={user.id} className="card">
          <h3>UserName : {user.userName} </h3>
          <p>Email : {user.email}</p>
          <p>Age : {user.age}</p>
          <img src={user.img} alt="img dog" />
          <button onClick={() => props.deleteUser(user.id!)}>
            Delete User
          </button>
          <button  onClick={() => props.addStar(user)} style={{backgroundColor: "gold" }}>star</button>
          <button onClick={() => props.UpdateSetUser(user)} style={{backgroundColor: "green" }}>
            <NavLink to={`/users/Edit/${user.id}`}>Update User</NavLink>
          </button>
        </div>
      ))}
    </div>
    </div>
    
  );
};
