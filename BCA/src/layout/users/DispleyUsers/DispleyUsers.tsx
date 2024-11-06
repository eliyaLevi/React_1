import React, {useState} from "react";
import style from "../../../../public/vite.svg"
import { EditUser } from "../editUser/EditUser";



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
  updateUser: (user: User) => void;
}

export const DispleyUsers = (props: PropsUser) => {
    const [user, setuser] = useState <User>()
    const [flag, setFlag] = useState(false)

     

    
  return (
    <div className="card-list">
      {props.users.map((user) => (
        <div  key={user.id} className="card">
          <h3>UserName : {user.userName} </h3>
          <p>Email : {user.email}</p>
          <p>Age : {user.age}</p>
          <img src={user.img} alt="img dog" />
          <button onClick={() => props.deleteUser(user.id!)}>Delete User</button>
          <button onClick={() => setFlag(true)}>Update User</button>
          {flag && <EditUser editUser={props.updateUser} user={user}/>}
        </div>
      ))}
    </div>
  );
};
