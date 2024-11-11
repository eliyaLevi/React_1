import { createContext, useState , ReactNode, Children, useEffect} from "react";
import React  from 'react'

export interface User {
    id?: string;
    userName: string;
    email: string;
    age: number;
    img: string;
  }

interface Props{
    children: React.ReactNode
}
export const userPro = createContext<User[] | null>(null)

export const UserProvider = ({children}: Props) => {

    useEffect(() => {
        fetch("/a.json")
          .then((respons) => respons.json())
          .then((data) => setUsers(data))
          .catch((err) => console.log(err));
      }, []);

    const [users, setUsers] = useState<User[] | null>([])
  return (
    <>
    <userPro.Provider value={users}>
        {children}
    </userPro.Provider >
    </>
  )
}
