import React, {useState, useEffect} from 'react'
import {v4} from "uuid"
import { DispleyUsers } from './DispleyUsers/DispleyUsers';

interface User {
    id?: string;
    userName: string;
    email: string;
    age: number;
    img: string;
  }

export interface Props {
    sterusers: User[]
  }
  
export const StarUsers = (props: Props) => {

   

  return (
      <>
      <h1>רשימת המועדפים שלי</h1>
      <div className="card-list">
      {props.sterusers.map((user) => (
        <div key={user.id} className="card">
          <h3>UserName : {user.userName} </h3>
          <p>Email : {user.email}</p>
          <p>Age : {user.age}</p>
          <img src={user.img} alt="img dog" />
          <button>
            Delte
          </button>
        </div>
      ))}
    </div>
    </>
  
  )
}
