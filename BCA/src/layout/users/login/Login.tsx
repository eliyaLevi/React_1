import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { PageHeader } from '../../../components/PageHeader';

interface User {
    userName: string;
    email: string;
    age: number;
    img: string;
  }

export interface Props {
    addUser: (newUser: User) => void;
  }

export const Login = (props: Props) => {

    const [userName, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState<number>(0);
    const [img, setImg] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    
        props.addUser({ userName, email, age, img });
    
        setuserName("");
        setEmail("");
        setAge(0);
        setImg("");
      };
  return (
    <div>
        <PageHeader title="Welcome to the page of Login" subtitle="login"/>
        <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="UserName">User Name</label>
        <input
          id="UserName"
          type="text"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          placeholder="userName"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="password"
        />


        <button type="submit" style={{backgroundColor: "green" }}>Login</button>
        <button type="submit" style={{backgroundColor: "red",  color: "white"}}><Link to={"/users"}>Cancel</Link></button>
      </form>
    </div>
    </div>
  )
}
