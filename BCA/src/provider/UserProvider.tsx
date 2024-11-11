import { createContext, useState , ReactNode, Children, useEffect} from "react";
import React  from 'react'

export interface User {
    id?: string;
    userName: string;
    email: string;
    age: number;
    img: string;
  }

interface Userprops{
    users: User[]
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

interface Props{
    children: React.ReactNode
}
export const userContext = createContext<Userprops>({
    users: [],
    setUsers: () => {}
})

export const UserProvider = ({children}: Props) => {
    
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        fetch("/a.json")
        .then((respons) => respons.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err));
    }, []);
    
  return (
    <>
    <userContext.Provider value={{users, setUsers}}>
        {children}
    </userContext.Provider >
    </>
  )
}
