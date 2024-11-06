import React, { useEffect } from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { NewUser } from "./NewUser/NewUser";
import { DispleyUsers } from "./DispleyUsers/DispleyUsers";

export interface User {
  id?: string;
  userName: string;
  email: string;
  age: number;
  img: string;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
   setUsers([
   { id: "string",
    userName: "string",
    email: "string",
    age: 9,
    img: "string",}
   ])
  }, [])
  

  const addUser = (newUser: User): void => {
    newUser.id = v4();
    setUsers([...users, newUser]);
    console.log(users);
  };

  const deleteUser = (id: string) => {
    setUsers((users) => {
      return users.filter((user) => user.id !== id);
    });
  };

  const UpdateUser = (updatedUser: User) => {
    setUsers((prevUsers) => {
      
      return prevUsers.map((user) =>
        user.id === user.id ? { ...user, ...updatedUser } : user
    )})
    
  };

  return (
    <div>
      <NewUser addUser={addUser} />
      <DispleyUsers users={users} deleteUser={deleteUser} updateUser={UpdateUser}/>
    </div>
  );
};
