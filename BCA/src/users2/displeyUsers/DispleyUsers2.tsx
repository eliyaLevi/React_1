import React, { useContext } from "react";
import { PageHeader } from "../../components/PageHeader";
import { userContext } from "../../provider/UserProvider";
import { starContext } from "../../provider/StarProvider";

import { StarUsers2 } from "../starUsers/StarUsers2";
import { EditUser } from "../../layout/users/editUser/EditUser";
import { NavLink } from "react-router-dom";

export const DispleyUsers2 = () => {
  const { users, setUsers } = useContext(userContext);
  const { stars, setStars } = useContext(starContext);

  const deleteUser = (id: string) => {
    setUsers((users) => {
      return users.filter((user) => user.id !== id);
    });
  };

  const addStar = (id: string): void => {
    const singelStar = stars.find((star) => star.id === id);
    if (singelStar) {
      console.error("המשתמש נמצא כבר במועדפים");
    } else {
      const newStar = users.find((star) => star.id === id);
      console.log(newStar);

      console.log(stars);
      setStars([...stars, newStar!]);
    }
  };

  return (
    <div>
      <PageHeader title="Welcome to the page of provider" subtitle="provider" />
      <button  style={{backgroundColor: "green" }}>
            <NavLink to={"/users/addUser"}>ADD User</NavLink>
          </button>
      <div className="card-list">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h3>UserName : {user.userName} </h3>
            <p>Email : {user.email}</p>
            <p>Age : {user.age}</p>
            <img src={user.img} alt="img dog" />
            <button onClick={() => deleteUser(user.id!)}>Delete User</button>
            <button onClick={() => addStar(user.id!)}>Add To Stars</button>
            <button  style={{backgroundColor: "green" }}>
            <NavLink to={`/users/Edit/${user.id}`}>Update User</NavLink>
          </button>
          </div>
        ))}
      </div>
      <div>
        <StarUsers2 />
      </div>
    </div>
  );
};
