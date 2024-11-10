import React, { useEffect } from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { NewUser } from "./NewUser/NewUser";
import { DispleyUsers } from "./DispleyUsers/DispleyUsers";
import { StarUsers } from "./StarUsers";
import { Route, Routes } from "react-router-dom";
import { About } from "./about/About";
import { Cards } from "./cards/Cards";
import { EditUser } from "./editUser/EditUser";
import { ErrorPages } from "../../pages/ErrorPages";

export interface User {
  id?: string;
  userName: string;
  email: string;
  age: number;
  img: string;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [starUsers, setStarUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch("/a.json")
      .then((respons) => respons.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const addUser = (newUser: User): void => {
    newUser.id = v4();
    setUsers([...users, newUser]);
    console.log(users);
  };

  const addStar = (newUser: User): void => {
    if (starUsers.find((u) => u.id === newUser.id)) {
      console.error("המשתמש נמצא כבר במועדפים");
    } else {
      setStarUsers([...starUsers, newUser]);
    }
  };

  const deleteUser = (id: string) => {
    setUsers((users) => {
      return users.filter((user) => user.id !== id);
    });
  };

  const UpdateUser = (user: User) => {
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
  };

  const UpdateSetUser = (user: User) => {
    setUser(user);
  };

  return (
    <div>
      <Routes>
        <Route path="/addUser" element={<NewUser addUser={addUser} />} />
        <Route
          path="/"
          element={
            <DispleyUsers
              users={users}
              deleteUser={deleteUser}
              UpdateSetUser={UpdateSetUser}
              addStar={addStar}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/Cards" element={<Cards />} />
        <Route
          path="/Edit/:id"
          element={<EditUser user={user!} UpdateUser={UpdateUser} />}
        />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
      <div>
      {/* <StarUsers sterusers={starUsers}/> */}
      </div>

    </div>
  );
};
